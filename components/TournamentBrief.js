import React from 'react';
import { Text, View, Button, AsyncStorage } from 'react-native';
import homeStyle from '../styles/homeStyle';
import { withNavigation } from 'react-navigation';

class TournamentBrief extends React.Component {
    constructor() {
        super();
        this.state = {
            completed: '',
            size: ''
        }
    }

    componentDidMount() {
        AsyncStorage.getItem(this.props.name).then((result) => {
            if (result !== null) {
                jsonResult = JSON.parse(result);
                var completed = 'COMPLETED';
                if(jsonResult["completed"] === 0) {
                    completed = 'UNCOMPLETED';
                }
                this.setState({ completed: completed, size: jsonResult["size"] });
            }
        });
    }
    render() {
        return (
            <View style={homeStyle.summaryContainer}>
                <Button
                    title={this.props.name}
                    onPress={() => this.props.navigation.navigate('ViewTournament', {
                        name: JSON.stringify(this.props.name)
                    })}
                />
                <Text style={homeStyle.infoText}>{this.state.size} People - {this.state.completed}</Text>
            </View>
        );
    }
}

export default withNavigation(TournamentBrief);

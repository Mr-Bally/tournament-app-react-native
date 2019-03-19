import React from 'react';
import { View, AsyncStorage } from 'react-native';
import homeStyle from '../styles/homeStyle';
import TournamentHeader from '../components/TournamentHeader';
import RoundOptions from '../components/RoundOptions';
import BoutList from '../components/BoutList';

export default class ViewTournament extends React.Component {
    constructor() {
        super();
        this.state = {
            tournament: {}
        };
    }

    static navigationOptions = {
        title: 'View Tournament'
    };

    componentDidMount() {
        const { navigation } = this.props;
        const name = JSON.parse(navigation.getParam('name'));
        AsyncStorage.getItem(name).then((result) => {
            if (result !== null) {
                var jsonResult = JSON.parse(result)
                this.setState({ tournament: jsonResult });
            }
        });
    }

    render() {
        return (
            <View style={homeStyle.container}>
                <TournamentHeader 
                    name={this.state.tournament.tournamentName} 
                    weight={this.state.tournament.weight} 
                    size={this.state.tournament.size} 
                    completed={this.state.tournament.completed} 
                />
                <RoundOptions />
                <BoutList />
            </View>
        );
    }
}

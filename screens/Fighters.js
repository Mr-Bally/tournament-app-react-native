import React from 'react';
import { View, ScrollView } from 'react-native';
import homeStyle from '../styles/homeStyle';
import AddFighter from '../components/AddFighter';
import { Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

class NewTournament extends React.Component {
    static navigationOptions = {
        title: 'Fighters',
        headerLeft: null
    };
    render() {
        return (
            <View>
                <ScrollView>
                    <AddFighter />
                    <AddFighter />
                    <View style={homeStyle.buttonContainer}>
                        <Button
                            title="Save"
                            onPress={() => this.props.navigation.navigate('ViewTournament')}
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default withNavigation(NewTournament);

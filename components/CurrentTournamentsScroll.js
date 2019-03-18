import React from 'react';
import { ScrollView, View, AsyncStorage } from 'react-native';
import { withNavigation } from 'react-navigation';
import TournamentBrief from './TournamentBrief'

class CurrentTournamentsScroll extends React.Component {
    constructor() {
        super();
        this.getAllKeys = this.getAllKeys.bind(this);
    }

    async getAllKeys() {
        try {
            await AsyncStorage.getAllKeys().then((data) => {
                console.log(data)
                return data;
            });
        } catch (error) {
            console.log(error.message);
        }
    }

    render() {
        this.keys = this.getAllKeys();

        return (
            <View>
                <ScrollView>
                    {
                        this.keys.map((item, key) =>
                            (
                                <TournamentBrief />
                            ))
                    }
                </ScrollView>
            </View>
        );
    }
}

export default withNavigation(CurrentTournamentsScroll);
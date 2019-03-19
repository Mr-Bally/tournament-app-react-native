import React from 'react';
import { ScrollView, View, AsyncStorage } from 'react-native';
import { withNavigation } from 'react-navigation';
import TournamentBrief from './TournamentBrief'

class CurrentTournamentsScroll extends React.Component {
    constructor() {
        super();
        this.state = {
            tournamentNames: []
        }
        this.getKeys = this.getKeys.bind(this);
    }

    async getKeys() {
        try {
            const allKeys = AsyncStorage.getAllKeys();
            return allKeys
        } catch (error) {
            console.log(error.message);
        }
        return
    }

    componentDidMount() {
        AsyncStorage.getAllKeys((errs, result) => {
            if (!errs) {
                if (result !== null) {
                    this.setState({ tournamentNames: result });
                }
            }
        })
    }

    render() {
        return (
            <View>
                <ScrollView>
                    {
                        this.state.tournamentNames.map((item, key) =>
                            (
                                <TournamentBrief name={item} key={key} />
                            ))
                    }
                </ScrollView>
            </View>
        );
    }
}

export default withNavigation(CurrentTournamentsScroll);
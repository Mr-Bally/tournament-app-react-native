import React from 'react';
import { ScrollView, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import TournamentBrief from './TournamentBrief'

class CurrentTournamentsScroll extends React.Component {
    render() {
        return (
            <View>
                <ScrollView>
                    <TournamentBrief />
                </ScrollView>
            </View>
        );
    }
}

export default withNavigation(CurrentTournamentsScroll);
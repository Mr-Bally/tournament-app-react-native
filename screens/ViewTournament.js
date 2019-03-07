import React from 'react';
import { View, Text } from 'react-native';
import homeStyle from '../styles/homeStyle';
import TournamentHeader from '../components/TournamentHeader';
import RoundOptions from '../components/RoundOptions';
import BoutList from '../components/BoutList';

export default class ViewTournament extends React.Component {
    static navigationOptions = {
        title: 'View Tournament'
    };
    render() {
        return (
            <View style={homeStyle.container}>
                <TournamentHeader />
                <RoundOptions />
                <BoutList />
            </View>
        );
    }
}

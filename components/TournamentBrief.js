import React from 'react';
import { Text, View, Button } from 'react-native';
import homeStyle from '../styles/homeStyle';

export default class TournamentBrief extends React.Component {
    render() {
        return (
            <View style={homeStyle.summaryContainer}>
                <Button title="Example Tournament" />
                <Text style={homeStyle.infoText}>8 People - COMPLETED</Text>
            </View>
        );
    }
}

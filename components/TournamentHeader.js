import React from 'react';
import { View, Text } from 'react-native';
import homeStyle from '../styles/homeStyle';

export default class TournamentHeader extends React.Component {
    render() {
        return (
            <View style={homeStyle.container}>
                <Text style={homeStyle.headerText}>Tournament name</Text>
                <Text style={homeStyle.infoText}>Weight: 70Kg</Text>
                <Text style={homeStyle.infoText}>Size: 8</Text>
                <Text style={homeStyle.infoText}>Status: Ongoing</Text>
                <Text style={homeStyle.infoText}>Winner: TBD</Text>
            </View>
        );
    }
}

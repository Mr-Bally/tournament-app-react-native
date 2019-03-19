import React from 'react';
import { View, Text } from 'react-native';
import homeStyle from '../styles/homeStyle';

export default class TournamentHeader extends React.Component {
    constructor() {
        super();
    }
    render() {
        console.log('this.props');
        console.log(this.props);
        this.completed = 'Completed';
        if(this.props.completed === 0) {
            this.completed = 'Ongoing';
        }
        return (
            <View style={homeStyle.container}>
                <Text style={homeStyle.headerText}>{this.props.name}</Text>
                <Text style={homeStyle.infoText}>Weight: {this.props.weight}</Text>
                <Text style={homeStyle.infoText}>Size: {this.props.size}</Text>
                <Text style={homeStyle.infoText}>Status: {this.completed}</Text>
                <Text style={homeStyle.infoText}>Winner: TBD</Text>
            </View>
        );
    }
}

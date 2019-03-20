import React from 'react';
import { ScrollView, View } from 'react-native';
import Bout from './Bout';

export default class BoutList extends React.Component {
    constructor() {
        super();
        this.state = {
            bouts: []
        }
        this.setBouts = this.setBouts.bind(this);
    }

    setBouts(fighters, rounds, roundNum) {
        if (rounds[roundNum].length === 0) {
            console.log('no bouts scheduled yet');
        }
    }
    render() {
        console.log(this.props.fighters);
        this.setBouts(this.props.fighters, this.props.rounds, this.props.roundNum);
        return (
            <View style={homeStyle.headerContainer}>
                <ScrollView>
                    <Bout />
                    <Bout />
                    <Bout />
                    <Bout />
                    <Bout />
                    <Bout />
                </ScrollView>
            </View>
        );
    }
}

import React from 'react';
import { ScrollView, View } from 'react-native';
import Bout from './Bout';

export default class BoutList extends React.Component {
    render() {
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

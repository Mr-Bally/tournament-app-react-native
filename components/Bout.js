import React from 'react';
import { Text, View, Button } from 'react-native';
import homeStyle from '../styles/homeStyle';

export default class Bout extends React.Component {
    render() {
        return (
            <View>
                <Text style={homeStyle.infoText}>Winner: Jones (DEC)</Text>
                <Button
                    title="Jones VS Ammari"
                    style={homeStyle.buttonGroup}
                />
            </View>
        );
    }
}

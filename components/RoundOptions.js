import React from 'react';
import { View, Picker } from 'react-native';
import homeStyle from '../styles/homeStyle';

export default class RoundOptions extends React.Component {
    render() {
        return (
            <View style={homeStyle.inputContainer}>
            <Picker style={homeStyle.picker}>
                <Picker.Item label="Final" value="male" />
                <Picker.Item label="Semi final" value="female" />
            </Picker>
        </View>
        );
    }
}

import React from 'react';
import { Text, View } from 'react-native';
import homeStyle from '../styles/homeStyle';
import NumericInput from 'react-native-numeric-input';
import { Input } from 'react-native-elements';

export default class AddFighter extends React.Component {
    render() {
        return (
            <View>
                <View style={homeStyle.inputContainer}>
                    <Input placeholder='Name' />
                </View>
                <View style={homeStyle.inputContainer}>
                    <Text style={homeStyle.infoText}>Weight</Text>
                    <NumericInput minValue={20} maxValue={200} onChange={value => console.log(value)} />
                </View>
            </View>
        );
    }
}

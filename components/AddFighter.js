import React from 'react';
import { Text, View } from 'react-native';
import homeStyle from '../styles/homeStyle';
import { Input } from 'react-native-elements';

export default class AddFighter extends React.Component {
    constructor(key, item) {
        super();
        this.state = {
            fighterName: '',
            weight: ''
        };
    }
    render() {
        return (
            <View style={homeStyle.summaryContainer}>
                <View style={homeStyle.inputContainer}>
                    <Input
                        type='text'
                        placeholder='Name'
                        name='fighterName'
                        onChangeText={(val) => this.setState({ fighterName: val })}
                    />
                </View>
                <View style={homeStyle.inputContainer}>
                    <Input
                        keyboardType='numeric'
                        onChangeText={(val) => this.setState({ weight: val })}
                        maxLength={2}
                        placeholder='Weight'
                        name='weight'
                    />
                </View>
            </View>
        );
    }
}

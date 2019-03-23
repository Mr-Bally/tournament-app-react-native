import React from 'react';
import { View } from 'react-native';
import homeStyle from '../styles/homeStyle';
import { Input } from 'react-native-elements';

export default class AddFighter extends React.Component {
    updateParent(data) {
        this.props.updateParent(data);
    }

    render() {
        return (
            <View style={homeStyle.summaryContainer}>
                <View style={homeStyle.inputContainer}>
                    <Input
                        type='text'
                        placeholder='Name'
                        name='fighterName'
                        onChangeText={(val) => this.updateParent({ name: val, id: this.props.id })}
                    />
                </View>
                <View style={homeStyle.inputContainer}>
                    <Input
                        keyboardType='numeric'
                        onChangeText={(val) => this.updateParent({ weight: val, id: this.props.id })}
                        maxLength={6}
                        placeholder='Weight'
                        name='weight'
                    />
                </View>
            </View>
        );
    }
}

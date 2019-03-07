import React from 'react';
import { Button, Text, View, Picker } from 'react-native';
import homeStyle from '../styles/homeStyle';
import NumericInput from 'react-native-numeric-input';
import { Input } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

class CreateTournamentInput extends React.Component {
    render() {
        return (
            <View style={homeStyle.container}>
                <View style={homeStyle.inputContainer}>
                    <Input placeholder='Name' />
                </View>
                <View style={homeStyle.inputContainer}>
                    <Text style={homeStyle.infoText}>Size</Text>
                    <NumericInput minValue={2} maxValue={64} onChange={value => console.log(value)} />
                </View>
                <View style={homeStyle.inputContainer}>
                    <Text style={homeStyle.infoText}>Weight</Text>
                    <NumericInput minValue={20} maxValue={200} onChange={value => console.log(value)} />
                </View>
                <View style={homeStyle.inputContainer}>
                    <Picker style={homeStyle.picker}>
                        <Picker.Item label="Male" value="male" />
                        <Picker.Item label="Female" value="female" />
                    </Picker>
                </View>
                <View style={homeStyle.buttonContainer}>
                    <Button
                        onPress={() => this.props.navigation.navigate('Fighters')}
                        title="Create Tournament"
                    />
                </View>
            </View>
        );
    }
}

export default withNavigation(CreateTournamentInput);

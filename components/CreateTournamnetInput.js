import React from 'react';
import { Button, Text, TextInput, View, Picker } from 'react-native';
import homeStyle from '../styles/homeStyle';
import NumericInput from 'react-native-numeric-input';
import { Input } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

class CreateTournamentInput extends React.Component {
    render() {
        return (
            <View style={homeStyle.container}>
                <Input placeholder='Name' />
                <NumericInput minValue={2} maxValue={64} onChange={value => console.log(value)} />
                <NumericInput minValue={20} maxValue={200} onChange={value => console.log(value)} />
                <Picker>
                    <Picker.Item label="Male" value="male" />
                    <Picker.Item label="Female" value="female" />
                </Picker>
                <Button
                    onPress={() => this.props.navigation.navigate('Fighters')}
                    title="Create Tournament"
                />
            </View>
        );
    }
}

export default withNavigation(CreateTournamentInput);

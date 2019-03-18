import React from 'react';
import { Button, View, Picker, Alert, AsyncStorage } from 'react-native';
import homeStyle from '../styles/homeStyle';
import { Input } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

class CreateTournamentInput extends React.Component {
    constructor() {
        super();
        this.state = {
            tournamentName: '',
            size: '',
            weight: '',
            sex: 'male'
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.storeItem = this.storeItem.bind(this);
    }

    async storeItem(key, item) {
        try {
            await AsyncStorage.setItem(key, JSON.stringify(item));
        } catch (error) {
            console.log(error.message);
        }
    }

    handleSubmit() {
        if (this.state.tournamentName === '' || this.state.size === '' || this.state.weight === '' || this.state.sex === '') {
            Alert.alert('Please make sure you have entered all the details required');
        } else if (![2, 4, 8, 16, 32, 64].includes(parseInt(this.state.size))) {
            Alert.alert('The tournament size must be a power of 2');
        } else {
            this.storeItem(this.state.tournamentName, this.state);
            this.props.navigation.navigate('Fighters', {
                details: JSON.stringify(this.state)
            });
            title = "Create Tournament";
        }
    }

    render() {
        return (
            <View style={homeStyle.container}>
                <View style={homeStyle.inputContainer}>
                    <Input
                        type='text'
                        placeholder='Name'
                        name='tournamentName'
                        onChangeText={(val) => this.setState({ tournamentName: val })}
                    />
                </View>
                <View style={homeStyle.inputContainer}>
                    <Input
                        keyboardType='numeric'
                        onChangeText={(val) => this.setState({ size: val })}
                        maxLength={2}
                        placeholder='Size'
                        name='size'
                    />
                </View>
                <View style={homeStyle.inputContainer}>
                    <Input
                        keyboardType='numeric'
                        onChangeText={(val) => this.setState({ weight: val })}
                        maxLength={6}
                        placeholder='Weight(KG)'
                        name='weight'
                    />
                </View>
                <View style={homeStyle.inputContainer} >
                    <Picker
                        style={homeStyle.picker}
                        name='sex'
                        selectedValue={this.state.sex}
                        onValueChange={(val, itemIndex) =>
                            this.setState({ sex: val })
                        }
                    >
                        <Picker.Item key="0" value="male" label="Male" />
                        <Picker.Item key="1" value="female" label="Female" />
                    </Picker>
                </View>
                <View style={homeStyle.buttonContainer}>
                    <Button
                        onPress={this.handleSubmit}
                        title="Create Tournament"
                    />
                </View>
            </View>
        );
    }
}

export default withNavigation(CreateTournamentInput);

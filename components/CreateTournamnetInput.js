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
            sex: 'male',
            completed: 0,
            champion: 'TBD',
            rounds: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async storeItem(key, item) {
        var setUpRounds = this.setUpRounds(parseInt(this.state.size));
        item.rounds = setUpRounds;
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

    setUpRounds(size) {
        var num = size;
        var rounds = new Array();
        var finished = false;
        while (!finished) {
            if (num === 2) {
                rounds.push(new Array(this.createBout(0)));
                finished = true;
            } else {
                var newArray = new Array();
                for (var x = 0; x < (num / 2); x++) {
                    newArray.push(this.createBout(x));
                }
                rounds.push(newArray);
                num = num / 2;
            }
        }
        return rounds;
    }

    createBout(num) {
        return { boutNum: num, fighterOne: '', fighterTwo: '', winner: 0, method: '' }
    }

    render() {
        return (
            <View style={homeStyle.container}>
                <View style={homeStyle.inputContainer}>
                    <Input
                        inputStyle={homeStyle.input}
                        type='text'
                        placeholder='Name'
                        name='tournamentName'
                        onChangeText={(val) => this.setState({ tournamentName: val })}
                    />
                </View>
                <View style={homeStyle.inputContainer}>
                    <Input
                        inputStyle={homeStyle.input}
                        keyboardType='numeric'
                        onChangeText={(val) => this.setState({ size: val })}
                        maxLength={2}
                        placeholder='Size'
                        name='size'
                    />
                </View>
                <View style={homeStyle.inputContainer}>
                    <Input
                        inputStyle={homeStyle.input}
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

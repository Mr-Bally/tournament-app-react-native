import React from 'react';
import { Button, Text, View, Picker, Alert } from 'react-native';
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
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    handleSubmit(evt) {
        console.log(this.state);
        if (this.state.tournamentName === '' || this.state.size === '' || this.state.weight === '' || this.state.sex === '') {
            Alert.alert(
                'Please make sure you have entered all the details required'
            )
        } else if (this.state.size % 2 !== 0) {
            Alert.alert(
                'The tournament size must be a multiple of 2'
            )
        } else {
            // Save the state as a new object and pass the ID of new object to page
            this.props.navigation.navigate('Fighters');
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

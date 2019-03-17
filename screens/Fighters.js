import React from 'react';
import { View, ScrollView, AsyncStorage } from 'react-native';
import homeStyle from '../styles/homeStyle';
import AddFighter from '../components/AddFighter';
import { Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

class NewTournament extends React.Component {
    constructor() {
        super();
        const { navigation } = this.props;
        const name = navigation.getParam('tournamentName');
        console.log('Deets');
        console.log(name);
        //this.fighterNumbers = new Array(parseInt(tournamnetDetails.size)).fill('0');
        this.fighterNumbers = ['sdf', 'sdf', 'sdf', 'sdf'];

        this.state = {
            fighters: ''
            
        };
        this.getAll = this.getAll.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clear = this.clear.bind(this);
    }

    async getAll() {
        try {
            return await AsyncStorage.getAllKeys();
        } catch (error) {
            console.log(error.message);
        }
    }

    async clear() {
        try {
            return await AsyncStorage.clear();
        } catch (error) {
            console.log(error.message);
        }
    }

    handleSubmit() {
        /*this.clear().then(() => {
            this.getAll().then((data) => {
                console.log(data);
            });
        });*/

    }

    static navigationOptions = {
        title: 'Fighters',
        headerLeft: null
    };
    render() {
        return (
            <View>
                <ScrollView>
                    {
                        this.fighterNumbers.map((item, key) =>
                            (
                                <AddFighter key={key} item={item}/>
                            ))
                    }
                    <View style={homeStyle.buttonContainer}>
                        <Button
                            title="Save"
                            onPress={this.handleSubmit}
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default withNavigation(NewTournament);

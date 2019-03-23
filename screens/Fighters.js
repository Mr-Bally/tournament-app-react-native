import React from 'react';
import { View, ScrollView, AsyncStorage } from 'react-native';
import homeStyle from '../styles/homeStyle';
import AddFighter from '../components/AddFighter';
import { Button } from 'react-native-elements';
import { StackActions, withNavigation, NavigationActions } from 'react-navigation';

class Fighters extends React.Component {
    constructor() {
        super();
        this.state = {
            tournamentName: '',
            fighters: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        this.merge(this.state.tournamentName, this.state.fighters);
        const resetAction = StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Home' })
            ],
        });
        this.props.navigation.dispatch(resetAction);
        this.props.navigation.navigate('ExistingTournaments');
    }

    async merge(key, item) {
        try {
            await AsyncStorage.mergeItem(key, JSON.stringify({ "fighters": item }));
        } catch (error) {
            console.log(error.message);
        }
    }

    childUpdate(data) {
        this.state.fighters[data.id][Object.keys(data)[0]] = data[Object.keys(data)[0]]
    }

    static navigationOptions = {
        title: 'Fighters',
        headerLeft: null,
        headerStyle: {
            backgroundColor: '#002E2C'
        },
        headerTintColor: '#bebece',
        headerTitleStyle: {
            color: '#bebece',
        }
    };
    render() {
        const { navigation } = this.props;
        const details = JSON.parse(navigation.getParam('details'));
        this.state.tournamentName = details['tournamentName'];
        this.fighterNumbers = new Array();
        for (var i = 0; i < parseInt(details['size']); i++) {
            this.fighterNumbers.push(i);
            this.state.fighters.push({ name: '', weight: '' });
        }

        return (
            <View style={homeStyle.container}>
                <ScrollView>
                    {
                        this.fighterNumbers.map((item, key) =>
                            (
                                <AddFighter id={item} key={key} updateParent={this.childUpdate.bind(this)} />
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

export default withNavigation(Fighters);

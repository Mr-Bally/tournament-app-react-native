import React from 'react';
import { View, AsyncStorage, Button } from 'react-native';
import homeStyle from '../styles/homeStyle';
import TournamentHeader from '../components/TournamentHeader';
import RoundOptions from '../components/RoundOptions';
import BoutList from '../components/BoutList';
import { withNavigation } from 'react-navigation';

class ViewTournament extends React.Component {
    constructor() {
        super();
        this.state = {
            tournament: {},
            currentRound: 0,
            hasLoaded: false
        };
        this.deleteTournament = this.deleteTournament.bind(this);
        this.delete = this.delete.bind(this);
    }

    static navigationOptions = {
        title: 'View Tournament'
    };

    componentDidMount() {
        const { navigation } = this.props;
        const name = JSON.parse(navigation.getParam('name'));
        AsyncStorage.getItem(name).then((result) => {
            if (result !== null) {
                var jsonResult = JSON.parse(result)
                this.setState({ tournament: jsonResult, hasLoaded: true });
            }
        });
    }

    childUpdate(data) {
        this.setState({ currentRound: data, hasLoaded: true }, () => {
            console.log(this.state, 'state');
        });
    }

    delete() {
        this.deleteTournament(this.state.tournament.tournamentName).then(() => {
            this.props.navigation.navigate('Home');
        });
    }

    async deleteTournament(key) {
        try {
            await AsyncStorage.removeItem(key);
        } catch (error) {
            console.log(error.message);
        }
    }

    render() {
        if (this.state.hasLoaded) {
            return (
                <View style={homeStyle.container}>
                    <TournamentHeader
                        name={this.state.tournament.tournamentName}
                        weight={this.state.tournament.weight}
                        size={this.state.tournament.size}
                        completed={this.state.tournament.completed}
                        winner={this.state.tournament.champion}
                    />
                    <View style={homeStyle.buttonContainer}>
                        <Button
                            onPress={this.delete}
                            title="Delete"
                        />
                    </View>
                    <RoundOptions
                        size={this.state.tournament.size}
                        updateParent={this.childUpdate.bind(this)}
                    />
                    <BoutList
                        roundNum={this.state.currentRound}
                        fighters={JSON.stringify(this.state.tournament.fighters)}
                        rounds={JSON.stringify(this.state.tournament.rounds)}
                        tournamentName={this.state.tournament.tournamentName}
                    />
                </View>
            );
        } else {
            return <View />;
        }
    }
}

export default withNavigation(ViewTournament);

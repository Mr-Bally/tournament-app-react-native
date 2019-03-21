import React from 'react';
import { View, AsyncStorage } from 'react-native';
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
                this.setState({ tournament: jsonResult, currentRound: 0, hasLoaded: true });
            }
        });
    }

    childUpdate(data) {
        this.setState({currentRound: data});
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
                        winner={this.state.tournament.winner}
                    />
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
        }
        return <View />;
    }
}

export default withNavigation(ViewTournament);

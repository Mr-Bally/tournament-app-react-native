import React from 'react';
import { ScrollView, View, AsyncStorage } from 'react-native';
import Bout from './Bout';
import { withNavigation } from 'react-navigation';

class BoutList extends React.Component {
    constructor() {
        super();
        this.state = {
            refresh: true
        };
        this.isRoundCompleted = this.isRoundCompleted.bind(this);
        this.isRoundCreated = this.isRoundCreated.bind(this);
        this.createFirstRound = this.createFirstRound.bind(this);
        this.createNextRound = this.createNextRound.bind(this);
        this.generateRounds = this.generateRounds.bind(this);
        this.saveRound = this.saveRound.bind(this);
        this.getRound = this.getRound.bind(this);
        this.childUpdate = this.childUpdate.bind(this);
    }

    getRound() {
        var rounds = JSON.parse(this.props.rounds);
        var fighters = JSON.parse(this.props.fighters);
        var toSet;
        if (this.isRoundCreated(rounds[this.props.roundNum])) {
            toSet = rounds[this.props.roundNum];
        } else if (!this.isRoundCreated(rounds[this.props.roundNum]) && this.props.roundNum === 0) {
            rounds[this.props.roundNum] = this.createFirstRound(fighters, rounds[this.props.roundNum]);
            this.saveRound(rounds[this.props.roundNum], this.props.roundNum);
            toSet = rounds[this.props.roundNum];
        } else if (!this.isRoundCreated(rounds[this.props.roundNum]) && this.isRoundCompleted(rounds[this.props.roundNum - 1])) {
            rounds[this.props.roundNum] = this.createNextRound(rounds[this.props.roundNum - 1], rounds[this.props.roundNum]);
            this.saveRound(rounds[this.props.roundNum], this.props.roundNum);
            toSet = rounds[this.props.roundNum];
        } else {
            toSet = new Array();
        }
        return toSet;
    }

    saveRound(round, index) {
        AsyncStorage.getItem(this.props.tournamentName).then(data => {
            var dataObj = JSON.parse(data);
            dataObj.rounds[index] = round;
            AsyncStorage.setItem(this.props.tournamentName, JSON.stringify(dataObj));
        }).done();
    }

    childUpdate(boutResult) {
        AsyncStorage.getItem(this.props.tournamentName).then(data => {
            var dataObj = JSON.parse(data);
            var copy = dataObj.rounds[this.props.roundNum][boutResult.boutNum];
            copy.winner = boutResult.winner;
            copy.method = boutResult.method + " (Round " + boutResult.round + ")";
            dataObj.rounds[this.props.roundNum][boutResult.boutNum] = copy;
            if (dataObj.rounds[this.props.roundNum].length === 1) {
                if (dataObj.rounds[dataObj.rounds.length - 1][0].winner === 1) {
                    dataObj.champion = dataObj.rounds[dataObj.rounds.length - 1][0].fighterOne;
                } else {
                    dataObj.champion = dataObj.rounds[dataObj.rounds.length - 1][0].fighterTwo;
                }
                dataObj.completed = 1;
            }

            AsyncStorage.setItem(this.props.tournamentName, JSON.stringify(dataObj));
        }).done();
        this.props.navigation.navigate('Home');
    }

    createFirstRound(fighters, rounds) {
        var names = new Array();
        for (var x = 0; x < fighters.length; x++) {
            names.push(fighters[x].name);
        }
        return this.generateRounds(names, rounds);
    }

    createNextRound(previousRound, currentRound) {  //NEED TO IMPLEMENT
        var fighterNames = new Array();
        for(var x=0; x < previousRound.length; x++) {
            if(previousRound[x].winner === 1) {
                fighterNames.push(previousRound[x].fighterOne);
            } else {
                fighterNames.push(previousRound[x].fighterOne);
            }
        }
        return this.generateRounds(fighterNames, currentRound);
    }

    generateRounds(fighterNames, rounds) {
        var arrayLoopLength = (fighterNames.length / 2);
        for (var x = 0; x < arrayLoopLength; x++) {
            var nameOne = fighterNames.splice(Math.floor(Math.random() * fighterNames.length), 1);
            var nameTwo = fighterNames.splice(Math.floor(Math.random() * fighterNames.length), 1);
            rounds[x].fighterOne = nameOne[0];
            rounds[x].fighterTwo = nameTwo[0];
            if (nameOne[0] === "") {
                rounds[x].winner = 2;
                rounds[x].method = "(BYE)";
            } else if (nameTwo[0] === "") {
                rounds[x].winner = 1;
                rounds[x].method = "(BYE)";
            }
        }
        return rounds;
    }

    isRoundCreated(round) {
        var created = true;
        for (var x = 0; x < round.length; x++) {
            if (round[x].fighterOne === "") {
                created = false;
            }
        }
        return created;
    }

    isRoundCompleted(round) {
        var completed = true;
        for (var x = 0; x < round.length; x++) {
            if (round[x].winner === 0) {
                completed = false;
            }
        }
        return completed;
    }

    render() {
        return (
            <View style={homeStyle.headerContainer}>
                <ScrollView>
                    {
                        this.getRound().map((item, key) =>
                            (
                                <Bout refresh={this.state.refresh} round={item} key={key} updateParent={this.childUpdate.bind(this)} />
                            ))
                    }
                </ScrollView>
            </View>
        );
    }
}

export default withNavigation(BoutList);
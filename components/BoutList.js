import React from 'react';
import { ScrollView, View, AsyncStorage } from 'react-native';
import Bout from './Bout';

export default class BoutList extends React.Component {
    constructor() {
        super();
        this.state = {
            fighters: null,
            rounds: null,
            roundNum: null,
            bouts: []
        }
        this.isRoundCompleted = this.isRoundCompleted.bind(this);
        this.isRoundCreated = this.isRoundCreated.bind(this);
        this.createFirstRound = this.createFirstRound.bind(this);
        this.createNextRound = this.createNextRound.bind(this);
        this.generateRounds = this.generateRounds.bind(this);
        this.saveRound = this.saveRound.bind(this);
    }

    componentDidMount() {
        var rounds = JSON.parse(this.props.rounds);
        var fighters = JSON.parse(this.props.fighters);
        var toSet;
        /*console.log('did mount');
        console.log(this.isRoundCreated(rounds[this.props.roundNum]));
        console.log(this.createNextRound(rounds[this.props.roundNum - 1]));
        console.log('\n');*/
        if (this.isRoundCreated(rounds[this.props.roundNum])) {
            toSet = rounds[this.props.roundNum];
        } else if (!this.isRoundCreated(rounds[this.props.roundNum]) && this.props.roundNum === 0) {
            rounds[this.props.roundNum] = this.createFirstRound(fighters, rounds[this.props.roundNum]);
            this.saveRound(rounds[this.props.roundNum], this.props.roundNum);
            toSet = rounds[this.props.roundNum];
        } else if (!this.isRoundCreated(rounds[this.props.roundNum]) && this.isRoundCompleted(this.createNextRound(rounds[this.props.roundNum - 1]))) {
            rounds[this.props.roundNum] = this.createNextRound(rounds[this.props.roundNum - 1], rounds[this.props.roundNum]);
            //this.saveRound(rounds[this.props.roundNum], this.props.roundNum);
            toSet = rounds[this.props.roundNum];
        }
        this.setState({ bouts: toSet });
    }

    saveRound(round, index) {
        AsyncStorage.getItem(this.props.tournamentName).then(data => {
            var dataObj = JSON.parse(data);
            dataObj.rounds[index] = round;
            AsyncStorage.setItem(this.props.tournamentName, JSON.stringify(dataObj));
        }).done();
    }

    createFirstRound(fighters, rounds) {
        var names = new Array();
        for (var x = 0; x < fighters.length; x++) {
            names.push(fighters[x].name);
        }
        return this.generateRounds(names, rounds);
    }

    createNextRound(previousRound, currentRound) {
       /* console.log('create next round');
        console.log('previousRound');
        console.log(previousRound);
        console.log('currentRound');
        console.log(currentRound);*/
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
                rounds[x].method = "BYE";
            } else if (nameTwo[0] === "") {
                rounds[x].winner = 1;
                rounds[x].method = "BYE";
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
        console.log('bout list');
        console.log(this.props.roundNum);
        return (
            <View style={homeStyle.headerContainer}>
                <ScrollView>
                    {
                        this.state.bouts.map((item, key) =>
                            (
                                <Bout id={item} key={key} />
                                //<AddFighter id={item} key={key} details={JSON.stringify(item)} updateParent={this.childUpdate.bind(this)} />
                            ))
                    }
                </ScrollView>
            </View>
        );
    }
}

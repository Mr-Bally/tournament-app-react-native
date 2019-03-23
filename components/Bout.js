import React from 'react';
import { Modal, Text, View, Button, Picker } from 'react-native';
import homeStyle from '../styles/homeStyle';

export default class Bout extends React.Component {
    constructor() {
        super();
        this.state = {
            modalVisible: false,
            method: 'KO/TKO',
            round: 1,
            winner: 1,
            boutNum: 0,
        }
        this.setWinner = this.setWinner.bind(this);
        this.setTitle = this.setTitle.bind(this);
    }

    setWinner() {
        var toReturn;
        if (this.props.round.winner === 0) {
            toReturn = "Winner: TBD";
        } else if (this.props.round.winner === 1) {
            toReturn = "Winner: " + this.props.round.fighterOne + "-" + this.props.round.method;
        } else {
            toReturn = "Winner: " + this.props.round.fighterTwo + "-" + this.props.round.method;
        }
        return toReturn;
    }

    setTitle() {
        if (this.props.round.fighterOne === "") {
            return this.props.round.fighterTwo;
        } else if (this.props.round.fighterTwo === "") {
            return this.props.round.fighterOne;
        }
        return this.props.round.fighterOne + " VS " + this.props.round.fighterTwo;
    }

    updateParent() {
        this.setModalVisible(!this.state.modalVisible)
        this.props.updateParent(this.state);
    }

    setModalVisible(visible) {
        if (this.props.round.winner === 0) {
            this.setState({ modalVisible: visible, boutNum: this.props.round.boutNum });
        }
    }

    render() {
        return (
            <View>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => (console.log("MODAL CLOSED"))}
                >
                    <View style={homeStyle.container}>
                        <View style={homeStyle.headerItem}>
                            <Text style={homeStyle.headerText}>Please enter the result</Text>
                        </View>
                        <View style={homeStyle.inputContainer} >
                            <Picker
                                style={homeStyle.picker}
                                name='round'
                                selectedValue={this.state.round.toString()}
                                onValueChange={(val) =>
                                    this.setState({ round: parseInt(val) })
                                }
                                style={homeStyle.picker}
                            >
                                <Picker.Item key="0" value="1" label="Round 1" />
                                <Picker.Item key="1" value="2" label="Round 2" />
                                <Picker.Item key="1" value="3" label="Round 3" />
                                <Picker.Item key="1" value="4" label="Round 4" />
                                <Picker.Item key="1" value="5" label="Round 5" />
                            </Picker>
                        </View>
                        <View style={homeStyle.inputContainer} >
                            <Picker
                                style={homeStyle.picker}
                                name='winner'
                                selectedValue={this.state.winner.toString()}
                                onValueChange={(val) =>
                                    this.setState({ winner: parseInt(val) })
                                }
                                style={homeStyle.picker}
                            >
                                <Picker.Item key="0" value="1" label={this.props.round.fighterOne} />
                                <Picker.Item key="1" value="2" label={this.props.round.fighterTwo} />
                            </Picker>
                        </View>
                        <View style={homeStyle.inputContainer} >
                            <Picker
                                style={homeStyle.picker}
                                name='method'
                                selectedValue={this.state.method}
                                onValueChange={(val) =>
                                    this.setState({ method: val })
                                }
                                style={homeStyle.picker}
                            >
                                <Picker.Item key="0" value="KO/TKO" label="KO/TKO" />
                                <Picker.Item key="1" value="DQ" label="DQ" />
                                <Picker.Item key="2" value="Dec" label="Dec" />
                            </Picker>
                        </View>
                        <View style={homeStyle.buttonContainer}>
                            <Button
                                title="Save"
                                style={homeStyle.buttonGroup}
                                onPress={() => this.updateParent()}
                            />
                        </View>
                        <View style={homeStyle.buttonContainer}>
                            <Button
                                title="Close"
                                style={homeStyle.buttonGroup}
                                onPress={() => this.setModalVisible(!this.state.modalVisible)}
                            />
                        </View>
                    </View>
                </Modal>
                <Text style={homeStyle.infoText}>{this.setWinner()}</Text>
                <Button
                    title={this.setTitle()}
                    style={homeStyle.buttonGroup}
                    onPress={() => this.setModalVisible(true)}
                />
            </View>
        );
    }
}

import React from 'react';
import { View, Picker } from 'react-native';
import homeStyle from '../styles/homeStyle';

export default class RoundOptions extends React.Component {
    constructor() {
        super();
        this.state = {
            round: 0
        }
        this.setRounds = this.setRounds.bind(this);
        this.pickerChange = this.pickerChange.bind(this);
    }

    setRounds(size) {
        var array;
        switch (size) {
            case 2:
                array = ['Final'];
                break;
            case 4:
                array = ['Semi-Final', 'Final'];
                break;
            case 8:
                array = ['Quarter-Final', 'Semi-Final', 'Final'];
                break;
            case 16:
                array = ['Round one', 'Quarter-Final', 'Semi-Final', 'Final'];
                break;
            case 32:
                array = ['Round one', 'Round two', 'Quarter-Final', 'Semi-Final', 'Final'];
                break;
            default:
                array = ['Round one', 'Round two', 'Round three', 'Quarter-Final', 'Semi-Final', 'Final'];
        }
        return array;
    }

    pickerChange(val) {
        this.setState({ round: val });
        this.updateParent(val);
    }

    updateParent(data) {
        this.props.updateParent(data);
    }

    render() {
        this.roundsArray = this.setRounds(parseInt(this.props.size));
        return (
            <View style={homeStyle.inputContainer}>
                <Picker 
                    style={homeStyle.picker}
                    name='round'
                    selectedValue={this.state.round}
                    onValueChange={(val, itemIndex) =>
                        this.pickerChange(val)
                    }
                >
                    {
                        this.roundsArray.map((item, key) =>
                            (
                                <Picker.Item label={item} key={key} value={key} />
                            ))
                    }
                </Picker>
            </View>
        );
    }
}

import React from 'react';
import { View } from 'react-native';
import homeStyle from '../styles/homeStyle';

export default class NewTournament extends React.Component {
  static navigationOptions = {
    title: 'Fighters',
  };
  render() {
    return (
      <View style={homeStyle.container}>
      </View>
    );
  }
}

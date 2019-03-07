import React from 'react';
import { View } from 'react-native';
import homeStyle from '../styles/homeStyle';
import CurrentTournamentsScroll from '../components/CurrentTournamentsScroll';

export default class ExistingTournaments extends React.Component {
  static navigationOptions = {
    title: 'Existing Tournaments',
  };
  render() {
    return (
      <View style={homeStyle.container}>
        <CurrentTournamentsScroll />
      </View>
    );
  }
}

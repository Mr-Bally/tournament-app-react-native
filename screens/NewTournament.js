import React from 'react';
import { View } from 'react-native';
import homeStyle from '../styles/homeStyle';
import CreateTournamentInput from '../components/CreateTournamnetInput';

export default class NewTournament extends React.Component {
  static navigationOptions = {
    title: 'New Tournament',
  };
  render() {
    return (
      <View style={homeStyle.container}>
        <CreateTournamentInput />
      </View>
    );
  }
}

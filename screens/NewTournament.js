import React from 'react';
import { View } from 'react-native';
import homeStyle from '../styles/homeStyle';
import CreateTournamentInput from '../components/CreateTournamnetInput';

export default class NewTournament extends React.Component {
  static navigationOptions = {
    title: 'New Tournament',
    headerStyle: {
      backgroundColor: '#002E2C'
    },
    headerTintColor: '#bebece',
    headerTitleStyle: {
      color: '#bebece',
    }
  };
  render() {
    return (
      <View style={homeStyle.container}>
        <CreateTournamentInput />
      </View>
    );
  }
}

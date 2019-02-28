import React from 'react';
import { View } from 'react-native';
import homeStyle from '../styles/homeStyle';
import IndexHeader from '../components/IndexHeader';

export default class ExistingTournaments extends React.Component {
    static navigationOptions = {
        title: 'Existing Tournaments',
    };
  render() {
    return (
      <View style={homeStyle.container}>
        <IndexHeader/>
      </View>
    );
  }
}

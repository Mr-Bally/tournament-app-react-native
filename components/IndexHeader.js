import React from 'react';
import { Text, View, Image } from 'react-native';
import homeStyle from '../styles/homeStyle';

export default class IndexHeader extends React.Component {
  render() {
    return (
      <View style={homeStyle.headerContainer}>
        <View style={homeStyle.headerItem}>
          <Text style={homeStyle.headerText}>Tournament Tracker</Text>
        </View>
        <View style={homeStyle.headerItem}>
          <Image source={require('../img/logo.png')} />
        </View>
      </View>
    );
  }
}

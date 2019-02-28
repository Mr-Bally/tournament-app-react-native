import React from 'react';
import { View } from 'react-native';
import homeStyle from '../styles/homeStyle';
import MenuOptions from '../components/MenuOptions';
import IndexHeader from '../components/IndexHeader';

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return (
      <View style={homeStyle.container}>
        <IndexHeader/>
        <MenuOptions/>
      </View>
    );
  }
}

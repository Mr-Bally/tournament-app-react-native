import React from 'react';
import { Text, Button, View, Alert, Image } from 'react-native';
import homeStyle from './styles/homeStyle';

export default class App extends React.Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }
  render() {
    return (
      <View style={homeStyle.container}>
        <View style={homeStyle.headerContainer}>
          <Text>Tournament Tracker</Text>
          <Image source={require('./img/logo.png')} />
        </View>
        <View style={homeStyle.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="New tournament"
          />
        </View>
        <View style={homeStyle.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="View existing tournaments"
          />
        </View>
      </View>
    );
  }
}

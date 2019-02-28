import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from './screens/Home';
import ExistingTournaments from './screens/ExistingTournaments'

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    ExistingTournaments: ExistingTournaments
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
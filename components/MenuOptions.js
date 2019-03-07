import React from 'react';
import { Button, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import homeStyle from '../styles/homeStyle';

class MenuOptions extends React.Component {
    render() {
        return (
            <View>
                <View style={homeStyle.buttonContainer}>
                    <Button
                        onPress={() => this.props.navigation.navigate('NewTournament')}
                        title="New tournament"
                    />
                </View>
                <View style={homeStyle.buttonContainer}>
                    <Button
                        onPress={() => this.props.navigation.navigate('ExistingTournaments')}
                        title="View existing tournaments"
                    />
                </View>
            </View>
        );
    }
}

export default withNavigation(MenuOptions);

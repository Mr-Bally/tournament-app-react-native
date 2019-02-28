import React from 'react';
import { Button, View } from 'react-native';
import homeStyle from '../styles/homeStyle';

export default class MenuOptions extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <View style={homeStyle.buttonContainer}>
                    <Button
                        onPress={this._onPressButton}
                        title="New tournament"
                    />
                </View>
                <View style={homeStyle.buttonContainer}>
                    <Button
                        onPress={() => navigate('ExistingTournaments')}
                        title="View existing tournaments"
                    />
                </View>
            </View>
        );
    }
}
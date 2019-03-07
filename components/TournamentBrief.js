import React from 'react';
import { Text, View, Button } from 'react-native';
import homeStyle from '../styles/homeStyle';
import { withNavigation } from 'react-navigation';

class TournamentBrief extends React.Component {
    render() {
        return (
            <View style={homeStyle.summaryContainer}>
                <Button 
                    title="Example Tournament" 
                    onPress={() => this.props.navigation.navigate('ViewTournament')}
                />
                <Text style={homeStyle.infoText}>8 People - COMPLETED</Text>
            </View>
        );
    }
}

export default withNavigation(TournamentBrief);

import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Menu from '../components/Menu';


export default class Picker extends Component {
    render() {
        return (
            <View style={containerStyles.counter}>
                <Button title="Ask" onPress={this.props.ask} />
                <Text style={styles.counter} onPress={this.props.reset}>
                    {this.props.chosenAct}
                </Text>
                <Button title="Offer" onPress={this.props.offer} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    counter: {
        padding: 30,
    }
});

const containerStyles = StyleSheet.create({
    counter: {
        padding: 30,
        alignSelf: 'stretch',
        backgroundColor: 'white',
        fontSize: 26,
        fontWeight: 'bold'
    }
});
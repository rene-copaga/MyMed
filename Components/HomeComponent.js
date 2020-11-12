import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Books from '../redux/Books';

class HomeComponent extends Component {

    static navigationOptions = {
        title: 'Home',

        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    render() {
        return (
            <View style={styles.container}>
                <Books />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

export default HomeComponent;
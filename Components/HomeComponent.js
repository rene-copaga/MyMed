import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class HomeComponent extends Component {

    static navigationOptions = {
        title: 'Home',

        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    render() {
        return (
            <View>
                <Text>
                    Holas
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});

export default HomeComponent;
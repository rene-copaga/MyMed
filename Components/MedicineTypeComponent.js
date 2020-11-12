import React, { Component } from 'react';
import { Text, View } from "react-native";
import { TextInput } from 'react-native-gesture-handler';

class MedicineTypeComponent extends Component {
    render() {
        return
        <View style={styles.mainContainer}>
            <TextInput
                style={styles.name}
                placeholder='MedicineType'
                onChange={}
            />
        </View>
    }
}

const styles = StyleSheet.create({
    mainContainer :{
        flex:1,
        margin: 10
    },

    name: {
        alignContent: 'flex-start',
        padding: 20,
        fontSize: 18,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: '#ecf0f1'
    }
});

export default MedicineTypeComponent
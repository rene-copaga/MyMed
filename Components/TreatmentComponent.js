import CheckBox from "@react-native-community/checkbox";
import React, { Component } from "react";
import { ScrollView, Switch, TextInput } from "react-native-gesture-handler";

class TreatmentComponent extends Component {
    render() {
        return (
            <ScrollView>
                <TextInput
                    placeholder='Title'
                />
                <TextInput
                    placeholder='Description'
                />
                <Switch placeholder='Active' />
            </ScrollView>
        )
    }
}

export default TreatmentComponent;
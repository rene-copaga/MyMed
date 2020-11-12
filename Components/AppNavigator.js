import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeComponent from './HomeComponent';

const Stack = createStackNavigator();

export const AppNavigator =
<NavigationContainer>
    <Stack.Navigator
        initialRouteName="Home"
    >
        <Stack.Screen
            name="Home"
            component={HomeComponent}
            options={{ title: 'Home' }}
        />
    </Stack.Navigator>
</NavigationContainer>
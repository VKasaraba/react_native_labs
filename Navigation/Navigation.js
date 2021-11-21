import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from 'react';
import CategoryList from '../containers/CategoryList';
import CheckList from '../containers/CheckList';

const Stack = createStackNavigator();

export default function Navigation() {
    return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='CheckList'>
            <Stack.Screen
            name='CheckList'
            options={{ headerShown: false }}
            component={CheckList}
            initialParams={{
                colorModified: "",
            }}
            />
            <Stack.Screen
            name='CategoryList'
            options={{ headerShown: false }}
            component={CategoryList}
            initialParams={{
                colorModified: "",
            }}
            />
        </Stack.Navigator>
    </NavigationContainer>
    )
}
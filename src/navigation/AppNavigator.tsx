// src/navigation/AppNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BusinessForm, OnBoardingScreen, Login, FavoriteContent } from '../screens'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../core/_models';

// Define the parameter list for your stack navigator
type _RootStackParamList = {
    OnBoarding: {
        navigation: StackNavigationProp<RootStackParamList>
    };
    BusinessForm: {
        navigation: StackNavigationProp<RootStackParamList>
    };
    Login: {
        navigation: StackNavigationProp<RootStackParamList>
    };
    FavoriteContent: {
        navigation: StackNavigationProp<RootStackParamList>
    };
};
const Stack = createNativeStackNavigator<_RootStackParamList>();

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="OnBoarding" screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
            <Stack.Screen name="BusinessForm" component={BusinessForm} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="FavoriteContent" component={FavoriteContent} />
        </Stack.Navigator>
    );
};

export default AppNavigator;

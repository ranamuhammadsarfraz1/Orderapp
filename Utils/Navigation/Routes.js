import React from 'react';
import { NAVIGATION_ROUTES } from './NaviagtionRoutes';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../../screens/welcome';
import Signin from '../../screens/Login';
import SignUp from '../../screens/Signup';

const Stack = createStackNavigator();

const AuthNavigator = () => {

    return (
        <Stack.Navigator>   
            <Stack.Screen
                name={NAVIGATION_ROUTES.WELCOME}
                component={WelcomeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={NAVIGATION_ROUTES.SIGNIN}
                component={Signin}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={NAVIGATION_ROUTES.SIGNUP}
                component={SignUp}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default AuthNavigator;

// src/navigation/AuthStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import SignupScreen2 from '../screens/SignupScreen2'

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{ headerShown: false}}
      />
      <Stack.Screen
        name="Signup2"
        component={SignupScreen2}
        options={{ headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;

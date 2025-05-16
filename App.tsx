// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen, RegsiterScreen} from './src/screens';
import {StatusBar} from 'react-native';
import './global.css';

type RootStackNavigatorParams = {
  login: undefined;
  register: undefined;
};

const Stack = createNativeStackNavigator<RootStackNavigatorParams>();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{
            headerTransparent: true,
            headerShown: false,
          }}
        />
        <Stack.Screen name="register" component={RegsiterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

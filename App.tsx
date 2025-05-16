// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {AuthStack, MainStack} from './src/navigation/config';
import './global.css';

export default function App() {
  // TODO: Add authentication state management
  const isAuthenticated = false;

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      {isAuthenticated ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

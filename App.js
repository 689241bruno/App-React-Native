import React from 'react';
import { StatusBar } from 'react-native';

import { Link, NavigationContainer } from '@react-navigation/native';
import Routes from './src/routers'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={"#1179E8"} barStyle={"light-content"}/>
      <Routes />
    </NavigationContainer>
  );
}

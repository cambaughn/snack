import React, { Component } from 'react';
import { Platform, View, Text } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import LoginContainer from '../screens/Login/LoginContainer';
import LoadingScreen from '../screens/Login/LoadingScreen';


const AuthStack = createStackNavigator({
  Auth: LoginContainer,
});

const AuthLoading = createStackNavigator({
  LoadingScreen: LoadingScreen,
});


export { AuthStack, AuthLoading }

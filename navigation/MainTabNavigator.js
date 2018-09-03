import React from 'react';
import { Platform, View, Text } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import LessonOverview from '../screens/Lesson/LessonOverview';

import { Feather } from '@expo/vector-icons';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

// NOTE: Need to adjust color of home icon based on focus

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'home'}
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Explore',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'map'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'user'}
    />
  ),
};

const MainStack = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
});


export default createStackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    LessonOverview: {
      screen: LessonOverview,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

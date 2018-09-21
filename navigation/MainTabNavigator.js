import React from 'react';
import { Platform, View, Text } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ExploreScreen from '../screens/ExploreScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LessonOverview from '../screens/Lesson/LessonOverview';
import LessonList from '../screens/Lesson/LessonList';



const HomeStack = createStackNavigator({
  Home: HomeScreen,
});


HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'home'}
    />
  ),
};

const ExploreStack = createStackNavigator({
  Explore: ExploreScreen,
  LessonList: LessonList,
});

ExploreStack.navigationOptions = {
  tabBarLabel: 'Explore',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'map'}
    />
  ),
};

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen,
});

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'user'}
    />
  ),
};

const MainStack = createBottomTabNavigator({
  // HomeStack,
  ExploreStack,
  ProfileStack,
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

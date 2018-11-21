import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';

import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import AddScreen from './screens/AddScreen';
import ProfileScreen from './screens/ProfileScreen';



const NavigatorTab = createBottomTabNavigator({
        welcome: { screen: WelcomeScreen },
        main: createBottomTabNavigator({
          homeStack: { screen: HomeScreen },
          addStack: { screen: AddScreen },
          profileStack: { screen: ProfileScreen },
        })
      });

export default createAppContainer(NavigatorTab);

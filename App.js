import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';

import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import AddScreen from './screens/AddScreen';
import ProfileScreen from './screens/ProfileScreen';

// export default class App extends React.Component {
  //render() {
    
      //return (
        //<View style={styles.container}>
          //<Text style={styles.text}>Hello World!</Text>
          //<Text>こんにちは世界!</Text>
        //</View>
      //);
    //}
  //}
//const styles = StyleSheet.create({
  //container: {
    //flex: 1,
    //backgroundColor: '#fff',
    //justifyContent: 'center',
    //alignItems: 'center',
  //},
  //text: {
    //fontSize: 50,
  //},
//});
const NavigatorTab = createBottomTabNavigator({
        welcome: { screen: WelcomeScreen },
        main: createBottomTabNavigator({
          homeStack: { screen: HomeScreen },
          addStack: { screen: AddScreen },
          profileStack: { screen: ProfileScreen },
        })
      });

export default createAppContainer(NavigatorTab);

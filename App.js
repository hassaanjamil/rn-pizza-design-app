/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {MainNavigator} from './src/navigators/MainNavigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './src/screens/HomeScreen';
import {DetailScreen} from './src/screens/DetailScreen';
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const Stack = createNativeStackNavigator();

  return (
    //<View style={[styles.root, backgroundStyle]}>
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
    //</View>
  );
};

const styles = StyleSheet.create({
  root: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default App;

import {Colors} from 'react-native/Libraries/NewAppScreen';

export const AppColors = (isDarkMode = false) => {
  return isDarkMode ? darkColors : colors;
};

export const colors = {
  black: '#000',
  white: '#fff',
  background: Colors.lighter,
  itemsBackground: '#fff',
  textDark: '#313234',
  primary: '#F5CA48',
  secondary: '#F26C68',
  textLight: '#CDCDCD',
  price: '#E4723C',

  shadowColor: '#313234',
  iconColor: '#313234',
};

export const darkColors = {
  ...colors,
  textDark: '#fff',
  textLight: '#313234',
  background: Colors.darker,
  shadowColor: '#CDCDCD',
  iconColor: '#313234',
  itemsBackground: '#313234',
};

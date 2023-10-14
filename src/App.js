import {View, Text} from 'react-native';
import React from 'react';
import Toast from 'react-native-toast-message';
import NavigationContainer from './navigation';

export default function App() {
  return (
    <>
      <NavigationContainer />
      <Toast />
    </>
  );
}

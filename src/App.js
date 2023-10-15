import {View, Text} from 'react-native';
import React from 'react';
import Toast from 'react-native-toast-message';
import NavigationContainer from './navigation';
import AuthProvider from './context/AuthContext/AuthProvider';

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer />
      <Toast />
    </AuthProvider>
  );
}

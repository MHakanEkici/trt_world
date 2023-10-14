import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import routes from './routes';
import HomePage from '../screens/HomePage/HomePage';
import Profile from '../screens/Profile/Profile';
import AuthStack from './AuthStack';

export default function NavigationContainter() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={routes.HOME_PAGE}
          component={HomePage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={routes.PROFILE}
          component={Profile}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={routes.AUTH_STACK}
          component={AuthStack}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

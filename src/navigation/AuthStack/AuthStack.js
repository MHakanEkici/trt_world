import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import routes from '../routes';
import SignUp from '../../screens/Auth/SignUp/SignUp';
import Login from '../../screens/Auth/Login/Login';

export default function AuthStack() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.LOGIN}
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={routes.SIGN_UP}
        component={SignUp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

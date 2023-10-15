import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useContext, useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import routes from './routes';
import auth from '@react-native-firebase/auth';
import HomePage from '../screens/HomePage/HomePage';
import Profile from '../screens/Profile/Profile';
import AuthStack from './AuthStack';
import GStyles from '../GStyles';
import {Dimensions, Image, StyleSheet} from 'react-native';
import {AuthContext} from '../context/AuthContext/AuthProvider';

const {height} = Dimensions.get('window');
const {width} = Dimensions.get('window');

export default function NavigationContainter() {
  const Stack = createStackNavigator();

  const {state, dispatch} = useContext(AuthContext);

  const [hasSession, setHasSession] = useState(null);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(session => {
      setHasSession(session);
      if (!!session) {
        dispatch({
          type: 'SET_USER_INFO',
          payload: {
            userId: session.uid,
            name: session.displayName,
            email: session.email,
            image: session.photoURL,
          },
        });
      }
    });
    return subscriber;
  });

  const headerLogo = () => {
    return (
      <Image
        style={styles.header_logo}
        resizeMode="cover"
        source={require('../assets/trt_logo.png')}
      />
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!!hasSession ? (
          <>
            <Stack.Screen
              name={routes.HOME_PAGE}
              component={HomePage}
              options={{
                headerTitle: props => headerLogo(),
                headerStyle: {
                  backgroundColor: GStyles.colors.theme,
                },
                headerTintColor: 'white',
              }}
            />
            <Stack.Screen
              name={routes.PROFILE}
              component={Profile}
              options={{headerShown: false}}
            />
          </>
        ) : (
          <Stack.Screen
            name={routes.AUTH_STACK}
            component={AuthStack}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header_logo: {
    width: (height + width) * 0.18,
    height: (height + width) * 0.23,
    objectFit: 'contain',
  },
});

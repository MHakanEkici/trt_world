import React from 'react';
import {View, Text, Image, SafeAreaView} from 'react-native';
import {Formik} from 'formik';
import Input from '../../../components/Input';
import routes from '../../../navigation/routes';
import styles from './Login.style';
import Toast from 'react-native-toast-message';
import Button from '../../../components/Button';
import auth from '@react-native-firebase/auth';
import I18n from '../../../lang/_i18n';

export default function Login({navigation}) {
  function handleNavigateSignUp() {
    navigation.navigate(routes.SIGN_UP);
  }

  function handleLogin(loginData) {
    if (!loginData.email.trim() || !loginData.password.trim()) {
      Toast.show({
        type: 'error',
        text1: 'email or password can not be empty',
      });
    } else {
      auth()
        .signInWithEmailAndPassword(loginData.email, loginData.password)
        .then(() => {
          Toast.show({
            type: 'success',
            text1: 'Login Successful',
          });
        })
        .catch(error => {
          Toast.show({
            type: 'error',
            text1: 'Login Failed!',
          });
          console.log(error);
        });
    }
  }

  return (
    <SafeAreaView colors={['#d1fffd', '#f4b6e2']} style={styles.container}>
      {/* <View style={styles.animationView}>
        <LottieView
          source={require('../../../assets/walking.json')}
          autoPlay
          loop
        />
      </View> */}
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={formValues => handleLogin(formValues)}>
        {({handleSubmit, handleChange, values}) => (
          <View>
            <Input
              label={I18n.t('Email')}
              placeholder={I18n.t('EmailPlaceholder')}
              autoCapitalize="none"
              value={values.email}
              onChangeText={handleChange('email')}
            />
            <Input
              label={I18n.t('Password')}
              placeholder={I18n.t('PasswordPlaceholder')}
              secureTextEntry
              value={values.password}
              onChangeText={handleChange('password')}
            />
            <Button
              label={I18n.t('Login')}
              onPress={handleSubmit}
              type="primary"
            />
            <Button
              label={I18n.t('SignUp')}
              type="secondary"
              onPress={handleNavigateSignUp}
            />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
}

import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import routes from '../../../navigation/routes';
import {Formik} from 'formik';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Toast from 'react-native-toast-message';
import styles from './SignUp.style';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import I18n from '../../../lang/_i18n';

export default function SignUp({navigation}) {
  function handleReturnLogin() {
    navigation.navigate(routes.LOGIN_PAGE);
  }

  function handleSignUp(signData) {
    let displayName = signData.name + ' ' + signData.surname;
    if (signData.password !== signData.rePassword) {
      Toast.show({
        type: 'error',
        text1: 'Passwords do not match',
      });
      return;
    }
    if (
      !signData.email.trim() ||
      !signData.password.trim() ||
      !signData.name.trim() ||
      !signData.surname.trim()
    ) {
      Toast.show({
        type: 'error',
        text1: 'Please provide all required information above',
      });
    } else {
      auth()
        .createUserWithEmailAndPassword(signData.email, signData.password)
        .then(response => {
          auth()
            .currentUser.updateProfile({
              displayName: displayName,
            })
            .then(() => {
              //TODO redux
            });
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            Toast.show({
              type: 'error',
              text1: 'That email address is already in use!',
            });
          }

          if (error.code === 'auth/invalid-email') {
            Toast.show({
              type: 'error',
              text1: 'That email address is invalid!',
            });
          }

          if (error.code === 'auth/weak-password') {
            Toast.show({
              type: 'error',
              text1: 'Password should be at least 6 characters',
            });
          }
          console.error(error);
        });
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={{
          name: '',
          surname: '',
          email: '',
          password: '',
          rePassword: '',
        }}
        onSubmit={formValues => handleSignUp(formValues)}>
        {({handleSubmit, handleChange, values}) => (
          <View>
            <Input
              label={I18n.t('Name')}
              placeholder={I18n.t('NamePlaceholder')}
              value={values.name}
              onChangeText={handleChange('name')}
            />
            <Input
              label={I18n.t('Surname')}
              placeholder={I18n.t('SurnamePlaceholder')}
              value={values.surname}
              onChangeText={handleChange('surname')}
            />
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
            <Input
              label={I18n.t('ConfirmPassword')}
              placeholder={I18n.t('ConfirmPasswordPlaceholder')}
              secureTextEntry
              value={values.rePassword}
              onChangeText={handleChange('rePassword')}
            />
            <Button
              label={I18n.t('SignUp')}
              onPress={handleSubmit}
              type="primary"
            />
          </View>
        )}
      </Formik>
      <Button
        label={
          <Text>
            <Icon name="arrow-left" size={27} /> {I18n.t('Back')}
          </Text>
        }
        type="secondary"
        onPress={handleReturnLogin}
      />
    </SafeAreaView>
  );
}

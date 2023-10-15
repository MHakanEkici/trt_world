import {View, Text, Button, SafeAreaView, Image} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import routes from '../../navigation/routes';
import {AuthContext} from '../../context/AuthContext/AuthProvider';
import styles from './Profile.style';
import I18n from '../../lang/_i18n';
import Toast from 'react-native-toast-message';
import auth from '@react-native-firebase/auth';

export default function Profile({navigation}) {
  const {authState, authispatch} = useContext(AuthContext);

  function handleSignOut() {
    auth()
      .signOut()
      .then(() => {
        Toast.show({
          type: 'info',
          text1: 'Signed Out',
        });
      })
      .catch(error => {
        Toast.show({
          type: 'error',
          text1: 'Signed Out Failed',
        });
        console.log(error);
      });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.user_container}>
        <Image
          resizeMode="cover"
          style={styles.profile_image}
          source={require('../../assets/no_image.png')}
        />
        <View style={styles.info_container}>
          <Text>{I18n.t('Name')}</Text>
          <Text>{authState.userInfo.name}</Text>
          <Text>{I18n.t('Email')}</Text>
          <Text>{authState.userInfo.name}</Text>
        </View>
      </View>
      <Button
        title={I18n.t('Logout')}
        onPress={() => {
          handleSignOut();
        }}
      />
    </SafeAreaView>
  );
}

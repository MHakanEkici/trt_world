import {View, Text, Button} from 'react-native';
import React from 'react';
import routes from '../../../navigation/routes';

export default function Login({navigation}) {
  return (
    <View>
      <Text>Login</Text>
      <Button
        title="Sayfa D"
        onPress={() => {
          navigation.navigate(routes.SIGN_UP);
        }}
      />
    </View>
  );
}

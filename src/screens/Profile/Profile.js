import {View, Text, Button} from 'react-native';
import React from 'react';
import routes from '../../navigation/routes';

export default function Profile({navigation}) {
  return (
    <View>
      <Text>Profile</Text>
      <Button
        title="Sayfa D"
        onPress={() => {
          navigation.navigate(routes.AUTH_STACK);
        }}
      />
    </View>
  );
}

import {View, Text, Button} from 'react-native';
import React from 'react';
import routes from '../../navigation/routes';

export default function HomePage({navigation}) {
  return (
    <View>
      <Button
        title="Sayfa D"
        onPress={() => {
          navigation.navigate(routes.PROFILE);
        }}
      />
    </View>
  );
}

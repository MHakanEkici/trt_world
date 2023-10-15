import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './CreatorAvatar.style';
import GStyles from '../../GStyles';

export default function CreatorAvatar({
  creator,
  textColor = GStyles.colors.title,
}) {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="cover"
        style={styles.image}
        source={{uri: `${creator.creatorImage}`}}
      />
      <Text style={{...styles.name, color: textColor}}>{creator.name}</Text>
    </View>
  );
}

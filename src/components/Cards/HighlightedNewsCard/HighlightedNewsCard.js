import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './HighlightedNewsCard.style';
import CreatorAvatar from '../../CreatorAvatar';

export default function HighlightedNewsCard({news}) {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="cover"
        style={styles.image}
        source={{uri: `${news.image}`}}
      />
      <Text style={styles.title}>{news.title}</Text>
      <CreatorAvatar creator={news.creator} textColor="white" />
    </View>
  );
}

import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './NewsCard.style';
import CreatorAvatar from '../../CreatorAvatar';

export default function OpinionCard({news}) {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="cover"
        style={styles.image}
        source={{uri: `${news.image}`}}
      />
      <Text style={styles.title}>{news.title}</Text>
      <Text style={styles.text}>{news.text}</Text>
      <CreatorAvatar creator={news.creator} />
    </View>
  );
}

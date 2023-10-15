import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './HighlatedOpinionCard.style';
import CreatorAvatar from '../../CreatorAvatar';

export default function HighlightedOpinionCard({opinionNews}) {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="cover"
        style={styles.image}
        source={{uri: `${opinionNews.image}`}}
      />
      <Text style={styles.title}>{opinionNews.title}</Text>
      <Text style={styles.text}>{opinionNews.text}</Text>
      <CreatorAvatar creator={opinionNews.creator} />
    </View>
  );
}

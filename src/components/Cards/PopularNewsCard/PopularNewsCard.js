import {View, Text} from 'react-native';
import React from 'react';
import styles from './PopularNewsCard.style';

export default function PopularNewsCard({popularNews, popularIndex}) {
  return (
    <View style={styles.container}>
      <View style={styles.index_container}>
        <Text style={styles.index_number}>{popularIndex}</Text>
      </View>
      <View>
        <Text style={styles.title}>{popularNews.title}</Text>
        <Text style={styles.name}>{popularNews.creator.name}</Text>
      </View>
    </View>
  );
}

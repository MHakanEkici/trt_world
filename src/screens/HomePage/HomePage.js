import {
  View,
  Text,
  Button,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import routes from '../../navigation/routes';
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message';
import {newsService} from '../../services';
import styles from './HomePage.style';
import HighlightedOpinionCard from '../../components/Cards/HighlightedOpinionCard';
import OpinionCard from '../../components/Cards/OpinionCard';
import PopularNewsCard from '../../components/Cards/PopularNewsCard';
import HighlightedNewsCard from '../../components/Cards/HighlightedNewsCard';
import NewsCard from '../../components/Cards/NewsCard';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import I18n from '../../lang/_i18n';

const {height} = Dimensions.get('window');
const {width} = Dimensions.get('window');

export default function HomePage({navigation}) {
  const [newsData, setNewsData] = useState([]);
  const [popularNews, setPopularNews] = useState([]);
  const [isNewsLoading, setIsNewsLoading] = useState(true);

  useEffect(() => {
    newsService
      .getNewsData()
      .then(response => {
        setNewsData([
          ...response.opinions,
          ...response.popularNews,
          ...response.news,
        ]);
        setIsNewsLoading(false);
        setPopularNews(response.popularNews);
      })
      .catch(ex => {
        console.log(ex);
        Toast.show({
          type: 'error',
          text1: 'An error has occured while fetching news',
        });
      });
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => headerProfileIcon(),
    });
  });

  const headerProfileIcon = () => {
    return (
      <Icon
        name="account"
        style={styles.icon}
        size={(height + width) * 0.04}
        color={'white'}
        onPress={() => handleNavigateToProfileScreen()}
      />
    );
  };

  function handleNavigateToProfileScreen() {
    navigation.navigate(routes.PROFILE);
  }

  const itemSeperator = () => {
    return <View style={styles.seperator} />;
  };

  const renderNews = ({item, index}) => {
    if (!item.isOpinion && !item.isPopular && !item.isHiglighted) {
      return <NewsCard news={item} />;
    } else if (item.isOpinion && item.isHiglighted) {
      return (
        <View>
          <Text style={styles.opinions_label}>{I18n.t('Opinion')}</Text>
          <HighlightedOpinionCard opinionNews={item} />
        </View>
      );
    } else if (item.isOpinion && !item.isHiglighted) {
      return <OpinionCard opinionNews={item} />;
    } else if (item.isPopular) {
      const popularIndex = popularNews.findIndex(pnews => item.id === pnews.id);
      return popularIndex === 0 ? (
        <View>
          <Text style={styles.popular_label}>{I18n.t('Popular')}</Text>
          <PopularNewsCard popularNews={item} popularIndex={popularIndex + 1} />
        </View>
      ) : (
        <PopularNewsCard popularNews={item} popularIndex={popularIndex + 1} />
      );
    } else if (!item.isOpinion && !item.isPopular && item.isHiglighted) {
      return <HighlightedNewsCard news={item} />;
    } else {
    }
  };

  return isNewsLoading ? (
    <ActivityIndicator size="large" />
  ) : (
    <SafeAreaView style={styles.container}>
      {/* {newsData.opinions.map((opinionNews, index) => {
        return (
          <View>
            <Text>{opinionNews.title}</Text>
          </View>
        );
      })}
      {newsData.popularNews.map((popularNews, index) => {
        return (
          <View>
            <Text>{popularNews.title}</Text>
          </View>
        );
      })} */}
      <FlatList
        data={newsData}
        renderItem={renderNews}
        keyExtractor={(item, index) => index.toString()}
        style={{width: '100%'}}
        ItemSeparatorComponent={itemSeperator}
      />
    </SafeAreaView>
  );
}

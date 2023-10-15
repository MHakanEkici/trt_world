import I18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';
import tr from './tr';
import en from './en';
import AsyncStorage from '@react-native-async-storage/async-storage';

const locales = RNLocalize.getLocales();
I18n.locale = locales[0].languageCode;
I18n.fallbacks = true;
I18n.locales.no = 'tr';

export const setLang = () => {
  console.log(I18n.locale);
  if (I18n.locale === 'tr') {
    I18n.locale = 'tr';
  } else {
    I18n.locale = 'en';
  }

  AsyncStorage.getItem('cacheLang')
    .then(value => {
      if (value !== null) {
        I18n.locale = value;
      }
    })
    .catch(ex => console.log('error'));
};

I18n.translations = {
  en,
  tr,
};
export default I18n;

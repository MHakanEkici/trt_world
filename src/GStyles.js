import {Dimensions, Platform, StatusBar} from 'react-native';

const {height, width} = Dimensions.get('window');

export default {
  colors: {
    theme: '#005D99',
    title: '#000000',
    text: '#3C3C3C',
    gray_text: '#BFC3C9',
    seperator: '#b3b3b3',
  },
  spacings: {
    mainHorizontal: (height + width) * 0.015,
    vertical: (height + width) * 0.015,
    mainPadding: (height + width) * 0.015,
  },
  sizes: {},
  fontSizes: {
    title: FontSizePercentage(4.2),
    titleBig: FontSizePercentage(5.2),
    titleSmall: FontSizePercentage(3.2),

    text: FontSizePercentage(2.5),
    textBig: FontSizePercentage(3),
    textSmall: FontSizePercentage(2),
  },
};

function FontSizePercentage(percent) {
  const {height, width} = Dimensions.get('window');
  const standardLength = width > height ? width : height;
  const offset =
    width > height ? 0 : Platform.OS === 'ios' ? 78 : StatusBar.currentHeight;

  const deviceHeight =
    isIphoneX() || Platform.OS === 'android'
      ? standardLength - offset
      : standardLength;

  const heightPercent = (percent * deviceHeight) / 100;
  // return Math.round(heightPercent);
  return heightPercent;
}

function isIphoneX() {
  const dimen = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 780 ||
      dimen.width === 780 ||
      dimen.height === 812 ||
      dimen.width === 812 ||
      dimen.height === 844 ||
      dimen.width === 844 ||
      dimen.height === 896 ||
      dimen.width === 896 ||
      dimen.height === 926 ||
      dimen.width === 926)
  );
}

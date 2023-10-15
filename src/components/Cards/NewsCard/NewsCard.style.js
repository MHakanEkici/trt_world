import {Dimensions, StyleSheet} from 'react-native';
import GStyles from '../../../GStyles';

const {height} = Dimensions.get('window');
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: GStyles.spacings.vertical,
    padding: GStyles.spacings.mainPadding,
  },
  image: {
    minHeight: (height + width) * 0.25,
  },
  title: {
    marginHorizontal: GStyles.spacings.mainHorizontal,
    marginTop: GStyles.spacings.vertical,
    fontSize: GStyles.fontSizes.titleBig,
    fontWeight: 'bold',
    color: GStyles.colors.title,
    textAlign: 'left',
  },
  text: {
    marginHorizontal: GStyles.spacings.mainHorizontal,
    marginTop: GStyles.spacings.vertical,
    fontSize: GStyles.fontSizes.textBig,
    color: GStyles.colors.text,
    textAlign: 'left',
  },
});

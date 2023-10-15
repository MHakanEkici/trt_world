import {Dimensions, StyleSheet} from 'react-native';
import GStyles from '../../../GStyles';

const {height} = Dimensions.get('window');
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    marginTop: GStyles.spacings.vertical,
  },
  image: {
    minHeight: (height + width) * 0.18,
  },
  title: {
    marginHorizontal: GStyles.spacings.mainHorizontal,
    marginTop: GStyles.spacings.vertical,
    fontSize: GStyles.fontSizes.titleBig,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'left',
  },
});

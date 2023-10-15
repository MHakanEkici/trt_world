import {Dimensions, StyleSheet} from 'react-native';
import GStyles from '../../GStyles';

const {height} = Dimensions.get('window');
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginHorizontal: GStyles.spacings.mainHorizontal,
    marginVertical: GStyles.spacings.vertical,
  },
  image: {
    height: (height + width) * 0.04,
    width: (height + width) * 0.04,
  },
  name: {
    marginHorizontal: GStyles.spacings.mainHorizontal,
    fontSize: GStyles.fontSizes.text,
    fontWeight: 'bold',
    color: GStyles.colors.title,
  },
});

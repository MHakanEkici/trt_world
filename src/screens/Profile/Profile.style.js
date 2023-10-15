import {Dimensions, StyleSheet} from 'react-native';
import GStyles from '../../GStyles';

const {height} = Dimensions.get('window');
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  user_container: {
    flexDirection: 'row',
    padding: GStyles.spacings.mainPadding,
    backgroundColor: 'gray',
    alignItems: 'center',
  },
  info_container: {
    marginLeft: GStyles.spacings.mainHorizontal * 2,
  },
  label: {},
  profile_image: {
    width: (height + width) * 0.13,
    height: (height + width) * 0.13,
    objectFit: 'contain',
  },
});

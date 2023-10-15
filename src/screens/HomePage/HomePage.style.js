import {Dimensions, StyleSheet} from 'react-native';
import GStyles from '../../GStyles';

const {height} = Dimensions.get('window');
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 1,
    backgroundColor: 'white',
  },
  seperator: {
    alignSelf: 'center',
    width: width * 0.9,
    height: (height + width) * 0.0012,
    backgroundColor: GStyles.colors.seperator,
  },
  opinions_label: {
    color: GStyles.colors.theme,
    fontSize: GStyles.fontSizes.title,
    fontWeight: 'bold',
    marginHorizontal: GStyles.spacings.mainHorizontal,
    marginTop: GStyles.spacings.vertical,
    textAlign: 'left',
  },
  popular_label: {
    color: GStyles.colors.title,
    fontSize: GStyles.fontSizes.title,
    fontWeight: 'bold',
    marginHorizontal: GStyles.spacings.mainHorizontal,
    marginTop: GStyles.spacings.vertical,
    textAlign: 'left',
  },
  icon: {
    marginRight: (height + width) * 0.01,
  },
});

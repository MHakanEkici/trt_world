import {Dimensions, StyleSheet} from 'react-native';
import GStyles from '../../../GStyles';

const {height} = Dimensions.get('window');
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: GStyles.spacings.vertical,
    flexDirection: 'row',
    alignItems: 'center',
  },
  index_container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: GStyles.spacings.mainPadding,
  },
  index_number: {
    fontSize: (height + width) * 0.07,
    color: GStyles.colors.gray_text,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    marginHorizontal: GStyles.spacings.mainHorizontal,
    fontSize: GStyles.fontSizes.textBig,
    color: GStyles.colors.text,
    flexWrap: 'wrap',
    textAlign: 'left',
  },
  name: {
    marginHorizontal: GStyles.spacings.mainHorizontal,
    fontSize: GStyles.fontSizes.textBig,
    fontWeight: 'bold',
    color: GStyles.colors.title,
  },
});

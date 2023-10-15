import {StyleSheet} from 'react-native';

const base_style = StyleSheet.create({
  container: {
    margin: 5,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default {
  primary: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: 'rgba(0, 0, 30, 0.3)',
    },
  }),
  secondary: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      borderWidth: 1.5,
      borderColor: 'white',
    },
    label: {
      ...base_style.label,
      color: 'white',
    },
  }),
};

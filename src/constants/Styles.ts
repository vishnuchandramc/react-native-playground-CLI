import {StyleSheet} from 'react-native';
import Colors from './Colors';
import {fonts} from './Fonts';

export const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  headline: {
    fontSize: 28,
    paddingVertical: 6,
    color: Colors.dark,
    fontFamily: fonts.bold.fontFamily,
  },
  normalText: {
    fontSize: 20,
    paddingVertical: 6,
    fontFamily: fonts.medium.fontFamily,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: fonts.medium.fontFamily,
    color: Colors.light,
  },
  pillButton: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
});

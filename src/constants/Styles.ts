import {StyleSheet} from 'react-native';
import Colors from './Colors';
import {fonts} from './Fonts';
import {
  fontPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from './Layout';

export const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headline: {
    fontSize: fontPixel(28),
    paddingVertical: pixelSizeVertical(6),
    color: Colors.dark,
    fontFamily: fonts.bold.fontFamily,
  },
  normalText: {
    fontSize: fontPixel(20),
    paddingVertical: pixelSizeVertical(6),
    fontFamily: fonts.medium.fontFamily,
  },
  buttonText: {
    fontSize: fontPixel(18),
    fontFamily: fonts.medium.fontFamily,
    color: Colors.light,
  },
  pillButton: {
    paddingHorizontal: pixelSizeHorizontal(20),
    paddingVertical: pixelSizeVertical(20),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: widthPixel(50),
  },
  gap: {padding: pixelSizeHorizontal(12)},
});

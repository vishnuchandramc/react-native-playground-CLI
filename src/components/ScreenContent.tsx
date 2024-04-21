import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {defaultStyles} from '../constants/Styles';
import Colors from '../constants/Colors';

type barStyle = 'dark-content' | 'light-content';
const keyboardVerticalOffset = Platform.OS === 'ios' ? 20 : 0;

type ScreenContentProps = {
  title?: string;
  barstyle?: barStyle;
  children?: React.ReactNode;
  backgroundColor?: string;
};

export const ScreenContent = ({
  children,
  barstyle,
  backgroundColor,
}: ScreenContentProps) => {
  return (
    <SafeAreaView
      style={[
        defaultStyles.container,
        {backgroundColor: backgroundColor || Colors.background},
      ]}>
      <StatusBar
        backgroundColor={backgroundColor || Colors.background}
        barStyle={barstyle || 'dark-content'}
      />
      <KeyboardAvoidingView
        style={[defaultStyles.container]}
        behavior="padding"
        keyboardVerticalOffset={keyboardVerticalOffset}>
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

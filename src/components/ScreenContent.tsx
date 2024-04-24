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
const keyboardVerticalOffset = 20;

type ScreenContentProps = {
  title?: string;
  barstyle?: barStyle;
  children?: React.ReactNode;
  backgroundColor?: string;
  containerStyle?: StyleProp<ViewStyle>;
};

export const ScreenContent = ({
  children,
  barstyle,
  backgroundColor,
  containerStyle,
}: ScreenContentProps) => {
  return (
    <SafeAreaView
      style={[
        defaultStyles.container,
        containerStyle,
        {backgroundColor: backgroundColor || Colors.background},
      ]}>
      <StatusBar
        backgroundColor={backgroundColor || Colors.background}
        barStyle={barstyle || 'dark-content'}
      />
      <KeyboardAvoidingView
        style={[defaultStyles.container]}
        behavior={Platform.OS == 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={keyboardVerticalOffset}>
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

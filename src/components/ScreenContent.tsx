import {
  KeyboardAvoidingView,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import Colors from '../constants/Colors';

type barStyle = 'dark-content' | 'light-content';

type ScreenContentProps = {
  title?: string;
  barstyle?: barStyle;
  children?: React.ReactNode;
};

export const ScreenContent = ({children, barstyle}: ScreenContentProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={barstyle || 'dark-content'} />
      <KeyboardAvoidingView style={styles.container}>
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});

import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {ScreenContent} from '../components/ScreenContent';
import Colors from '../constants/Colors';
import {defaultStyles} from '../constants/Styles';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../constants/Strings';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const LaunchScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<{route: {}}>>();
  useEffect(() => {
    console.log('Launch Screen');
    setTimeout(() => {
      //@ts-ignore
      navigation.replace(SCREENS.LOGIN);
    }, 5000);
  }, []);

  return (
    <ScreenContent backgroundColor={Colors.primary} barstyle="light-content">
      <View style={styles.container}>
        <Text style={[defaultStyles.headline, {color: Colors.light}]}>
          tamaCLI
        </Text>
      </View>
    </ScreenContent>
  );
};

export default LaunchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

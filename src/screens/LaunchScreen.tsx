import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {ScreenContent} from '../components/ScreenContent';
import Colors from '../constants/Colors';
import {defaultStyles} from '../constants/Styles';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../constants/Strings';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  Easing,
  withTiming,
} from 'react-native-reanimated';

const LaunchScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<{route: {}}>>();
  useEffect(() => {
    console.log('Launch Screen');
    startAnimation();
    // setTimeout(() => {
    //   //@ts-ignore
    //   navigation.replace(SCREENS.LOGIN);
    // }, 5000);
  }, []);

  const scale = useSharedValue(8); // Initial scale value set to zoom in

  const startAnimation = () => {
    scale.value = withTiming(1, {
      duration: 400,
    });
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
    };
  });
  return (
    <ScreenContent backgroundColor={Colors.primary} barstyle="light-content">
      <View style={styles.container}>
        <Text style={[defaultStyles.headline, {color: Colors.light}]}>
          tamaCLI
        </Text>
        <Animated.View style={[styles.stamp, animatedStyle]} />
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
  stamp: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'red',
  },
});

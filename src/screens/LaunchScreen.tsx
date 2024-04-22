import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ScreenContent} from '../components/ScreenContent';
import Colors from '../constants/Colors';
import {defaultStyles} from '../constants/Styles';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../constants/Strings';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from 'react-native-reanimated';

const LaunchScreen = () => {
  const [appIcon, setAppIcon] = useState('React Native App');
  const navigation = useNavigation<NativeStackNavigationProp<{route: {}}>>();

  useEffect(() => {
    console.log('Launch Screen');

    setTimeout(() => {
      setAppIcon('');
      startTextAnimation();
    }, 800);
    setTimeout(() => {
      startStampAnimation();
    }, 1200);
    setTimeout(() => {
      //@ts-ignore
      navigation.replace(SCREENS.SIGNUP);
    }, 3000);
  }, []);

  const textOpacity = useSharedValue(0); // Initial opacity value set to 0
  const stampOpacity = useSharedValue(0); // Initial opacity value set to 0
  const scale = useSharedValue(8); // Initial scale value set to zoom in

  const startTextAnimation = () => {
    textOpacity.value = withTiming(1, {
      duration: 400,
    });
  };

  const startStampAnimation = () => {
    stampOpacity.value = withTiming(1, {
      duration: 500,
    });
    scale.value = withTiming(1, {
      duration: 500,
    });
  };

  const textAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: textOpacity.value,
    };
  });

  const stampAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: stampOpacity.value,
      transform: [{scale: scale.value}],
    };
  });

  return (
    <ScreenContent backgroundColor={Colors.primary} barstyle="light-content">
      <View style={styles.container}>
        <Animated.Text
          allowFontScaling={false}
          style={[
            defaultStyles.headline,
            {color: Colors.light, textAlign: 'center'},
            textAnimatedStyle,
          ]}>
          {`React Native\nApplication\nplayground`}
        </Animated.Text>
        {appIcon && (
          <Text style={[defaultStyles.headline, {color: Colors.light}]}>
            {appIcon}
          </Text>
        )}
        <Animated.View style={[styles.stamp, stampAnimatedStyle]}>
          <Text
            allowFontScaling={false}
            style={[
              defaultStyles.headline,
              {color: Colors.light, textAlign: 'center'},
            ]}>
            Approved by me
          </Text>
        </Animated.View>
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
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundColor: 'transparent',
    margin: 12,
    borderWidth: 5,
    borderColor: Colors.light,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ScreenContent} from '../../components/ScreenContent';
import {defaultStyles} from '../../constants/Styles';
import Colors from '../../constants/Colors';
import {fonts} from '../../constants/Fonts';

const Login = () => {
  return (
    <ScreenContent containerStyle={defaultStyles.gap}>
      <Text
        style={{color: Colors.primary, fontFamily: fonts.regular.fontFamily}}>
        App Playgrounds
      </Text>
      <Text style={defaultStyles.headline}>
        Welcome back, Please login to continue.
      </Text>
    </ScreenContent>
  );
};

export default Login;

const styles = StyleSheet.create({});

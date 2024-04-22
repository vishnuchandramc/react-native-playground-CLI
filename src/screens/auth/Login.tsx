import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {ScreenContent} from '../../../src/components/ScreenContent';
import Colors from '../../../src/constants/Colors';
import {
  fontPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from '../../../src/constants/Layout';
import {fonts} from '../../../src/constants/Fonts';
import {defaultStyles} from '../../constants/Styles';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../constants/Strings';

const Login = () => {
  const [countryCode, setCountryCode] = useState('+91');
  const [phoneNumber, setPhoneNumber] = useState('');
  const {navigate} = useNavigation();
  const handleLogin = () => {
    console.log('login');
  };
  const handleSignUp = () => {
    // @ts-ignore
    navigate(SCREENS.SIGNUP);
  };
  return (
    <ScreenContent>
      <Text
        style={{color: Colors.primary, fontFamily: fonts.regular.fontFamily}}>
        App Playgrounds
      </Text>
      <Text style={[defaultStyles.headline, {color: Colors.dark}]}>
        Hello welcome to the world of coding
      </Text>
      <Text style={[defaultStyles.normalText, {color: Colors.dark}]}>
        Let's gets started!
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, {width: widthPixel(75)}]}
          placeholder="Country code"
          placeholderTextColor={Colors.gray}
          value={countryCode}
        />
        <TextInput
          style={[styles.input, {flex: 1}]}
          placeholder="Mobile number"
          placeholderTextColor={Colors.gray}
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>
      <TouchableOpacity onPress={handleSignUp}>
        <Text style={styles.linkButton}>Already have an account? Login</Text>
      </TouchableOpacity>
      <View style={{flex: 1}} />
      <TouchableOpacity
        onPress={handleLogin}
        style={[
          defaultStyles.pillButton,
          {
            backgroundColor:
              phoneNumber == '' ? Colors.primaryMuted : Colors.primary,
            marginBottom: pixelSizeVertical(10),
          },
        ]}>
        <Text style={defaultStyles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </ScreenContent>
  );
};

export default Login;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: pixelSizeVertical(20),
    flexDirection: 'row',
  },
  input: {
    backgroundColor: Colors.lightGray,
    fontFamily: fonts.regular.fontFamily,
    paddingHorizontal: pixelSizeHorizontal(20),
    paddingVertical: pixelSizeVertical(20),
    borderRadius: widthPixel(16),
    fontSize: fontPixel(20),
    marginRight: pixelSizeHorizontal(10),
    color: Colors.dark,
  },
  linkButton: {
    fontFamily: fonts.regular.fontFamily,
    fontSize: fontPixel(18),
    color: Colors.primary,
  },
});

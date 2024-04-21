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
import {defaultStyles} from '../../../src/constants/Styles';
import {fonts} from '../../../src/constants/Fonts';

const Login = () => {
  const [countryCode, setCountryCode] = useState('+91');
  const [phoneNumber, setPhoneNumber] = useState('');
  const handleLogin = () => {
    console.log('login');
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
          style={[styles.input, {width: 75}]}
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
      <TouchableOpacity onPress={handleLogin}>
        <Text style={styles.linkButton}>Already have an account? Login</Text>
      </TouchableOpacity>
      <View style={{flex: 1}} />
      <TouchableOpacity
        style={[
          defaultStyles.pillButton,
          {
            backgroundColor:
              phoneNumber == '' ? Colors.primaryMuted : Colors.primary,
            marginBottom: 10,
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
    marginVertical: 20,
    flexDirection: 'row',
  },
  input: {
    backgroundColor: Colors.lightGray,
    fontFamily: fonts.regular.fontFamily,
    padding: 20,
    borderRadius: 16,
    fontSize: 20,
    marginRight: 10,
    color: Colors.dark,
  },
  linkButton: {
    fontFamily: fonts.regular.fontFamily,
    fontSize: 18,
    color: Colors.primary,
  },
});

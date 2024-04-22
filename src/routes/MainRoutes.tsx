import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../screens/auth/Login';
import {SCREENS} from '../constants/Strings';
import LaunchScreen from '../screens/LaunchScreen';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import SignUp from '../screens/auth/SignUp';

const MainRoutes = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          ...TransitionPresets.SlideFromRightIOS,
          transitionSpec: {
            open: {animation: 'spring', config: {stiffness: 50}},
            close: {animation: 'spring', config: {stiffness: 50}},
          },
        }}
        initialRouteName={SCREENS.LAUNCHER}>
        <Stack.Screen
          name={SCREENS.LAUNCHER}
          component={LaunchScreen}
          options={() => ({
            headerShown: false,
          })}
        />
        <Stack.Screen
          name={SCREENS.LOGIN}
          component={Login}
          options={() => ({
            headerShown: false,
          })}
        />
        <Stack.Screen
          name={SCREENS.SIGNUP}
          component={SignUp}
          options={() => ({
            headerShown: false,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainRoutes;

const styles = StyleSheet.create({});

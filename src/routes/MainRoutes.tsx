import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../screens/auth/Login';
import {SCREENS} from '../constants/Strings';
import LaunchScreen from '../screens/LaunchScreen';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import SignUp from '../screens/auth/SignUp';
import Dashboard from '../screens/home/Dashboard';

const MainRoutes = () => {
  const Stack = createStackNavigator();

  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };

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
          name={SCREENS.SIGNUP}
          component={SignUp}
          options={() => ({
            headerShown: false,
          })}
        />
        <Stack.Screen
          name={SCREENS.LOGIN}
          component={Login}
          //@ts-ignore
          options={() => ({
            headerShown: false,
            transitionSpec: {
              open: config,
              close: config,
            },
          })}
        />
        <Stack.Screen
          name={SCREENS.DASHBOARD}
          component={Dashboard}
          //@ts-ignore
          options={() => ({
            headerShown: false,
            transitionSpec: {
              open: config,
              close: config,
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainRoutes;

const styles = StyleSheet.create({});

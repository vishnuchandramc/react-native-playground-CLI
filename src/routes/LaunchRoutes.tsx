import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SCREENS} from '../constants/Strings';
import LaunchScreen from '../screens/LaunchScreen';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

const LaunchRoutes = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
        transitionSpec: {
          open: {animation: 'timing', config: {duration: 1000}},
          close: {animation: 'timing', config: {duration: 1000}},
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
    </Stack.Navigator>
  );
};

export default LaunchRoutes;

const styles = StyleSheet.create({});

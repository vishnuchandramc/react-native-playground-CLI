import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/auth/Login';
import {SCREENS} from '../constants/Strings';
import LaunchScreen from '../screens/LaunchScreen';

const MainRoutes = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={SCREENS.LAUNCHER}>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainRoutes;

const styles = StyleSheet.create({});

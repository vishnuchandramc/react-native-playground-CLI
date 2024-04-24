import React, {useRef} from 'react';
import {Animated, ScrollView, StyleSheet, Text, View} from 'react-native';

const DATA = [
  {id: 1},
  {id: 2},
  {id: 3},
  {id: 4},
  {id: 5},
  {id: 6},
  {id: 7},
  {id: 8},
  {id: 9},
  {id: 10},
];

const Header_Max_Height = 300;
const Header_Min_Height = 100;
const Scroll_Distance = Header_Max_Height - Header_Min_Height;

const DynamicHeader = ({value, children}: any) => {
  const animatedHeaderColor = value.interpolate({
    inputRange: [0, Scroll_Distance],
    outputRange: ['#f00', '#fff'],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View
      style={[
        styles.header,
        {
          backgroundColor: animatedHeaderColor,
        },
      ]}>
      {children}
    </Animated.View>
  );
};

export default DynamicHeader;

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
    paddingTop: 25,
  },
});

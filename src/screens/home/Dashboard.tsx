import {
  Animated,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {ScreenContent} from '../../components/ScreenContent';
import {defaultStyles} from '../../constants/Styles';
import {
  fontPixel,
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from '../../constants/Layout';
import Colors from '../../constants/Colors';
import {fonts} from '../../constants/Fonts';
import {data} from '../../models/DataModel';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {FlashList} from '@shopify/flash-list';
import DynamicHeader from '../../components/DynamicHeader';

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const renderItem = ({item, index}: any) => {
    const {title, description, color} = item;
    return (
      <View style={[styles.itemContainer, {backgroundColor: Colors.light}]}>
        <Text style={[defaultStyles.normalText, {color: color}]}>{title}</Text>
        <Text style={[defaultStyles.normalText, {color: Colors.dark}]}>
          {description}
        </Text>
        <View style={{flex: 1}} />
        <View
          style={{
            width: '100%',
            flexDirection: 'row-reverse',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.primary,
              width: widthPixel(100),
              padding: pixelSizeVertical(10),
              borderRadius: pixelSizeHorizontal(40),
              justifyContent: 'center',
              alignItems: 'center',
              margin: pixelSizeVertical(8),
            }}>
            <Text
              style={{
                fontFamily: fonts.medium.fontFamily,
                fontSize: 16,
                color: Colors.light,
              }}>
              View
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const Header_Max_Height = 200;
  const Header_Min_Height = 100;
  const Scroll_Distance = Header_Max_Height - Header_Min_Height;
  const scrollOffsetY = useRef(new Animated.Value(0)).current;

  const animatedHeaderColor = scrollOffsetY.interpolate({
    inputRange: [0, Scroll_Distance],
    outputRange: ['#f00', Colors.background],
    extrapolate: 'clamp',
  });

  return (
    <ScreenContent>
      <Animated.View
        style={[
          styles.header,
          {
            backgroundColor: animatedHeaderColor,
          },
        ]}>
        <Text style={defaultStyles.headline}>Dashboard</Text>

        {/* <Text
        style={[
          defaultStyles.headline,
          {paddingHorizontal: pixelSizeHorizontal(16)},
        ]}>
        Dashboard
      </Text> */}
      </Animated.View>

      <ScrollView
        nestedScrollEnabled
        scrollEventThrottle={5}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollOffsetY}}}],
          {
            useNativeDriver: false,
          },
        )}>
        <Animated.View style={{backgroundColor: animatedHeaderColor}}>
          <TextInput
            style={[styles.input]}
            placeholder="Search"
            placeholderTextColor={Colors.gray}
            keyboardType="phone-pad"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <Text
            style={
              styles.hero
            }>{`Welcome Rahul\nWhat your plan to learn today😉`}</Text>
        </Animated.View>
        <Text style={styles.title}>Programming Languages</Text>
        <Text style={styles.description}>
          Learn programming language as your choice, Checkout now!
        </Text>
        <FlashList
          horizontal
          data={data.languages}
          keyExtractor={item => item.id}
          estimatedItemSize={200}
          renderItem={renderItem}
          ListHeaderComponent={<View style={{paddingHorizontal: 6}} />}
          showsHorizontalScrollIndicator={false}
          ListFooterComponent={<View style={styles.flatlist} />}
        />
        <Text style={styles.title}>Databases</Text>
        <Text style={styles.description}>
          Learn programming language as your choice, Checkout now!
        </Text>
        <FlashList
          horizontal
          data={data.databases}
          keyExtractor={item => item.id}
          estimatedItemSize={200}
          renderItem={renderItem}
          ListHeaderComponent={<View style={{paddingHorizontal: 6}} />}
          showsHorizontalScrollIndicator={false}
          ListFooterComponent={<View style={styles.flatlist} />}
        />
        <Text style={styles.title}>Frameworks</Text>
        <Text style={styles.description}>
          Learn programming language as your choice, Checkout now!
        </Text>
        <FlashList
          horizontal
          data={data.frameworks}
          keyExtractor={item => item.id}
          estimatedItemSize={200}
          renderItem={renderItem}
          ListHeaderComponent={<View style={{paddingHorizontal: 6}} />}
          showsHorizontalScrollIndicator={false}
          ListFooterComponent={<View style={styles.flatlist} />}
        />
        <View style={{padding: 80}}>
          <Text style={[defaultStyles.headline, {color: Colors.lightGray}]}>
            Made with love in Trivandrum.
          </Text>
        </View>
      </ScrollView>
    </ScreenContent>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  hero: {
    fontSize: fontPixel(24),
    color: Colors.dark,
    fontFamily: fonts.medium.fontFamily,
    paddingVertical: pixelSizeVertical(12),
    paddingHorizontal: pixelSizeHorizontal(14),
  },
  input: {
    backgroundColor: Colors.lightGray,
    fontFamily: fonts.regular.fontFamily,
    paddingHorizontal: pixelSizeHorizontal(20),
    paddingVertical: pixelSizeVertical(10),
    marginBottom: pixelSizeVertical(20),
    borderRadius: widthPixel(16),
    fontSize: fontPixel(20),
    marginHorizontal: pixelSizeHorizontal(14),
    color: Colors.dark,
  },
  description: {
    paddingHorizontal: pixelSizeHorizontal(16),
    color: Colors.dark,
    fontFamily: fonts.regular.fontFamily,
    fontSize: fontPixel(20),
  },
  itemContainer: {
    width: widthPixel(250),
    height: heightPixel(200),
    flex: 1,
    backgroundColor: Colors.lightGray,
    borderRadius: widthPixel(16),
    marginHorizontal: pixelSizeHorizontal(6),
    marginVertical: pixelSizeVertical(6),
    padding: pixelSizeHorizontal(8),
    elevation: 5,
    shadowColor: '#efefef',
  },
  title: {
    fontSize: 18,
    fontFamily: fonts.semibold.fontFamily,
    paddingHorizontal: pixelSizeHorizontal(16),
    color: Colors.dark,
  },
  flatlist: {padding: pixelSizeVertical(14)},
  header: {
    justifyContent: 'center',
    // alignItems: 'center',
    paddingHorizontal: pixelSizeHorizontal(12),
    paddingBottom: pixelSizeHorizontal(16),
    left: 0,
    right: 0,
    paddingTop: 25,
  },
});

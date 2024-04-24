import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
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
    );
  };
  return (
    <ScreenContent>
      <Text
        style={[
          defaultStyles.headline,
          {paddingHorizontal: pixelSizeHorizontal(16)},
        ]}>
        Dashboard
      </Text>
      <Text
        style={
          styles.hero
        }>{`Welcome Rahul\nWhat your plan to learn today😉`}</Text>
      <TextInput
        style={[styles.input]}
        placeholder="Search"
        placeholderTextColor={Colors.gray}
        keyboardType="phone-pad"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <ScrollView nestedScrollEnabled>
        <Text style={styles.title}>Programming Languages</Text>
        <Text style={styles.description}>
          Learn programming language as your choice, Checkout now!
        </Text>
        <FlatList
          horizontal
          data={data.languages}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          style={styles.flatlist}
          showsHorizontalScrollIndicator={false}
          ListFooterComponent={<View style={styles.flatlist} />}
        />
        <Text style={styles.title}>Databases</Text>
        <Text style={styles.description}>
          Learn programming language as your choice, Checkout now!
        </Text>
        <FlatList
          horizontal
          data={data.databases}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          style={styles.flatlist}
          ListFooterComponent={<View style={styles.flatlist} />}
        />
        <Text style={styles.title}>Frameworks</Text>
        <Text style={styles.description}>
          Learn programming language as your choice, Checkout now!
        </Text>
        <FlatList
          horizontal
          data={data.frameworks}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          style={styles.flatlist}
          ListFooterComponent={<View style={styles.flatlist} />}
        />
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
    margin: widthPixel(6),
    padding: widthPixel(8),
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
});

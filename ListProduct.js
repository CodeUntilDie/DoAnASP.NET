import React, {useState, useRef, useEffect} from 'react';
import {View, Text, Button, Pressable, Image, StyleSheet} from 'react-native';

import {images} from '../constants';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

function HandBag() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

function Jewellery() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const ListProduct = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
                },
                {
                  justifyContent: 'flex-start',
                  padding: 5,
                  margin: 5,
                  borderRadius: 10,
                },
              ]}>
              <Image
                source={images.right}
                style={{
                  height: 30,
                  width: 30,
                  tintColor: 'black',
                }}></Image>
            </Pressable>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
                },
                {
                  borderRadius: 10,
                  justifyContent: 'flex-end',
                  padding: 5,
                  margin: 5,
                },
              ]}>
              <Image
                source={images.search}
                style={{
                  height: 30,
                  width: 30,
                  tintColor: 'black',
                }}></Image>
            </Pressable>
            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
                },
                {
                  borderRadius: 10,
                  justifyContent: 'flex-end',
                  padding: 5,
                  margin: 5,
                },
              ]}>
              <Image
                source={images.cart}
                style={{
                  height: 30,
                  width: 30,
                  tintColor: 'black',
                }}></Image>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={{marginLeft: 15}}>
        <Text style={{fontSize: 22, fontWeight: 'bold', color: 'black'}}>
          Women
        </Text>
      </View>
      <View style={{}}>
        <NavigationContainer>
            <Tab.Navigator
            screenOptions={{
                tabBarLabelPosition: "beside-icon",
                tabBarLabelStyle: {
                    fontWeight: "700",
                    fontSize: 15,
                    textAlignVertical: 'center',
                },
                tabBarIconStyle: { display: "none" },
              }}
            >
                <Tab.Screen name="Hand Bag" component={HandBag} />
                <Tab.Screen name="Jewellery" component={Jewellery} />
            </Tab.Navigator>
        </NavigationContainer>
      </View>
    </View>
  );
};

export default ListProduct;

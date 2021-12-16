import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  ImageBackground,
  Pressable,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {images} from '../constants';

function Adidas() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Adidas!</Text>
    </View>
  );
}

function Nike() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Nike!</Text>
    </View>
  );
}

function VansConverse() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Vans Converse!</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

const Home = () => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={images.nen_home}
        style={{flex: 1, paddingHorizontal: 15}}
        resizeMode="cover">
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 20,
          }}>
          <Pressable
            style={({pressed}) => [
              {
                backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
              },
              {
                borderRadius: 12,
                paddingVertical: 10,
                paddingHorizontal: 15,
              },
            ]}>
            <Image
              source={images.nav}
              style={{
                height: 20,
                width: 20,
                tintColor: '#357EAF',
              }}></Image>
          </Pressable>
          <Pressable
            style={({pressed}) => [
              {
                backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
              },
              {
                borderRadius: 12,
                paddingHorizontal: 10,
                paddingVertical: 10,
              },
            ]}>
            <Text style={{fontSize: 17, fontWeight: 'bold', color: 'black'}}>
              ĐH
            </Text>
          </Pressable>
        </View>
        <Text style={{color: 'black', fontSize: 25, fontWeight: 'bold'}}>
          Product
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 10,
          }}>
          <Text style={{color: 'black', fontSize: 23}}>Adidas</Text>
          <Text style={{color: '#635655', fontSize: 23}}>Nike</Text>
          <Text style={{color: '#635655', fontSize: 23}}>Vans Converse</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <View style={{backgroundColor: '#ccc', borderRadius: 15}}>
            <Image
              source={images.hand_bag_1}
              style={{width: 100, height: 120, alignItems: 'center'}}></Image>
            <View style={{borderTopColor: '#43c', borderTopWidth: 1}}>
              <Text style={{color: 'black', fontSize: 20}}>
                Adidas Prophere
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginHorizontal: 10,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: 'red'}}>$</Text>
                <Text>350</Text>
              </View>
              <Pressable
                style={({pressed}) => [
                  {
                    backgroundColor: pressed ? 'rgb(210, 230, 255)' : '#FF6464',
                  },
                  {
                    borderRadius: 50,
                    marginRight: 30,
                    height: 30,
                    width: 30,
                  },
                ]}>
                <Image
                  source={images.heart}
                  style={{
                    height: 30,
                    width: 30,
                    tintColor: 'white',
                  }}></Image>
              </Pressable>
            </View>
          </View>
          <View style={{backgroundColor: '#ccc', borderRadius: 15}}>
            <Image
              source={images.hand_bag_1}
              style={{width: 100, height: 120, alignItems: 'center'}}></Image>
            <View style={{borderTopColor: '#43c', borderTopWidth: 1}}>
              <Text style={{color: 'black', fontSize: 20}}>
                Adidas Prophere
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginHorizontal: 10,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: 'red'}}>$</Text>
                <Text>350</Text>
              </View>
              <Pressable
                style={({pressed}) => [
                  {
                    backgroundColor: pressed ? 'rgb(210, 230, 255)' : '#FF6464',
                  },
                  {
                    borderRadius: 50,
                    marginRight: 30,
                    height: 30,
                    width: 30,
                  },
                ]}>
                <Image
                  source={images.heart}
                  style={{
                    height: 30,
                    width: 30,
                    tintColor: 'white',
                  }}></Image>
              </Pressable>
            </View>
          </View>
        </View>
        <View style={{}}>
          <View style={{backgroundColor: '#ccc', borderRadius: 15,marginTop:20}}>
            <Image
              source={images.hand_bag_1}
              style={{width: 100, height: 120, alignItems: 'center'}}></Image>
            <View style={{borderTopColor: '#43c', borderTopWidth: 1}}>
              <Text style={{color: 'black', fontSize: 20}}>Adidas Prophere</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginHorizontal: 10,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: 'red'}}>$</Text>
                <Text>350</Text>
              </View>
              <Pressable
                style={({pressed}) => [
                  {
                    backgroundColor: pressed ? 'rgb(210, 230, 255)' : '#FF6464',
                  },
                  {
                    borderRadius: 50,
                    marginRight: 30,
                    height: 30,
                    width: 30,
                  },
                ]}>
                <Image
                  source={images.heart}
                  style={{
                    height: 30,
                    width: 30,
                    tintColor: 'white',
                  }}></Image>
              </Pressable>
            </View>
          </View>
          <View style={{backgroundColor: '#ccc', borderRadius: 15,marginTop:20}}>
          <Image
            source={images.hand_bag_1}
            style={{width: 100, height: 120, alignItems: 'center'}}></Image>
          <View style={{borderTopColor: '#43c', borderTopWidth: 1}}>
            <Text style={{color: 'black', fontSize: 20}}>Adidas Prophere</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginHorizontal: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'red'}}>$</Text>
              <Text>350</Text>
            </View>
            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'rgb(210, 230, 255)' : '#FF6464',
                },
                {
                  borderRadius: 50,
                  marginRight: 30,
                  height: 30,
                  width: 30,
                },
              ]}>
              <Image
                source={images.heart}
                style={{
                  height: 30,
                  width: 30,
                  tintColor: 'white',
                }}></Image>
            </Pressable>
          </View>
        </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Home;

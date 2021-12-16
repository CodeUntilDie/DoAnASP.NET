import React, {useState, useRef, useEffect} from 'react';
import {View, Text, Button, Pressable, Image, StyleSheet} from 'react-native';

import {images} from '../constants';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Detail_pro = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#357EAF'}}>
      <View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'rgb(210, 230, 255)' : '#357EAF',
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
                  tintColor: 'white',
                }}></Image>
            </Pressable>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'rgb(210, 230, 255)' : '#357EAF',
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
                  tintColor: 'white',
                }}></Image>
            </Pressable>
            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'rgb(210, 230, 255)' : '#357EAF',
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
                  tintColor: 'white',
                }}></Image>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={{flex: 1, position: 'relative'}}>
        <View>
          <Text style={{color: 'white', fontSize: 12, marginLeft: 15}}>
            Aristocratic Hand Bag
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 28,
              fontWeight: 'bold',
              marginLeft: 15,
            }}>
            Ofice Code
          </Text>
        </View>

        <View style={{flexDirection: 'row', top: '27%'}}>
          <View>
            <Text style={{color: 'white', fontSize: 12, marginLeft: 15}}>
              Price
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: 27,
                fontWeight: 'bold',
                marginLeft: 15,
              }}>
              $234
            </Text>
          </View>
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: '63%',
            backgroundColor: 'white',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}>
          <View style={{position: 'absolute', right: "15%", top: -200}}>
            <Image
              source={images.hand_bag_1}
              style={{
                height: 250,
                width: 180,
              }}></Image>
          </View>
          <View style={{flexDirection: 'row', marginTop: '20%'}}>
            <View style={{marginLeft: 15}}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 12,
                }}>
                Color
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Pressable
                  style={({pressed}) => [
                    {
                      backgroundColor: pressed
                        ? 'rgb(210, 230, 255)'
                        : '#357EAF',
                    },
                    {
                      width: 17,
                      height: 17,
                      borderRadius: 50,
                      marginRight: 10,
                      marginTop: 5,
                    },
                  ]}></Pressable>
                <Pressable
                  style={({pressed}) => [
                    {
                      backgroundColor: pressed
                        ? 'rgb(210, 230, 255)'
                        : '#F8C078',
                    },
                    {
                      width: 17,
                      height: 17,
                      borderRadius: 50,
                      marginRight: 10,
                      marginTop: 5,
                    },
                  ]}></Pressable>
                <Pressable
                  style={({pressed}) => [
                    {
                      backgroundColor: pressed
                        ? 'rgb(210, 230, 255)'
                        : '#A29B9B',
                    },
                    {
                      width: 17,
                      height: 17,
                      borderRadius: 50,
                      marginRight: 10,
                      marginTop: 5,
                    },
                  ]}></Pressable>
              </View>
            </View>
            <View style={{marginLeft: '18%'}}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 12,
                }}>
                Size
              </Text>
              <Text
                style={{
                  marginTop: 3,
                  fontWeight: 'bold',
                  fontSize: 14,
                  color: 'black',
                }}>
                12 cm
              </Text>
            </View>
          </View>
          <View style={{marginLeft: 15}}>
            <Text
              style={{
                color: '#808080',
                fontSize: 12,
                marginRight: 30,
                marginTop: 25,
                lineHeight: 17,
              }}>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginTop: '10%',
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Pressable
                    style={({pressed}) => [
                      {
                        backgroundColor: pressed
                          ? 'rgb(210, 230, 255)'
                          : 'white',
                      },
                      {
                        borderRadius: 12,
                        borderColor: '#ccc',
                        borderWidth: 1,
                      },
                    ]}>
                    <Text style={{fontSize: 20, paddingHorizontal: 12}}>-</Text>
                  </Pressable>
                </View>
                <View style={{}}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 18,
                      paddingHorizontal: 10,
                      marginVertical: 3,
                      color: 'black',
                    }}>
                    01
                  </Text>
                </View>
                <View>
                  <Pressable
                    style={({pressed}) => [
                      {
                        backgroundColor: pressed
                          ? 'rgb(210, 230, 255)'
                          : 'white',
                      },
                      {
                        borderRadius: 12,
                        borderColor: '#ccc',
                        borderWidth: 1,
                      },
                    ]}>
                    <Text style={{fontSize: 20, paddingHorizontal: 10}}>+</Text>
                  </Pressable>
                </View>
              </View>
              <View style={{}}>
                <Pressable
                  style={({pressed}) => [
                    {
                      backgroundColor: pressed
                        ? 'rgb(210, 230, 255)'
                        : '#FF6464',
                    },
                    {
                      borderRadius: 50,
                      marginRight: 30,
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
            <View
              style={{
                flexDirection: 'row',
                marginTop: '10%',
                justifyContent: 'space-between',
              }}>
              <View>
                <Pressable
                  style={({pressed}) => [
                    {
                      backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
                    },
                    {
                      borderRadius: 12,
                      paddingVertical:10,
                      paddingHorizontal: 15,
                      borderColor: '#357EAF',
                      borderWidth: 1,
                    },
                  ]}>
                  <Image
                    source={images.cart_add}
                    style={{
                      height: 20,
                      width: 20,
                      tintColor: '#357EAF',
                    }}></Image>
                </Pressable>
              </View>
              <View style={{marginRight: 30}}>
                <Pressable
                  style={({pressed}) => [
                    {
                      backgroundColor: pressed
                        ? 'rgb(210, 230, 255)'
                        : '#357EAF',
                    },
                    {
                      borderRadius: 12,
                      paddingHorizontal: 80,
                      paddingVertical: 10,
                    },
                  ]}>
                  <Text
                    style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>
                    Buy Now
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Detail_pro;

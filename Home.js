import React from 'react';
import {View, Text, StyleSheet, Button, Pressable, Image,FlatList,StatusBar,SafeAreaView} from 'react-native';

import {images} from '../constants';

const data = [
  {id:1,nameGroup: 'Family', des: '5 days ago', images:images.avatar_1},
  {id:2,nameGroup: 'BFFs', des: '5 days ago', images:images.avatar_2},
  {id:3,nameGroup: 'Untitled', des: '5 days ago',images:images.avatar_3},
  {id:4,nameGroup: 'Untitled', des: '5 days ago',images:images.avatar_4},
  {id:5,nameGroup: 'Untitled', des: '5 days ago',images:images.avatar_5},
  {id:6,nameGroup: 'Untitled', des: '5 days ago',images:images.avatar_6},
];

const Home = ({navigation}) => {
    return (
    <SafeAreaView style={{backgroundColor: '#fff', flex:1}}>
        <FlatList
            data = {data}
            renderItem={
                ({ item,index }) => {
                    return(
                        <View>
                            <Pressable
                            onPress={() => navigation.navigate('Detail',{
                                data: item,
                            })}
                            >
                                <View style={{flexDirection:'row', margin:10, paddingBottom:10,borderBottomWidth:1,borderBottomColor: '#ccc6c6',}}>
                                    <Image
                                    style={{width:70, height: 70,borderColor:"#c97b7b",borderWidth:3,
                                                borderRadius: 50}}
                                        source={item.images}
                                    ></Image>
                                    <View style={{flexDirection: 'row',width:"75%",justifyContent:'space-between'}}>
                                        <Text style={{fontSize:20, color:'black', margin:20}}>{item.nameGroup}</Text>
                                        <Text style={{fontSize:20, color:'#ccc6c6', marginTop:20}}>→</Text>
                                    </View>
                                </View>
                            </Pressable>
                        </View>
                    )}
            }
            
            keyExtractor={item => item.id}
        >
        </FlatList>
    </SafeAreaView>
    );
};

export default Home;

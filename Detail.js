import React from 'react';
import {View, Text, StyleSheet, Button, Image, ImageBackground, Pressable} from 'react-native';

const Detail = ({route, navigation}) => {
  const {data} = route.params;

  return (
    <View style={{flex:1}}>
      <View style={{position:'relative' ,height:'40%'}}>
        <Image
        style={{height:"100%", width:'100%'}}
        resizeMode={('cover','stretch')}
          source={data.images}
        >
        </Image>
        <Text style={{position:"absolute", bottom:0, width:"100%", textAlign:'center',fontSize:20, padding:15,color:"#fff",letterSpacing:1, backgroundColor:'rgba(115, 99, 71, 0.5)'}}>{data.nameGroup}</Text>
      </View>
      <Text style={{fontSize:20,color:'black',borderBottomWidth:1,padding:15 ,marginHorizontal:15,textAlign:'center',borderBottomColor:'#ccc6c6'}}>{data.des}</Text>
      <View style={{flexDirection:'row', justifyContent:'space-evenly' ,borderBottomWidth:1,padding:15 ,marginHorizontal:15,borderBottomColor:'#ccc6c6'}}>
        <View style={{width:20, height:20,backgroundColor:'#c4545e', borderRadius:50}}></View>
        <View style={{width:20, height:20,backgroundColor:'#fcba03', borderRadius:50}}></View>
        <View style={{width:20, height:20,backgroundColor:'#429e76', borderRadius:50}}></View>
        <View style={{width:20, height:20,backgroundColor:'#37a4b0', borderRadius:50}}></View>
        <View style={{width:20, height:20,backgroundColor:'#c76b85', borderRadius:50}}></View>
        <View style={{width:20, height:20,backgroundColor:'#573c96', borderRadius:50}}></View>
        <View style={{width:20, height:20,backgroundColor:'#c7996b', borderRadius:50}}></View>
      </View>
      <View style={{flexDirection:'row', justifyContent:'space-evenly' ,padding:15 ,marginHorizontal:15}}>
        <View style={{justifyContent:'center',alignItems:'center',width:55, height:55,backgroundColor:'#ccc', borderRadius:50}}>
          <Text style={{fontSize:18,color:'black'}}>HD</Text>
        </View>
        <View style={{justifyContent:'center',alignItems:'center',width:55, height:55,backgroundColor:'#ccc', borderRadius:50}}>
          <Text style={{fontSize:18,color:'black'}}>HD</Text>
        </View>
        <View style={{justifyContent:'center',alignItems:'center',width:55, height:55,backgroundColor:'#ccc', borderRadius:50}}>
          <Text style={{fontSize:18,color:'black'}}>HD</Text>
        </View>
        <ImageBackground
          source={data.images}
        >
          <View style={{justifyContent:'center',alignItems:'center',width:55, height:55, borderRadius:50}}>
            <Text style={{fontSize:18,color:'black'}}>HD</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={{flexDirection:'row',padding:15 ,marginHorizontal:30}}>
        <Pressable
          onPress={() => navigation.navigate('AddPeople',{
            data: data,
        })}
        >
          <ImageBackground
            source={data.images}
          >
            <View style={{justifyContent:'center',alignItems:'center',width:55, height:55, borderRadius:50}}>
              <Text style={{fontSize:18,color:'black'}}>Add</Text>
            </View>
          </ImageBackground>
        </Pressable>
      </View>
      {/* <Button title="Go Back" onPress={() => navigation.goBack()}></Button> */}
    </View>
  );
};

export default Detail;

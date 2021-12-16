import React from 'react';
import {View, Text, StyleSheet, Button, Image, ImageBackground} from 'react-native';

const Detail = ({route, navigation}) => {
  const {data} = route.params;

  return (
    <View style={{flex:1,backgroundColor:"#fff", width:'100%'}}>
        <View style={{flexDirection:'row',borderBottomColor: '#ccc6c6', borderBottomWidth:1, height:70, margin:15, width:"92%"}}>
            <View style={{width:55,height:55,justifyContent:'center', alignItems:'center', backgroundColor:'#ccc', borderRadius:50}}>
                <Text style={{fontSize:18,color:'black'}}>HD</Text>
            </View>
            <Text style={{marginTop:20, marginLeft:10}}>{data.nameGroup}</Text>
        </View>
        <View style={{flexDirection:'row',borderBottomColor: '#ccc6c6', borderBottomWidth:1, height:70, margin:15, width:"92%"}}>
            <View style={{width:55,height:55,justifyContent:'center', alignItems:'center', backgroundColor:'#ccc', borderRadius:50}}>
            <Text style={{fontSize:18,color:'black'}}>HD</Text>
            </View>
            <Text style={{marginTop:20, marginLeft:10}}>{data.nameGroup}</Text>
        </View>
        <View style={{flexDirection:'row',borderBottomColor: '#ccc6c6', borderBottomWidth:1, height:70, margin:15, width:"92%"}}>
            <View style={{width:55,height:55,justifyContent:'center', alignItems:'center', backgroundColor:'#ccc', borderRadius:50}}>
            <Text style={{fontSize:18,color:'black'}}>HD</Text>
            </View>
            <Text style={{marginTop:20, marginLeft:10}}>{data.nameGroup}</Text>
        </View>
        <View style={{flexDirection:'row',borderBottomColor: '#ccc6c6', borderBottomWidth:1, height:70, margin:15, width:"92%"}}>
            <View style={{width:55,height:55,justifyContent:'center', alignItems:'center', backgroundColor:'#ccc', borderRadius:50}}>
            <Text style={{fontSize:18,color:'black'}}>HD</Text>
            </View>
            <Text style={{marginTop:20, marginLeft:10}}>{data.nameGroup}</Text>
        </View>
    </View>
  );
};

export default Detail;

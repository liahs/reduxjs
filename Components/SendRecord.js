import React, { useEffect, useState } from "react";
import { View, Text, TextInput } from "react-native";
import MIcon from 'react-native-vector-icons/MaterialIcons';

const SendRecord = (props) => {


    return (
        <View style={{ flex: 0.07, alignItems: 'center', alignSelf: 'flex-end', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
            <View style={{ flex: 1 ,alignItems:'center'}}>
                <MIcon name="delete" size={20} onPress={()=>props.handleTextView('initial')}/>
            </View>
            <View style={{ height:40,width:150,flexDirection:'row',alignItems:'center',justifyContent:'center',borderRadius:20,backgroundColor:'rgba(0,0,0,0.1)' }}>
                <Text style={{ marginRight:10,fontSize: 16, color: '#d30000'}}>00:12</Text>
                <MIcon name="mic" size={20} color="#d30000"/>   
            </View>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <MIcon  name="send" size={20} onPress={()=>props.handleTextView('initial')} />
            </View>
            <View style={{ flex: 1,justifyContent:'center',alignItems:'center'}}>
                <View style={{backgroundColor:'#05375a',height:40,width:40,justifyContent:'center',alignItems:'center',borderRadius:20}}>
                <MIcon name="lock" size={20} color='#ffbb00' />
                </View>
            </View>
        </View>

    )
}

export default SendRecord
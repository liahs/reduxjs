import React,{useEffect,useState} from "react";
import {View,Text,TextInput} from "react-native";
import AnimateMic from './animateMic'
import MIcon from 'react-native-vector-icons/MaterialIcons';

const VoiceRecording=(props)=>{

    return (
        <View style={{flex:0.07 ,alignItems:'center',alignSelf:'flex-end',flexDirection:'row',justifyContent:'space-between', marginBottom:10}}>
        <View style={{flex:1,flexDirection:'row',justifytContent:'space-between',alignItems:'center',paddingLeft:20}}>
            <MIcon name="delete" size={20} />
            <Text style={{color:'red',fontSize:16,paddingLeft:20}}>00:12</Text>
        </View>
        <View style={{flex:2, flexDirection:'row' ,alignItems:'center'}}> 
            <MIcon name="keyboard-arrow-left"/>
            <MIcon name="keyboard-arrow-left"/>
            <Text style={{fontSize:16,color:'grey',paddingLeft:5}}>Slide to cancel</Text>
            <AnimateMic {...props}/>
        </View>
        <View style={{flex:1,flexDirection:'row',justifyContent:'flex-end',alignItems:'center',paddingRight:20}}>
            <MIcon name="keyboard-arrow-right"/>
            <MIcon name="keyboard-arrow-right"/>
            <MIcon name="keyboard-arrow-right"/>
            <MIcon name="keyboard-arrow-right"/>
            <MIcon name="keyboard-arrow-right"/>
            <MIcon name="lock" size={20}/>
        </View>
</View>

    )
}

export default VoiceRecording
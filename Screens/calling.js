import React, { Component } from 'react';
import { View, Text,Image,StatusBar, ImageBackground } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5  from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
class Calling extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
 
  render() {
    return (
      <View style={{flex:1}}>
      <StatusBar backgroundColor='#05375A' />
            <ImageBackground
            blurRadius={32}
            source={require('../assets/user.png')} style={{alignItems:'center',flex:1,width:null,height:null,backgroundColor:'white',}}>
        <FontAwesome5 size={20} name="user-plus" style={{alignSelf:'flex-end', padding:40, color:'black'}} />
           <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
           
            <Image
            source={require('../assets/user.png')}
           style={{width:150, height:150}}
            />

<Text style={{fontFamily:'Barlow-Bold', marginTop:20, fontSize:20,color:'#05375A'}}>Himmat Kumar</Text>
            <Text style={{fontFamily:'Barlow-SemiBold' , marginTop:10}}>12:40</Text>
            <Text style={{fontFamily:'Barlow-Bold', marginTop:10, fontSize:15,color:'white'}}>AppName Voice Call</Text>
            </View>
           
           
            <View style={{flexDirection:'row', flex:1, justifyContent:'center', alignItems:'center' ,paddingTop:100 }}>
                   <View style={{flex:1, alignItems:'center' }}>
                   <FontAwesome5
                     name="microphone-slash" 
                    color='black'
                    size={40}
                    />
                    </View>
                    <View style={{flex:1 , alignItems:'center'}}>
                    <Icon
                     name='call-end'
                    style={{backgroundColor:'red', padding:20,borderRadius:100}}
                    size={40}
                    color='white'
                    onPress={()=>this.props.navigation.navigate('CallLog')}
                    /></View>
                    <View style={{flex:1 ,alignItems:'center'}}>
                    <Entypo 
                   name='sound' 
                    size={40}
                    color='black'
                    />
                    </View>
            </View>
            </ImageBackground>
      </View>
    );
  }
}

export default Calling;

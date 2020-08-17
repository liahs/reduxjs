import React, { Component } from 'react';
import { View, Text,Image,StatusBar, ImageBackground } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5  from 'react-native-vector-icons/FontAwesome5';

import MIIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import AIcon from 'react-native-vector-icons/AntDesign'
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
            source={require('../assets/user.png')} style={{alignItems:'center',flex:1,width:null,height:null,backgroundColor:'white',}}>
         <AIcon name='caretup' size={20} style={{alignSelf:'flex-start', padding:40, color:'black'}} />
           <View style={{flex:1, alignItems:'center', justifyContent:'center',marginTop:50}}>
           
            <Image
            source={require('../assets/user.png')}
           style={{width:150, height:150}}
            />

<Text style={{fontFamily:'Barlow-Bold', marginTop:20, fontSize:20,color:'#05375A'}}>Himmat Kumar</Text>
            <Text style={{fontFamily:'Barlow-SemiBold' , marginTop:10}}>Calling...</Text>
            <Text style={{fontFamily:'Barlow-Bold', marginTop:10, fontSize:15,color:'black'}}>AppName Voice Call</Text>
            </View>
           
           
            <View style={{flexDirection:'row',flex:1,alignItems:'center',marginTop:150}}>
                   <View style={{flex:1, alignItems:'center' }}>
                   <FontAwesome5
                     name="microphone-slash" 
                    color='black'
                    size={30}
                    />
                    </View>
                    <View style={{flex:1 , alignItems:'center'}}>
                    <Icon
                     name='call-end'
                    style={{backgroundColor:'red', padding:20,borderRadius:100}}
                    size={30}
                    color='white'
                    onPress={()=>this.props.navigation.navigate('CallLog')}
                    /></View>
                    <View style={{flex:1 ,alignItems:'center'}}>
                    <MIIcon name='camera-party-mode' size={30} />
                    </View>
            </View>
            </ImageBackground>
      </View>
    );
  }
}

export default Calling;

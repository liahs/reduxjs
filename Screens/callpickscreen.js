'use strict';
import React, { Component } from 'react';
import { View, Text, Image, StatusBar, ImageBackground } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DraggableView from './test';
export default class Callpickscreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
        visible:false
    };
  }
 
  changeVisibleIcon(){
    this.setState((state)=>({visible:!state.visible}))
  }
 
 
  render() {
    console.log(this.state.visible)
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor='#05375A' />
        <ImageBackground
          blurRadius={32}
          source={require('../assets/user.png')} style={{ alignItems: 'center', flex: 1, width: null, height: null, backgroundColor: 'white', }}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Image
              source={require('../assets/user.png')}
              style={{ width: 150, height: 150 }}
            />

            <Text style={{ fontFamily: 'Barlow-Bold', marginTop: 20, fontSize: 20, color: '#05375A' }}>Himmat</Text>

            <Text style={{ fontFamily: 'Barlow-Bold', marginTop: 10, fontSize: 15, color: '#05375A' }}>AppName Voice Call</Text>
          </View>


          <View style={{  alignItems:'center',flex: 1,flexDirection:'row',paddingTop: 100 }}>
            {this.state.visible?<View style={{width:60}}>
              <MaterialCommunityIcons
                name='phone'
                size={40}
                color='#FF0101'
              />
            </View>:<View 
                style={{marginRight:20, width:60 }}
              />
          }
            <View style={{flexDirection: 'row' }}>
              <FontAwesome
                name='angle-left'
                color='#05375A'
                size={25}
                style={{ fontFamily: 'Barlow-Black' }}
              />
              <FontAwesome
                name='angle-left'
                color='#05375A'
                size={25}
                style={{ fontFamily: 'Barlow-Black' }}
              />
              <FontAwesome
                name='angle-left'
                color='#05375A'
                size={25}
                style={{ fontFamily: 'Barlow-Black' }}
              />

            </View>
            <View style={{width:120}}>
                <DraggableView left='Chats' right='CallLog'  visible={()=>this.changeVisibleIcon()} {...this.props}/> 
                </View>
            <View style={{flexDirection: 'row' }}>
              <FontAwesome
                name='angle-right'
                size={25}
                color='#05375A'
                style={{ fontFamily: 'Barlow-Black' }}
              />
              <FontAwesome
                name='angle-right'
                size={25}
                color='#05375A'
                style={{ fontFamily: 'Barlow-Black' }}
              />
              <FontAwesome
                name='angle-right'
                color='#05375A'
                size={25}
                style={{ fontFamily: 'Barlow-Black' }}
              />

            </View>
            {this.state.visible?<View style={{width:60,marginLeft:20, zIndex:99999}}>
              <MaterialCommunityIcons name='phone-hangup'
              color={'#4CFF00'}
              size={40}
              />
            </View>:<View 
                style={{marginLeft:20, width:60 }}
                
              />}
          </View>
        </ImageBackground>
      </View>
    );
  }
}

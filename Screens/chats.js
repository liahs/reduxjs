import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, StatusBar, Image, Button } from 'react-native';

export default class Chats extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {

    return (
      <View style={{ flex: 1 , backgroundColor:'#05375A', paddingTop:10 }}>
        <StatusBar backgroundColor='#05375A' />
        <View style={{ flex: 1 }}>
          <FlatList
            data={[{ key: '1' }, { key: '2' }, { key: '3' }, { key: '4' }, { key: '5' }, { key: '6' }, { key: '7' }, { key: '8' }, { key: '9' }, { key: '10' }, { key: '11' }, { key: '12' }]}
            renderItem={({ item }) =>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Chat')} style={{height:65 , backgroundColor:'white', borderRadius:35 , marginHorizontal:20 , marginTop:10 , flexDirection:'row', elevation:20, flex:1}}>
            <View style={{flex:.2 , justifyContent:'center',alignItems:'center'}}>
            <Image
            source={require('../assets/user.png')}
            style={{width:50, height:50}}
            />
            </View>
            <View style={{flex:.6}}>
                        <View style={{flex:.8 , paddingTop:3}}>
                                <Text style={{color:'#1b7b7a',fontSize:17 , paddingLeft:15, fontFamily:'Barlow-Bold'}}>Himmat</Text>
                        </View>
                        <View style={{flex:1.2 , paddingTop:12, justifyContent:'flex-start' }}>
                                <Text style={{color:'black' , paddingLeft:15 , fontWeight:'900' }}>Hello sir</Text>
                        </View>
            </View>
            <View style={{flex:.3}}>
                        <View style={{flex:.7,  paddingTop:15 }}>
                                    <Text style={{fontSize:10 , alignSelf:'flex-start',fontFamily:'Barlow-SemiBold', color:'#808B96' , paddingLeft:24}}>10:10 PM</Text>
                        </View>
                        <View style={{flex:1.3,justifyContent:'flex-start'}}>
                            <View style={{width:20,height:20 , backgroundColor:'#FF5733', borderRadius:10 , alignSelf:'flex-start' , marginLeft:39 , paddingTop:0, marginTop:1 , justifyContent:'center', alignItems:'center' }}>
    <Text style={{ justifyContent:'center' , color:'white' , textAlign:'center' , fontSize:11}}>{item.key}</Text>
                            </View>
            </View>
            </View>
                    </TouchableOpacity>
            }
          />

        </View>

      </View>
    );
  }

} 

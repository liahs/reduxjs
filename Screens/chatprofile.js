import React, { Component } from 'react';
import { View, Text, Dimensions, Image,StatusBar,TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SwitchExample from './switch_example';

const DATA = [{
  id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
  title: 'First Item',
},
{
  id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
  title: 'Second Item',
},
{
  id: '58694a0f-3da1-471f-bd96-145571e29d72',
  title: 'Third Item',
}]
export default class Chatprofile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatMode: 'Personal',
      switch1Value: false,
    }
  }
  toggleSwitch1 = (value) => {
    this.setState({ switch1Value: value })
  }
  render() {
    return (
      <>
      <StatusBar backgroundColor='#05375A'/>
      <View style={{ flex: 1, backgroundColor: '#05375A' }}>
        <View style={{ height: Math.round(Dimensions.get('window').height) / 18, backgroundColor: '#05375A', flexDirection: 'row', paddingTop: 15, paddingLeft: 10, }}>

          <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', }} onPress={() => this.props.navigation.navigate('Chat')} >
            <View style={{ flex: .5, justifyContent: 'center', paddingTop: 4, paddingLeft: 5, alignItems: 'flex-start' }} >
              <MaterialCommunityIcons name='keyboard-backspace' color='white' size={25} onPress={() => this.props.navigation.navigate('Chat')} />
            </View>
            <View style={{ flex: 4, alignItems: 'center', flexDirection: 'row' }}>
              <Text style={{ fontFamily: 'Barlow-Bold', color: 'white', paddingHorizontal: 15, justifyContent: 'center', alignItems: 'center', textAlign: 'center' }} >Himmat</Text>

              <Image
                source={require('../assets/user.png')}
                style={{ width: 35, height: 35 }}
              />
            </View>
            <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>
              <Entypo name='dots-three-vertical' color='#05375a' size={20} style={{ paddingHorizontal: 10, color: 'white' }} />
            </View>
          </View>
        </View>
        <View style={{ flexDirection: 'row', paddingHorizontal: 30, justifyContent: 'center', flex: .5, paddingTop: 20 }}>
          <Text style={{ flex: 1, color: 'white', textAlign: 'left', fontFamily: 'Barlow-Bold', paddingTop: 25 }}>Move To {this.state.chatMode}</Text>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}><TouchableOpacity style={{ backgroundColor: 'skyblue', borderRadius: 20, paddingHorizontal: 30, paddingVertical: 8, marginTop: 0, alignItems: 'center', justifyContent: 'center' }}><Text style={{ color: 'white' }}>Move</Text></TouchableOpacity></View></View>
        <View>
          <Text style={{ paddingHorizontal: 30, color: 'white', fontSize: 10 }}>Himmat Wont Knew That They Have Been Moved You Can Move Them Back To
          General</Text>
        </View>

        <View style={{ flexDirection: 'row', flex: .5 }}>
          <View style={{ flex: 2 }}><Text style={{ flex: 1, color: 'white', textAlign: 'left', fontFamily: 'Barlow-Bold', paddingHorizontal: 30, paddingTop: 30 }}>Mute Notifications</Text></View>
          <View style={{ flex: 1, padding: 30 }}>
            <SwitchExample
              toggleSwitch1={this.toggleSwitch1}
              switch1Value={this.state.switch1Value} />
          </View>
        </View>
        <View style={{ flex: 4 }}>
          <View style={{ paddingVertical: 20, flexDirection: 'row', alignItems: 'stretch' }} ><Text style={{ flex: .7, color: 'white', textAlign: 'left', fontFamily: 'Barlow-Bold', paddingHorizontal: 30, }}>Attachments</Text><Text style={{ flex: .3, color: 'white', textAlign: 'right', fontFamily: 'Barlow-Bold', paddingRight: 50 }}>0</Text></View>
          <View style={{ flexDirection: 'row', alignItems: 'stretch' }} ><Text style={{ flex: .7, color: 'white', textAlign: 'left', fontFamily: 'Barlow-Bold', paddingHorizontal: 30, }}>Media</Text><Text style={{ flex: .3, color: 'skyblue', textAlign: 'right', fontFamily: 'Barlow-Bold', paddingRight: 50 }}>See All</Text></View>
          <View style={{ height: 80, marginHorizontal: 30, marginTop: 20, flexDirection: 'row' }}>
 
                <View style={{ backgroundColor: 'grey', width: 60, height: 60, marginRight:10, borderRadius:7 }}>
                    
                </View>
                <View style={{ backgroundColor: 'gray', width: 60, height: 60, marginRight:10 ,borderRadius:7 }}>
                    
                    </View>
                    <View style={{ backgroundColor: 'gray', width: 60, height: 60, marginRight:10,borderRadius:7 }}>
                    
                    </View>
                    <View style={{ backgroundColor: 'grey', width: 60, height: 60 , marginRight:10,borderRadius:7 }}>
                    
                    </View>
                    <View style={{ backgroundColor: 'gray', width: 60, height: 60 , borderRadius:7  }}>
                    
                    </View>

          </View>
          <View style={{ paddingVertical: 20, flexDirection: 'row', alignItems: 'stretch' }} ><Text style={{ flex: .7, color: 'white', textAlign: 'left', fontFamily: 'Barlow-Bold', paddingHorizontal: 30, }}>Docs</Text><Text style={{ flex: .3, color: 'skyblue', textAlign: 'right', fontFamily: 'Barlow-Bold', paddingRight: 50 }}>0&nbsp;&nbsp;&nbsp;&nbsp;See All</Text></View>
          <View style={{ flexDirection: 'row', alignItems: 'stretch' }} ><Text style={{ flex: .7, color: 'white', textAlign: 'left', fontFamily: 'Barlow-Bold', paddingHorizontal: 30, }}>Links</Text><Text style={{ flex: .3, color: 'skyblue', textAlign: 'right', fontFamily: 'Barlow-Bold', paddingRight: 50 }}>0&nbsp;&nbsp;&nbsp;&nbsp;See All</Text></View>
        </View>
        <View style={{ justifyContent: 'space-between', padding: 20 }} >
          <TouchableOpacity onPress={() => alert('report')}><Text style={{ color: 'white', justifyContent: 'center', textAlign: 'center', fontFamily: 'Barlow-Bold', fontSize: 15, paddingBottom: 10 }} >Report</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => alert('Block')}><Text style={{ color: 'white', justifyContent: 'center', textAlign: 'center', fontFamily: 'Barlow-Bold', fontSize: 15 }} >Block Account</Text></TouchableOpacity>
        </View>
      </View>
      </>
    );
  }
}

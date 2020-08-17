import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, StatusBar, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class CallLog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deletion:false
    }
  }
handellongpress(){
    if(this.state.deletion==false){
        this.setState({deletion:true})
    }
  }
  handelpress(){

  }
  render() {
    return (
      <View style={{ flex: 1 , backgroundColor:'white'}}>
        <StatusBar backgroundColor='#05375A' />
        <View style={{ height: Math.round(Dimensions.get('window').height) / 18, backgroundColor: '#05375a', flexDirection: 'row' }}>
          <View style={{ flex: .1, justifyContent: 'center', alignItems: 'center', paddingLeft: 10 }}>
            <MaterialCommunityIcons name='keyboard-backspace' color='white' size={20} onPress={() => this.props.navigation.navigate('Home')} />
          </View>
          <View style={{ justifyContent: 'center' }}>
            <Text style={{ color: 'white', paddingLeft: 30, fontSize: 20, fontFamily: 'Barlow-Bold' }}>Call Log</Text>
          </View>
        </View>
        <View style={{ flex: 1 }}>

          <FlatList
            data={[{ key: '1', name: 'ios-videocam', icon:'call-made' }, { key: '2', name: 'ios-videocam',icon:'call-received' }, { key: '3', name: 'ios-call',icon:'call-missed' }, { key: '4', name:  'ios-call', icon:'call-missed-outgoing' }, { key: '5', name:  'ios-call',icon:'call-received' }, { key: '6', name:  'ios-videocam' ,icon:'call-received'}, { key: '7', name:  'ios-call',icon:'call-received' }, { key: '8', name:  'ios-call' ,icon:'call-received'}, { key: '9', name:  'ios-call' ,icon:'call-received'}, { key: '10', name:  'ios-videocam' ,icon:'call-received'}, { key: '11', name: 'ios-call',icon:'call-received' }, { key: '12', name:  'ios-videocam',icon:'call-received' }]}
            renderItem={({ item }) => <TouchableOpacity activeOpacity={.9}  onLongPress={() => this.handellongpress()} onPress={() => this.handelpress()}
              style={{ flex: 1, flexDirection: 'row', paddingTop: 7, backgroundColor:'white' }} >
              <View style={{ flex: .2 }}>
                <Image
                  style={{ borderRadius: 50, marginLeft: 14, width: 55, height: 55 }}
                  source={require('../assets/user.png')}

                />
              </View>
              <View></View>
              <View style={{ flex: .6, paddingBottom: 10, borderBottomWidth: .2, borderBottomColor: '#6666', marginTop: 1 }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <View style={{ flex: .8 }}>
                    <Text style={{ fontSize: 17, paddingTop: 3, fontFamily: 'Barlow-Bold' }}>Himmat</Text>
                  </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ paddingTop: 7, paddingRight: 8 }}>
                      <Icon
                        color="#C30015"
                        name={item.icon}
                        size={15}
                      />
                    </View>
                    <View><Text style={{ color: '#989898', paddingTop: 2 }}>
                      10 minutes ago
                    </Text></View>
                  </View>
                </View>
              </View>
              <View style={{ flex: .2, alignItems: 'flex-end', justifyContent: 'center', borderBottomWidth: .2, borderBottomColor: '#6666', marginTop: 1 }}>
              <Ionicons 
                name={item.name}
                size={30}
                color='#05375a' 
                style={{paddingRight:20}}
                onPress={()=>this.props.navigation.navigate('Voicecall')}
                />
              </View>
            </TouchableOpacity>}
          />
        </View>
      </View>
    );
  }
};

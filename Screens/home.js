import React, { Component } from 'react';
import { View, Text, Button, StatusBar, TouchableOpacity } from 'react-native';
import { Tabs, Tab, TabHeading, Container, Header, ScrollableTab,StyleProvider } from 'native-base';
import Chats from './chats';

import Icon from 'react-native-vector-icons/MaterialIcons';
import General from './general';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  render() {

    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor='#05375A' />
        {/* upperpartoftab */}
        <View style={{ backgroundColor: '#05375A', height:70 }} >
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: .8 }}>
              <Text style={{ textAlign: 'left', paddingHorizontal: 20, color: 'white', fontSize: 22, fontFamily: 'Barlow-Bold' }}>ChatApp</Text>
            </View>
            <View style={{ flex: .1 }}>
              <Icon
                onPress={() => alert('Coming soon..')}
                name='search'
                color='white'
                size={25}
              />
            </View>
            <View style={{ flex: .1, justifyContent: 'flex-end' }}>
              <Icon
                onPress={() => this.props.navigation.navigate('CallLog')}
                name='phone'
                color='white'
                size={22}
              />
            </View>
            <View style={{ flex: .1, justifyContent: 'flex-end' }}>
              <Icon
                onPress={() => this.props.navigation.navigate('Contacts')}
                name='contacts'
                color='white'
                size={22}
              />
            </View>
          </View>
        </View>
        <View style={{ flex:1 ,backgroundColor:'#05375A'}}>

          {/* <TabHeading style={{ }} ><Text style={{color:'white', fontFamily:'Barlow-Bold'}}>Personal</Text></TabHeading> */}
          {/* <Container style={{backgroundColor:'#05375A'}} > */}
            {/*to off  Swipe gestures use locked={true} */}
            <Tabs  locked={true} tabBarUnderlineStyle={{ backgroundColor: 'transparent' }} tabContainerStyle={{backgroundColor:'#05375A',elevation:0}} >
              <Tab  tabStyle={{marginLeft:80, borderBottomLeftRadius: 30, borderTopLeftRadius: 30, backgroundColor:'#6a879b' ,  }} activeTabStyle={{ marginLeft:80,borderBottomLeftRadius: 30, borderTopLeftRadius: 30, backgroundColor: 'grey' }} activeTextStyle={{color:'white'}} textStyle={{color:'white'}} heading={'Personal'} >
                <Chats {...this.props} />
              </Tab>
              <Tab  tabStyle={{marginRight:80, borderBottomRightRadius: 30, borderTopRightRadius: 30,backgroundColor:'#6a879b', }} activeTabStyle={{ marginRight:80, borderBottomRightRadius: 30, borderTopRightRadius: 30, backgroundColor: 'grey' }} activeTextStyle={{color:'white'}} textStyle={{color:'white'}} heading={'General'}>
                <General {...this.props} />
              </Tab>
            </Tabs>
{/*    
          </Container> */}

        </View>

      </View>

    );
  }

}

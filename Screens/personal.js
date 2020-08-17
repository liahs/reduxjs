
import React, { Component } from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  View, Content, Item, Input,
  Text,
  StatusBar,
  FlatList,
  ListItem,
  TouchableOpacity,
  TextInput
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      message: '',
      height:0
    }
  }
  handelChange(text) {
    this.setState({
      value: text
    })
  }
  sendMessage() {
    this.setState({ message: this.state.value })
  }
  render() {
    return (

      <View style={{ flex: 1 }}>
        <View style={{ height: Math.round(Dimensions.get('window').height) / 14, backgroundColor: '#05375A', }}>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: .2, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginLeft: 10 }}>
              <Icon
                name='arrow-back'
                color='white'
                size={25}
                onPress={() => {
                  this.props.navigation.navigate('Home')
                }}
              />
              <Image
                style={{ borderRadius: 50, marginLeft: 4, backgroundColor: 'red', width: 35, height: 35 }}
                source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
              />
            </View>
            <View style={{ flex: .6 }}>
              <Text style={{ textAlign: 'left', paddingHorizontal: 20, color: 'white', fontSize: 22, fontWeight: '700' }}>Himmat</Text>
            </View>
            <View style={{ flex: .1, padding: 5 }}>
              <Icon
                name='video-call'
                color='white'
                size={27}
              />
            </View>
            <View style={{ flex: .1, padding: 5 }}>
              <Icon
                name='call'
                color='white'
                size={27}
              />
            </View>

            <View style={{ flex: .1, justifyContent: 'flex-end', padding: 10 }}>
              <Icon
                name='account-circle'
                color='white'
                size={27}
              />
            </View>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ flex: .9, padding: 10 }}>

            <View style={{ alignItems: 'flex-end', marginTop: 5, marginLeft: 40, marginBottom: 5 }}>
              <View style={{ backgroundColor: '#128c7e', borderRadius: 10 }}>
                <Text style={{ fontSize: 16, color: 'white', padding:5 }}>{this.state.message}</Text>
                <Text style={{ fontSize: 10, color: 'white', marginRight: 10, marginBottom: 5, textAlign:'right',paddingHorizontal:10 , justifyContent:'center' }}>11:23 PM   {'Sent'}    
                </Text>
              </View>
            </View>
            <View style={{ alignItems: 'flex-start', marginTop: 5, marginRight: 40, marginBottom: 5 }}>
        <View style={{ backgroundColor: '#05375A', borderRadius: 10 }}>
        <Text style={{ fontSize: 16, color: 'white', padding: 5, elevation: 1,  }}>{this.state.message}</Text>
        <Text style={{ fontSize: 10, color: 'white', marginLeft: 10, marginBottom: 5 ,paddingHorizontal:10,textAlign: 'right' }}>00:25 PM</Text>
        </View>
      </View>
          </View>
          <View style={{ flex: .1, alignContent: 'flex-end', marginBottom: 7, flexDirection: 'row' }}>
            <View style={{ flex: 1, justifyContent: 'flex-end', paddingLeft: 10 }}>
              <TextInput
              multiline={true}
                style={{ }}
                onChangeText={(text) => this.setState({
                  value: text
                })}
                onContentSizeChange={(event) => 
                  this.setState({ height:event.nativeEvent.contentSize.height})
                  // storing the content text height to height state
              }
              style={[styles.textInputStyle, {
                height: Math.min(120, Math.max(35, this.state.height))
                //passing content text height to textinput height by setting height limintation between 35 to 120px
              }]}
              />
            </View>
            <TouchableOpacity style={{ flex: .2, justifyContent: 'flex-end' }} onPress={() => this.sendMessage()}>
              <Icon
                style={{ justifyContent: 'center', alignSelf: 'center', color: 'white', backgroundColor: '#05375A', borderRadius: 50, padding: 13 }}
                name="send"
                size={20}
              />
            </TouchableOpacity>
          </View>

        </View>

      </View>
    )
  };


}
const styles = StyleSheet.create({
  textInputStyle:{
    backgroundColor: 'white', borderRadius: 20, elevation: 5, padding: 11, fontSize: 18, borderRightWidth: 2, borderLeftWidth: 2
  }
});


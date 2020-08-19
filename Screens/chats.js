import React, { Component } from 'react';
import { View, ActivityIndicator,Text, TouchableOpacity, FlatList, StatusBar, Image } from 'react-native';
import { connect } from 'react-redux'
import { fetchChats } from '../src/features/chatSlice';
import AsyncStorage from '@react-native-community/async-storage';

import { fetchUsers, loadUsers } from '../src/features/userSlice';

const mapStateToProps = state => {
  return {
    chats: state.chats.chatlist,
    users: state.users.users
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchChatList: p => {
      dispatch(fetchChats(p));
    },
    fetchUsers: function () {
      dispatch(fetchUsers());
    },
  };
};


function formatAMPM(date) {
  let  hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  let strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

class Chats extends Component {
  constructor(props) {
    super(props);
    this.ip = ''
    this.state = {
      loading: true
    }
  }
  async componentDidMount() {
    this.ip = await AsyncStorage.getItem('ip_key')
    this.props.fetchUsers()
    this.props.fetchChatList(this.ip)
    this.setState({ loading: false })
    // console.log("Chats",this.props.chats)
    // console.log("Users",this.props.users)
  }
  render() {
    if (this.state.loading || this.props.users.length<=0) {
      return (
      <View style={{flex:1,backgroundColor:'#05375A',justifyContent:'center',alignItems:'center'}}>
       <ActivityIndicator size="large" color="white" />
      </View>)
    }
    return (
      <View style={{ flex: 1, backgroundColor: '#05375A', paddingTop: 10 }}>
        <StatusBar backgroundColor='#05375A' />
        <View style={{ flex: 1 }}>
          <FlatList
            keyExtractor={x => x._id}
            data={this.props.chats}
            renderItem={({ item }) => {
              const p2 = item.participants.find(x => x != this.ip)
              const username = this.props.users.find(x => x.uid == p2).username
              const lastconverstation = item.conversation[item.conversation.length - 1]
              const lmessage = lastconverstation.txt
              const time = formatAMPM(new Date(lastconverstation.created_at))
              // console.log(lmessage)
              return (<TouchableOpacity onPress={() => this.props.navigation.navigate('Chat', {
                uid: p2,
                username: username
              })} style={{ height: 65, backgroundColor: 'white', borderRadius: 35, marginHorizontal: 20, marginTop: 10, flexDirection: 'row', elevation: 20, flex: 1 }}>
                <View style={{ flex: .2, justifyContent: 'center', alignItems: 'center' }}>
                  <Image
                    source={require('../assets/user.png')}
                    style={{ width: 50, height: 50 }}
                  />
                </View>
                <View style={{ flex: .6 }}>
                  <View style={{ flex: .8, paddingTop: 3 }}>
                    <Text style={{ color: '#1b7b7a', fontSize: 17, paddingLeft: 15, fontFamily: 'Barlow-Bold' }}>{username}</Text>
                  </View>
                  <View style={{ flex: 1.2, paddingTop: 12, justifyContent: 'flex-start' }}>
                    <Text style={{ color: 'black', paddingLeft: 15, fontWeight: '900' }}>{lmessage}</Text>
                  </View>
                </View>
                <View style={{ flex: .3 }}>
                  <View style={{ flex: .7, paddingTop: 15 }}>
                    <Text style={{ fontSize: 10, alignSelf: 'flex-start', fontFamily: 'Barlow-SemiBold', color: '#808B96', paddingLeft: 24 }}>{time}</Text>
                  </View>
                  <View style={{ flex: 1.3, justifyContent: 'flex-start' }}>
                    <View style={{ width: 20, height: 20, backgroundColor: '#FF5733', borderRadius: 10, alignSelf: 'flex-start', marginLeft: 39, paddingTop: 0, marginTop: 1, justifyContent: 'center', alignItems: 'center' }}>
                      <Text style={{ justifyContent: 'center', color: 'white', textAlign: 'center', fontSize: 11 }}>{item.key}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>)
            }
            }
          />

        </View>

      </View>
    );
  }

}

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chats)

export default ChatContainer
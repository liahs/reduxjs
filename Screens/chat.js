import {MenuProvider} from 'react-native-popup-menu';
import React, {Component} from 'react';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

import Modal from 'react-native-modal';
import {
  Dimensions,
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';

import MIcon from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// import AnimateMic and SendRecord
import SendRecord from '../Components/SendRecord';
import AnimateMic from '../Components/animateMic'; // neccessarry

// socket connection

import io from 'socket.io-client';

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      height: 0,
      sent: 'microphone',
      NotificationStatus: 'Mute Notifications',
      record: 'initial', //needed state  for handling recording view and textinput view
      modalVisible: false,
      datas: [],
      refresh: true,
      n: 10,
      msgs: 'waiting',
      delmodal: false,
      delId: 0,
    };
    this.sender = 'shailen';
    this.receiver = 'himmat';
    this.socket = io('http://192.168.43.35:3000');
  }
  async componentDidMount() {
    const data = await this.loadData();
    this.setState({datas: data, refresh: false});
    this.socket.on('msgAdded', async () => {
      const data = await this.loadData();
      this.setState({datas: data, value: '', refresh: false, msgs: ''});
    });
  }
  async loadData() {
    const res = await fetch(
      'http://192.168.43.35:3000/showChat/' +
        this.sender +
        '/' +
        this.receiver +
        '/' +
        this.state.n,
    );
    const data = await res.json();
    return data;
  }

  async refreshList() {
    this.setState(state => {
      return {n: state.n + 2};
    });
    const datas = await this.loadData();
    this.setState({datas: datas, value: '', refresh: false});
  }
  // Add To list
  addToList() {
    if (this.state.value.length > 0) {
      fetch('http://192.168.43.35:3000/updateChatList', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sender: this.sender,
          message: this.state.value,
          receiver: this.receiver,
        }),
      }).then(res => console.log('successfully added'));
      this.setState({msgs: 'waiting'});
      this.socket.emit('msgAdded');
    }
  }

  // Handle bottom textInput views between recording and simple text input
  handleTextView(txt) {
    this.setState({record: txt});
  }

  setModalVisible = visible => {
    this.setState({modalVisible: visible});
  };
  async hideMsg() {
    const res = await fetch('http://192.168.43.35:3000/delMessage', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sender: this.sender,
        id: this.state.delId,
        receiver: this.receiver,
        n: this.state.n,
      }),
    });
    const datas = await res.json();
    this.setState({datas: datas, delmodal: false});
  }
  handelChange(text) {
    this.setState({
      value: text,
    });
    if (text.length == 0) {
      this.setState({sent: 'microphone'});
    } else {
      this.setState({sent: 'send'});
    }
  }
  sendMessage() {
    this.setState({message: this.state.value});
  }
  Notification() {
    if (this.state.NotificationStatus == 'Mute Notifications') {
      this.setState({NotificationStatus: 'Unmute Notifications'});
    } else {
      this.setState({NotificationStatus: 'Mute Notifications'});
    }
  }
  renderItem({item}) {
    const time = new Date(item.created_at);
    if (item.visible) {
      return (
        <>
          {item.sender == this.sender ? (
            <TouchableOpacity
              onLongPress={() =>
                this.setState({delmodal: true, delId: item._id})
              }
              style={{
                alignItems: 'flex-end',
                marginTop: 5,
                marginLeft: 50,
                marginBottom: 15,
              }}>
              <View style={{backgroundColor: '#05375a75', borderRadius: 10}}>
                <Text style={{fontSize: 16, color: 'black', padding: 10}}>
                  {item.txt}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    paddingHorizontal: 7,
                    alignSelf: 'flex-end',
                  }}>
                  <Text
                    style={{
                      fontSize: 10,
                      color: 'white',
                      marginBottom: 5,
                      textAlign: 'right',
                      paddingRight: 5,
                      justifyContent: 'center',
                      fontFamily: 'Barlow-Regular',
                    }}>
                    {time.getHours()}:{time.getMinutes()}
                  </Text>
                  <FontAwesome
                    style={{
                      justifyContent: 'center',
                      alignSelf: 'flex-start',
                      padding: 1,
                    }}
                    name={
                      this.state.msgs === 'waiting' ? 'clock-o' : 'envelope'
                    }
                    color="white"
                  />
                </View>
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onLongPress={() => console.log('hello')}
              style={{
                alignItems: 'flex-start',
                marginTop: 5,
                marginRight: 80,
                marginBottom: 8,
                flexDirection: 'row',
              }}>
              <Image
                source={require('../assets/user.png')}
                style={{width: 50, height: 50, alignSelf: 'flex-end'}}
              />
              <View style={{backgroundColor: '#DCDCDC', borderRadius: 10}}>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#05375a',
                    padding: 10,
                    elevation: 1,
                  }}>
                  {item.txt}
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    color: '#05375a',
                    marginLeft: 10,
                    marginBottom: 5,
                    paddingHorizontal: 10,
                    textAlign: 'right',
                    fontFamily: 'Barlow-Regular',
                  }}>
                  {time.getHours()}:{time.getMinutes()}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        </>
      );
    } else {
      return null;
    }
  }
  render() {
    return (
      <MenuProvider>
        {/* You can place modal anywhere  by shailen */}
        <Modal
          isVisible={this.state.delmodal}
          backdropOpacity={0}
          animationIn="fadeIn"
          animationOut="fadeOut"
          onBackdropPress={() => this.setState({delmodal: false})}>
          <View
            style={{
              padding: 10,
              position: 'absolute',
              top: -30,
              width: Dimensions.get('window').width,
              backgroundColor: '#fff',
              height: 70,
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <AntDesign
              name="back"
              color="#05375a"
              size={20}
              onPress={() => this.setState({delmodal: false})}
            />
            <TouchableOpacity style={{paddingHorizontal: 20}}>
              <MIcon name="delete" size={24} onPress={() => this.hideMsg()} />
            </TouchableOpacity>
          </View>
        </Modal>
        {/*media modal */}
        <Modal
          transparent={true}
          isVisible={this.state.modalVisible}
          backdropOpacity={0}
          animationIn="slideInDown"
          animationOut="slideOutUp"
          onBackdropPress={() => this.setModalVisible(false)}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 10,
                  backgroundColor: '#185abc',
                  borderRadius: 80,
                  width: 50,
                  height: 50,
                }}>
                <FontAwesome
                  name="location-arrow"
                  size={25}
                  color="white"></FontAwesome>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  marginTop: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 10,
                  backgroundColor: '#d80120',
                  borderRadius: 80,
                  width: 50,
                  height: 50,
                }}>
                <MaterialCommunityIcons
                  name="headphones"
                  size={25}
                  color="white"
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  marginTop: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 10,
                  backgroundColor: '#581845',
                  borderRadius: 80,
                  width: 50,
                  height: 50,
                }}>
                <FontAwesome5
                  name="file"
                  size={25}
                  color="white"
                  backgroundColor="white"
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  marginTop: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 10,
                  backgroundColor: '#b9770e',
                  borderRadius: 80,
                  width: 50,
                  height: 50,
                }}>
                <MIcon
                  name="photo-library"
                  size={25}
                  color="white"
                  backgroundColor="white"
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  marginTop: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 10,
                  backgroundColor: '#05375a',
                  borderRadius: 80,
                  width: 50,
                  height: 50,
                }}>
                <MIcon
                  name="contact-mail"
                  size={25}
                  color="white"
                  backgroundColor="white"
                />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <View
            style={{
              height: Math.round(Dimensions.get('window').height) / 18,
              backgroundColor: 'white',
              flexDirection: 'row',
              paddingTop: 15,
            }}>
            <View style={{flex: 0.1, justifyContent: 'center', padding: 10}}>
              <AntDesign
                name="back"
                color="#05375a"
                size={20}
                onPress={() => this.props.navigation.navigate('Home')}
              />
            </View>
            <View
              style={{
                flex: 0.6,
                alignItems: 'center',
                justifyContent: 'flex-start',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  fontFamily: 'Barlow-Bold',
                  color: '#05375a',
                  paddingHorizontal: 2,
                  fontSize: 15,
                }}
                onPress={() => {
                  this.props.navigation.navigate('Chatprofile');
                }}>
                Himmat
              </Text>
            </View>
            <View
              style={{
                flex: 0.1,
                justifyContent: 'center',
                padding: 10,
                alignItems: 'flex-end',
              }}>
              <MIcon name="videocam" color="#05375a" size={24} />
            </View>
            <View
              style={{
                flex: 0.1,
                justifyContent: 'center',
                padding: 5,
                alignItems: 'flex-end',
              }}>
              <MIcon name="call" color="#05375a" size={24} />
            </View>
            <View
              style={{
                flex: 0.1,
                justifyContent: 'center',
                alignItems: 'flex-end',
                padding: 7,
              }}>
              <Menu style={{backgroundColor: 'white'}}>
                <MenuTrigger>
                  <Entypo
                    name="dots-three-vertical"
                    color="#05375a"
                    size={20}
                  />
                </MenuTrigger>
                <MenuOptions
                  customStyles={{
                    optionsContainer: {
                      paddingLeft: 10,
                      paddingVertical: 5,
                      width: 150,
                      borderBottomStartRadius: 15,
                      borderBottomEndRadius: 15,
                    },
                  }}>
                  <View style={{borderRadius: 20}}>
                    <MenuOption onSelect={() => alert(`Save`)}>
                      <Text style={{color: 'black', fontWeight: 'bold'}}>
                        View Profile
                      </Text>
                    </MenuOption>
                    <MenuOption onSelect={() => alert(`Save`)}>
                      <Text style={{color: 'black', fontWeight: 'bold'}}>
                        Search
                      </Text>
                    </MenuOption>
                    <MenuOption onSelect={() => alert(`Save`)}>
                      <Text style={{color: 'black', fontWeight: 'bold'}}>
                        Report
                      </Text>
                    </MenuOption>
                    <MenuOption onSelect={() => alert(`Save`)}>
                      <Text style={{color: 'black', fontWeight: 'bold'}}>
                        Block
                      </Text>
                    </MenuOption>
                    <MenuOption onSelect={() => this.Notification()}>
                      <Text style={{color: 'black', fontWeight: 'bold'}}>
                        {this.state.NotificationStatus}
                      </Text>
                    </MenuOption>
                    <MenuOption onSelect={() => alert(`Save`)}>
                      <Text style={{color: 'black', fontWeight: 'bold'}}>
                        Clear Chat
                      </Text>
                    </MenuOption>
                  </View>
                </MenuOptions>
              </Menu>
            </View>
          </View>
          <View style={{flex: 1}}>
            <View
              style={{
                flex: 1,
                padding: 10,
                justifyContent: 'flex-end',
                paddingBottom: 20,
                marginBottom: 10,
              }}>
              <FlatList
                style={styles.container}
                ref="flatList"
                data={this.state.datas}
                renderItem={x => this.renderItem(x)}
                keyExtractor={item => item._id}
                onRefresh={() => this.refreshList()}
                refreshing={this.state.refresh}
                onLayout={() =>
                  this.refs.flatList.scrollToEnd({animated: true})
                }
              />
              {/* */}
            </View>
          </View>
          {/* Replace With this in before view for bottom textinput */}
          {/* Edited Again copy and paste it to the previous and also do not miss the above Modal */}
          {this.state.record !== 'sendVoice' ? (
            <View
              style={{
                flex: 0.07,
                alignItems: 'center',
                flexDirection: 'row',
                alignSelf: 'flex-end',
                marginBottom: 10,
              }}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingLeft: 15,
                  paddingRight: 10,
                }}>
                {this.state.record == 'initial' ? (
                  <Fontisto name="smiley" size={20} />
                ) : (
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <MIcon name="delete" size={20} />
                    <Text style={{color: 'red', fontSize: 16, paddingLeft: 20}}>
                      00:12
                    </Text>
                  </View>
                )}
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                  backgroundColor:
                    this.state.record === 'initial' ? '#DCDCDC' : 'white',
                  borderRadius: 20,
                  marginBottom: 8,
                  justifyContent: 'center',
                }}>
                {this.state.record == 'initial' ? (
                  <TextInput
                    placeholder="Type here"
                    multiline={true}
                    numberOfLines={3}
                    value={this.state.value}
                    onChangeText={text => this.handelChange(text)}
                    onContentSizeChange={
                      event =>
                        this.setState({
                          height: event.nativeEvent.contentSize.height,
                        })
                      // storing the content text height to height state
                    }
                    style={[
                      styles.textInputStyle,
                      {
                        height: Math.min(80, Math.max(35, this.state.height)),
                        //passing content text height to textinput height by setting height limintation between 35 to 120px
                      },
                    ]}
                  />
                ) : (
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingTop: 5,
                    }}>
                    <MIcon name="keyboard-arrow-left" />
                    <MIcon name="keyboard-arrow-left" />
                    <Text style={{fontSize: 16, color: 'grey', paddingLeft: 5}}>
                      Slide to cancel
                    </Text>
                  </View>
                )}
                {this.state.sent === 'send' ? (
                  <FontAwesome
                    name={this.state.sent}
                    size={20}
                    style={{paddingHorizontal: 15, paddingVertical: 10}}
                    onPress={() => this.addToList()}
                  />
                ) : (
                  <AnimateMic
                    handleTextView={txt => this.handleTextView(txt)}
                  />
                )}
              </View>
              {this.state.record === 'initial' ? (
                <>
                  <View
                    style={{
                      flex: 0.1,
                      alignItems: 'flex-end',
                      padding: 10,
                      paddingTop: 0,
                    }}>
                    <Fontisto name="camera" size={20} />
                  </View>
                  <TouchableOpacity
                    onPress={() =>
                      this.setModalVisible(!this.state.modalVisible)
                    }
                    style={{
                      flex: 0.1,
                      alignItems: 'flex-end',
                      paddingRight: 20,
                      paddingTop: 0,
                      marginBottom: 5,
                      zIndex: 5,
                    }}>
                    <AntDesign name="paperclip" size={20} />
                  </TouchableOpacity>
                </>
              ) : (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    paddingRight: 20,
                  }}>
                  <MIcon name="keyboard-arrow-right" />
                  <MIcon name="keyboard-arrow-right" />
                  <MIcon name="keyboard-arrow-right" />
                  <MIcon name="keyboard-arrow-right" />
                  <MIcon name="keyboard-arrow-right" />
                  <MIcon name="lock" size={20} />
                </View>
              )}
            </View>
          ) : (
            <SendRecord
              handleTextView={txt => {
                this.handleTextView(txt);
              }}
            />
          )}
          {/* from top comment upto here needed */}
        </View>
      </MenuProvider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInputStyle: {
    flex: 1,
    paddingLeft: 15,
  },

  // modal styles
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginRight: -10,
  },
  modalView: {
    height: 300,
    backgroundColor: 'transparent',
    borderRadius: 20,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

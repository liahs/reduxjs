import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import VideoOngoing from './Screens/VideocallOngoing';

import VideoCalling from './Screens/VideoCalling';
import VideoIncoming from './Screens/VideoIncoming';
import ChatProfile from './Screens/chatprofile';
import Chat from './Screens/chat';
import VoiceRecording from './Components/VoiceRecording';
import SendRecord from './Components/SendRecord';
import Home from './Screens/home';
import LocationScreen from './Screens/LocationScreen';
import Message from './Components/Message';
import Filter from './mankhal/filter';
class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Chat />
      </View>
    );
  }
}

export default App;

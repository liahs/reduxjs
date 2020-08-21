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
import MyContacts from './Screens/contacts';
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
import {NetworkInfo} from 'react-native-network-info';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
//redux store
import store from './src/store';
//react-redux
import {Provider} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
// import io from 'socket.io-client'
// import {SocketProvider} from './src/createSocketContext'

class App extends React.Component {
  
  async componentDidMount() {
    //user create uatomatically
    const ip = await AsyncStorage.getItem('ip_key');
    if (!ip) {
      const ipAddress = await NetworkInfo.getIPV4Address();
      await AsyncStorage.setItem('ip_key', ipAddress);
      await fetch(`http://192.168.43.35:5000/addUser/${ipAddress}`);
      console.log('User Added ');
    } else {
      console.log(ip);
    }
    
  }
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}
const Navigator = createStackNavigator(
  {
    Home,
    MyContacts,
    Chat,
  },
  {
    headerMode: 'none',
    unmountInactiveRoutes: true,
  },
);

const MainNavigator = createAppContainer(Navigator);

export default App;

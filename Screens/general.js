import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Request from './requests';
import Chats  from './chats';
export default class General extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1, paddingTop:10, backgroundColor:'#05375A'}}>
        <Request {...this.props}/>
        <Chats {...this.props}/>
      </View>
    );
  }
}

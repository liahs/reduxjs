import React, { Component } from 'react'
import { View, Switch, StyleSheet } from 'react-native'
export default SwitchExample = (props) => {
   return (
      <View style={{flex:1}}>
         <Switch
         thumbColor='skyblue'
         onValueChange = {props.toggleSwitch1}
         value = {props.switch1Value}/>
      </View>
   )
}

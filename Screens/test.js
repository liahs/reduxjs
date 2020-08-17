import React, { useState } from "react";
import { Animated, PanResponder, StyleSheet, View } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const DraggableView = (props) => {
  const pan = useState(new Animated.ValueXY())[0];
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => {
        props.visible()
        return true
    },
    onPanResponderMove: (e,g)=>{
        
        if(g.dx<100 && g.dx>-100){
            pan.x.setValue(g.dx)
        }
        
    },
    
    onPanResponderRelease: (e,g) => {
    props.visible()
    if(g.dx<-100){
        props.navigation.navigate('Chat')
    }

    if(g.dx>100){
        props.navigation.navigate('CallLog')
    }
    
      Animated.spring(
        pan, // Auto-multiplexed
        { toValue: { x: 0, y: 0 },
        
     } // Back to zero
      ).start();
    },
  });
  
  
  return (
    <View style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[pan.getLayout()]}
      > 
          <MaterialCommunityIcons
                  name="phone-in-talk"
                  style={{ backgroundColor: '#D68910', padding: 15, borderRadius: 100 , zIndex:0 }}
                  size={40}
                  color='#05375A'
                //   onPress={() => this.props.navigation.navigate('CallLog')}
                />
      </Animated.View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    backgroundColor: "#61dafb",
    width: 80,
    height: 80,
    borderRadius: 4,
  },
});
export default DraggableView;
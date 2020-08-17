import React, { useState } from "react";
import { Animated, PanResponder, Pressable, Dimensions } from "react-native";

import MIcon from 'react-native-vector-icons/MaterialIcons';
const DraggableView = (props) => {
  const [color,setColor]=useState('black')
  const [size,setSize]=useState(20)
  const [bc,setBc]=useState('transaparent')
  const pan = useState(new Animated.ValueXY())[0];
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => {
      props.handleTextView('recording')
      setColor('red')
      setSize(25)
      setBc('rgba(0,0,0,0.1)')

      return true
    },
    onPanResponderMove: (e, g) => {
   
      if (g.dx < Dimensions.get('window').width / 3 && g.dx > -Dimensions.get('window').width + 180) {
        pan.x.setValue(g.dx)
      }
      if (g.dx < -100) {
        props.handleTextView('initial')
      }
      if (g.dx > 50) {
        props.handleTextView('sendVoice')
      }
    },
 
    onPanResponderRelease: (e, g) => {
      // if(g.dx){
      //   props.handleTextView()
      // }
      setSize(20)
      setColor('black')
      setBc('transparent')

      props.handleTextView('initial')
      pan.flattenOffset();
      pan.x.setValue(0)
    }
  });
  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={{transform: [{ translateX: pan.x }, { translateY: pan.y }], justifyContent: 'center', alignItems: 'center', backgroundColor:bc , borderRadius: 16, height: 40, width: 60, translateX: pan.getTranslateTransform()[0].translateX }}
    >
    <MIcon name="mic" size={size} color={color} />
    </Animated.View>
  );
};

export default DraggableView;
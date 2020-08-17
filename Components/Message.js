import React from 'react'
import {Text,View,TextInput,TouchableOpacity,} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Fontisto from "react-native-vector-icons/Fontisto";
import AnimateMic from './animateMic'
import MIcon from 'react-native-vector-icons/MaterialIcons';
import SendRecord from './SendRecord'
class Message extends React.Component{
    constructor(props){
        super(props)
        this.state={
            sent:'microphone'
            ,record:'initial'
        }
    }
    handleTextView(txt) {
        this.setState({ record: txt })
      }
    
    handelChange(text) {
        this.setState({
          value: text
        })
        if (text.length == 0) {
          this.setState({ sent: 'microphone' })
        }
        else {
          this.setState({ sent: 'send' })
        }
      }
    render(){
        return(
            <>
           { this.state.record!=='sendVoice'?<View style={{ height:100,alignItems: 'center', flexDirection: 'row', alignSelf: 'flex-end', marginBottom: 10 }}>
            <View style={{alignItems: 'flex-start', paddingLeft: 15, paddingRight: 10 }}>
              {this.state.record=='initial'?<Fontisto name="smiley" size={20} />:
              <View style={{flexDirection:'row'}}>
              <MIcon name="delete" size={20} />
              <Text style={{color:'red',fontSize:16,paddingLeft:20}}>00:12</Text>
             </View>
              }
            </View>
            <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row', backgroundColor: this.state.record==='initial'?'#DCDCDC':'white', borderRadius: 20, marginBottom: 8, justifyContent: 'center' }}>
              {this.state.record=='initial'?<TextInput
              placeholder='type here'
              onChange={(txt)=>this.handelChange(txt)}
              style={{flex:1,paddingLeft:20}}
              />:<View style={{flex:1, flexDirection:'row' ,alignItems:'center'}}> 
              <MIcon name="keyboard-arrow-left"/>
              <MIcon name="keyboard-arrow-left"/>
              <Text style={{fontSize:16,color:'grey',paddingLeft:5}}>Slide to cancel</Text>
          </View>}
              {this.state.sent === 'send' ? 
              <FontAwesome name={this.state.sent} size={20} style={{ paddingHorizontal: 15, paddingVertical: 10 }}  /> 
              : <AnimateMic handleTextView={(txt)=>this.handleTextView(txt)}/>}
            </View>
            {this.state.record=='initial'?
            <View style={{flex:.3,flexDirection:'row',justifyContent:'space-between'}}>
            <View style={{ flex: 1, padding: 10, paddingTop: 0 }}>
              <Fontisto name="camera" size={20} />
            </View>
            <TouchableOpacity  style={{ flex: 1, paddingRight: 20, marginBottom: 5, zIndex: 5 }}>
              <AntDesign name="paperclip" size={20} />
            </TouchableOpacity>
            </View>:<View style={{flexDirection:'row',justifyContent:'flex-end',alignItems:'center',paddingRight:20}}>
            <MIcon name="keyboard-arrow-right"/>
            <MIcon name="keyboard-arrow-right"/>
            <MIcon name="keyboard-arrow-right"/>
            <MIcon name="keyboard-arrow-right"/>
            <MIcon name="keyboard-arrow-right"/>
            <MIcon name="lock" size={20}/>
        </View>}
          </View>
    :<SendRecord handleTextView={(txt)=>this.handleTextView(txt)}/>}
    </>
        )
    }
}

export default Message
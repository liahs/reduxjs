import React from 'react'
import { View, ImageBackground, Dimensions } from 'react-native'
import AIcon from 'react-native-vector-icons/AntDesign'
import IIcon from 'react-native-vector-icons/Ionicons'
import MIcon from 'react-native-vector-icons/MaterialIcons'
import FIcon from 'react-native-vector-icons/FontAwesome5'
import MIIcon from 'react-native-vector-icons/MaterialCommunityIcons'
export default class VideoOngoing extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground style={{ flex: 1, justifyContent: 'space-between' }} source={require('../assets/user.png')}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 40, marginHorizontal: 40 }}>
                        <AIcon name='caretup' size={20} />
                        <IIcon name="person-add" size={20} />
                    </View>
                    <View style={{ position: 'absolute', flexDirection: 'row', alignItems: 'center', left: Dimensions.get('window').width / 2 - 30, bottom: Dimensions.get('window').height / 5 }}>
                        <View style={{ height: 60, width: 60, backgroundColor: 'red', borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}><MIcon name="call-end" size={30} color="white"></MIcon></View>
                        <ImageBackground source={require('../assets/user.png')} style={{ marginLeft: 40, width: 110, height: 110 }} />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 80 }}>
                        <FIcon name='microphone-slash' size={20} />
                        <FIcon name='video-slash' size={20} />
                        <MIIcon name='camera-party-mode' size={20} />
                    </View>
                </ImageBackground>
            </View>
        )
    }
}
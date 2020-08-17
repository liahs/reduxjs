import React from 'react'
import { ScrollView, Dimensions, View,TextInput, Text, TouchableOpacity } from 'react-native'
import MICon from 'react-native-vector-icons/MaterialIcons'
import MapView, { Marker } from 'react-native-maps'

class LocationScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            region: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            flex: .4,
            search: false

        }
    }

    render() {
        return (<View style={{ flex: 1 }}>
            {!this.state.search ?
                <View style={{ height: 60, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15, backgroundColor: '#05375a' }}>
                    <View style={{ flex: 2, flexDirection: 'row', alignItems: 'center' }}>
                        <MICon name='arrow-back' size={24} color='white' />
                        <Text style={{ fontSize: 18, marginLeft: 30, color: 'white', fontWeight: 'bold' }}>Send Location</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                        <TouchableOpacity onPress={() => this.setState({ search: true })}>
                            <MICon name="search" size={24} style={{ marginRight: 20 }} color='white' />
                        </TouchableOpacity>
                        <MICon name="refresh" size={24} color='white' />
                    </View>
                </View>
                :
                <View style={{ height: 60, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, backgroundColor: 'white' }}>
                    <TouchableOpacity onPress={()=>this.setState({search:false})}>
                        <MICon name='arrow-back' size={24} />
                    </TouchableOpacity>
                    <TextInput underlineColorAndroid='white' autoFocus={true} style={{flex:1}}></TextInput>
                </View>
            }

            <View style={{ flex: this.state.flex, height: 300, backgroundColor: 'gray' }}>
                <MapView
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    style={{ flex: 1 }}
                >
                    <Marker
                        coordinate={this.state.region}
                        title='Dummy current location'
                    >
                    </Marker>
                </MapView>

            </View>
            <View style={{ position: 'absolute', width: Dimensions.get('window').width, top: 60, flexDirection: 'row', padding: 10, justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={() => this.setState(state => {
                    if (state.flex == 0.4) {
                        return { flex: 1 }
                    }
                    return { flex: 0.4 }
                })}
                    style={{ backgroundColor: 'rgba(255,255,255,.4)', borderRadius: 20, height: 40, width: 40, justifyContent: 'center', alignItems: 'center' }}>
                    <MICon name='fullscreen' size={24} color='rgba(0,0,0,0.6)' />
                </TouchableOpacity>
                <View style={{ backgroundColor: 'rgba(255,255,255,.4)', borderRadius: 20, height: 40, width: 40, justifyContent: 'center', alignItems: 'center' }}>
                    <MICon name='my-location' size={24} color='rgba(0,0,0,0.6)' />
                </View>

            </View>
            <View style={{ flex: .6, height: 300, backgroundColor: 'white' }}>
                <TouchableOpacity>
                    <View style={{ paddingLeft: 10, alignItems: 'center', height: 80, flexDirection: 'row', borderBottomColor: 'rgba(0,0,0,.1)', borderBottomWidth: 1 }}>
                        <View style={{ backgroundColor: '#05375a', borderRadius: 20, height: 40, width: 40, justifyContent: 'center', alignItems: 'center' }}>
                            <MICon name='location-on' size={24} color='white' />
                        </View>
                        <Text style={{ paddingLeft: 30, fontSize: 16 }}>Share Live Location</Text>
                    </View>
                </TouchableOpacity>
                <ScrollView style={{ padding: 10 }}>
                    <Text style={{ fontSize: 14, color: 'rgba(0,0,0,.5)' }}>Nearby places</Text>
                    <View style={{ alignItems: 'center', height: 80, flexDirection: 'row' }}>
                        <View style={{ backgroundColor: '#05375a', borderRadius: 20, height: 40, width: 40, justifyContent: 'center', alignItems: 'center' }}>
                            <MICon name='my-location' size={24} color='white' />
                        </View>
                        <View style={{ paddingLeft: 30 }}>
                            <Text style={{ fontSize: 16 }}>Send your current location</Text>
                            <Text style={{ fontSize: 14, color: 'rgba(0,0,0,.5)' }}>Accurate to 21 meters</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>

        </View>)
    }
}

export default LocationScreen
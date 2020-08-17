import React, { Component } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, Image } from 'react-native';
import Collapsible from 'react-native-collapsible'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Request extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: true,
            name: 'keyboard-arrow-right'
        };
    }
    col() {
        if (this.state.collapsed == false) {
            this.setState({ collapsed: true })
            this.setState({ name: 'keyboard-arrow-right' })
        }
        else {
            this.setState({ collapsed: false })
            this.setState({ name: 'keyboard-arrow-down' })
        }
    }
    render() {
        return (

            <View >
                <TouchableOpacity activeOpacity={1} onPress={() => this.col()} style={{ justifyContent: 'center', height: 40, paddingLeft:5, backgroundColor: '#05375A', flexDirection: 'row' }}>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center'  }}>
                    <View style={{ flex: .2, alignItems: 'center', justifyContent: 'center', paddingTop: 12 }}>
                            <Icon
                                name={this.state.name}
                                size={40}
                                color={'#D68910'}
                            />
                        </View>
                        <Text style={{ fontSize: 20, color: '#D68910' }}>Requests</Text>
                     
                        <View style={{ marginLeft: 10, width: 20, height: 20, backgroundColor: 'white', justifyContent: 'center', borderRadius: 20, alignItems: 'center', marginTop: 5 }}><Text style={{ textAlign: 'center', color: 'black', fontSize: 11 }}>2</Text></View>
                    </View>

                </TouchableOpacity>
                <Collapsible collapsed={this.state.collapsed}>
                    <View style={{ flex: 1, backgroundColor: '#05375A', justifyContent: 'center' }}>
                        <View style={{ flex: .8, borderRadius: 30, backgroundColor: '#D68910', margin: 17, paddingTop: 10, paddingBottom: 15 }}>
                            <FlatList
                                data={[{ a: '1' ,key:'1'}, { a: '3',key:'2' }]}
                                renderItem={(item) =>
                                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Chat')} style={{height:65 , backgroundColor:'white', borderRadius:35 , marginHorizontal:20 , marginTop:10 , flexDirection:'row', elevation:20, flex:1}}>
                                    <View style={{flex:.2 , justifyContent:'center',alignItems:'center'}}>
                                    <Image
                                    source={require('../assets/user.png')}
                                    style={{width:50, height:50}}
                                    />
                                    </View>
                                    <View style={{flex:.6}}>
                                                <View style={{flex:.8 , paddingTop:3}}>
                                                        <Text style={{color:'#1b7b7a',fontSize:17 , fontFamily:'Barlow-Bold', paddingLeft:15}}>Himmat</Text>
                                                </View>
                                                <View style={{flex:1.2 , paddingTop:12, justifyContent:'flex-start' }}>
                                                        <Text style={{color:'black' , paddingLeft:15 , fontWeight:'900' }}>Hello sir</Text>
                                                </View>
                                    </View>
                                    <View style={{flex:.3}}>
                                                <View style={{flex:.7,  paddingTop:15 }}>
                                                            <Text style={{fontSize:10 , alignSelf:'flex-start',fontFamily:'Barlow-SemiBold', color:'#808B96' , paddingLeft:24}}>10:10 PM</Text>
                                                </View>
                                                <View style={{flex:1.3,justifyContent:'flex-start'}}>
                                                    <View style={{width:20,height:20 , backgroundColor:'#FF5733', borderRadius:10 , alignSelf:'flex-start' , marginLeft:39 , paddingTop:0, marginTop:1 , justifyContent:'center', alignItems:'center' }}>
                            <Text style={{ justifyContent:'center' , color:'white' , textAlign:'center' , fontSize:11}}>{item.key}</Text>
                                                    </View>
                                    </View>
                                    </View>
                                            </TouchableOpacity>}
                            />
                        </View>
                    </View>
                </Collapsible>
            </View>
        );
    }
}

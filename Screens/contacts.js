import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    TextInput,
    SafeAreaView,
    Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AlphaScrollFlatList from 'alpha-scroll-flat-list';
const ITEM_HEIGHT = 45;
const DATA = [
    {
        id: '1',
        userName: 'AUser Name',
        FullName: 'Full Name',
    },
    {
        id: '2',
        userName: 'BUser Name',
        FullName: 'Full Name',
    },
    {
        id: '3',
        userName: 'CUser Name',
        FullName: 'Full Name',
    },
    {
        id: '4',
        userName: 'DUser Name',
        FullName: 'Full Name',
    },
    {
        id: '5',
        userName: 'EUser Name',
        FullName: 'Full Name',
    },
    {
        id: '6',
        userName: 'FUser Name',
        FullName: 'Full Name',
    },
    {
        id: '7',
        userName: 'GUser Name',
        FullName: 'Full Name',
    },
    {
        id: '8',
        userName: 'HUser Name',
        FullName: 'Full Name',
    },
    {
        id: '9',
        userName: 'IUser Name',
        FullName: 'Full Name',
    },
    {
        id: '10',
        userName: 'JUser Name',
        FullName: 'Full Name',
    },
    {
        id: '11',
        userName: 'KUser Name',
        FullName: 'Full Name',
    },
    {
        id: '12',
        userName: 'LUser Name',
        FullName: 'Full Name',
    },
    {
        id: '13',
        userName: 'MUser Name',
        FullName: 'Full Name',
    },
    {
        id: '14',
        userName: 'NUser Name',
        FullName: 'Full Name',
    },
    {
        id: '15',
        userName: 'OUser Name',
        FullName: 'Full Name',
    },
    {
        id: '16',
        userName: 'PUser Name',
        FullName: 'Full Name',
    },
    {
        id: '17',
        userName: 'QUser Name',
        FullName: 'Full Name',
    },
    {
        id: '18',
        userName: 'RUser Name',
        FullName: 'Full Name',
    },
    {
        id: '19',
        userName: 'SUser Name',
        FullName: 'Full Name',
    },
    {
        id: '20',
        userName: 'TUser Name',
        FullName: 'Full Name',
    },
];
export default class Contacts extends Component {
    renderItem = ({ item }) => (
        <TouchableOpacity style={styles.itemContainer} onPress={() => this.props.navigation.navigate('Chat')}>
            <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    source={require('../assets/user.png')}
                    style={{ width: 50, height: 50 }}
                />
            </View>
            <View style={styles.item}>
                <View style={{flex:1 , marginTop:-8}}>
                    <Text style={styles.textX}>{item.userName}</Text>
                </View>
                <View style={{flex:1 , marginTop:15 }}>
                    <Text style={styles.textY}>{item.FullName}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <View style={styles.topBar}>
                        <View style={{ flex: 0.1, justifyContent: 'center', padding: 10 }}>
                            <MaterialCommunityIcons name="keyboard-backspace" color="white" size={20} onPress={() => this.props.navigation.navigate('Home')} />
                        </View>
                        <View style={styles.topBarText}>
                            <Text style={{ color: 'white', fontSize: 17, fontFamily: 'Barlow-Bold', fontWeight: 'bold' }}>New Chat</Text>
                        </View>
                    </View>
                    <View style={styles.search}>
                        <TextInput style={styles.txtInput}
                            placeholder="Search"
                            placeholderTextColor="white" />
                    </View>
                    <View style={styles.list}>
                        <AlphaScrollFlatList
                            keyExtractor={item => item.id}
                            data={DATA.sort((prev, next) => prev.userName.localeCompare(next.userName))}
                            renderItem={this.renderItem.bind(this)}
                            scrollKey={'userName'}
                            reverse={false}
                            itemHeight={ITEM_HEIGHT}
                            scrollBarColor="white"
                            activeColor="red"
                        />
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#053751',
    },
    itemContainer: {
        flexDirection: 'row',
        width: '100%',
        height: 45,
        paddingTop: 10,
        paddingLeft: 25,
        paddingRight: 25,
        marginBottom: 15,
        marginTop:5,
    },
    icon: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    item: {
        flex: 1,
        paddingLeft: 15,
    },
    textX: {
        fontFamily: 'Barlow-Bold' ,
        color: 'grey',
        fontSize: 15,
        fontWeight: 'bold',
    },
    textY: {
        fontFamily: 'Barlow',
        color: 'black',
        fontSize: 15,
    },
    txtInput: {
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: 'grey',
        opacity: 0.5,
        height: 40,
        borderRadius: 20,
    },
    search: {
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 5,
        paddingBottom: 5,
    },
    topBar: {
        flexDirection: 'row',
    },
    topbarIcon: {
        height: 25,
        width: 30,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    topBarText: {
        flex: 1,
        paddingLeft: 10,
        justifyContent: 'center',
        fontWeight: 'bold',
    },
    topBarTextt: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 15,
    },
    list: {
        flex: 1,
        paddingTop: 3,
        paddingBottom: 5,
        marginBottom: 1,
    },
});
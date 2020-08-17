import Icon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import EIcon from 'react-native-vector-icons/Entypo';
import React, { useState } from 'react';

import { Image, View, Alert, Modal, StatusBar, ImageBackground, Dimensions, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
function GetFilterView(props) {
    const arrFilter = props.arrFilter
    const x = props.arr.map((d, i) => {
        const color = arrFilter.includes(d) ? '#565589' : 'white'
        return (<TouchableOpacity key={i} style={[{ backgroundColor: color }, styles.filterModalView]} onPress={() => props.addToArr(d, i)}><Text style={{ fontSize: 12, color: color == 'white' ? 'rgba(30, 28, 97, 0.75)' : 'white', textTransform: 'capitalize' }}>
            {d}
        </Text></TouchableOpacity>)
    })
    return x
}

// Body View function
function GetResultFilters({arr}) {
    if(arr.length>0){
    return (
         <View style={styles.bodyContent}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 20 }}>
                    <Text style={[styles.fontBodyText, {
                        textTransform: 'capitalize', fontSize: 15
                    }]}>Dr Reddys labs</Text>
                    <Text style={styles.fontBodyText} >11.200 AED</Text>
                </View>
                <View style={{ width: Dimensions.get('window').width - 40, flexWrap:'wrap',flexDirection: 'row', justifyContent: 'flex-start', borderTopWidth: 1, borderTopColor: 'rgba(0,0,0,0.1)' }}>
                    {
                        arr.map((item,index)=>{
                            let txt=''
                            let per='0%'
                            "top 10 dividend yield stocks",
                            "top 10 Return on Equity stocks",
                            "top 10 earnings growth stocks",
                            "top 10 growth in sales stocks",
                            "Top 10 P/E stocks"
                            switch(item){
                                case "Top 10 P/E stocks":
                                    txt='P/E stocks'
                                    per='5%'
                                    break
                                case "top 10 growth in sales stocks":
                                    txt='growth in sales stocks'
                                    per='5%'
                                    break
                                case "top 10 earnings growth stocks":
                                    txt='earnings growth stocks'
                                    per='5%'
                                    break
                                case "top 10 Return on Equity stocks":
                                    txt='Return on Equity stocks"'
                                    per='5%'
                                    break
                                case "top 10 dividend yield stocks":
                                    txt='dividend yield stocks'
                                    per='5%'
                                    break
                            }
                            return(       
                                <View key={index} style={styles.cellBorder}>
                                    <Text style={styles.fontBody}>{txt}</Text>
                                     <Text style={styles.fontBody1} >{per}</Text>
                                </View>
                            )
                        })
                    }
                    
                </View>
            </View>
    )}
    return null
}
const Filter = ({ navigation }) => {
    const [arrFilter, setFilter] = useState([])
    const [modalVisible, setModalVisible] = useState(true);
    const arr = [
        "top 10 dividend yield stocks",
        "top 10 Return on Equity stocks",
        "top 10 earnings growth stocks",
        "top 10 growth in sales stocks",
        "Top 10 P/E stocks"
    ]

    function addToArr(d) {
        if (arrFilter.includes(d)) {
            setFilter(arrFilter.filter(data => data != d))
        }
        else {
            const newArr = [...arrFilter, d]
            setFilter(newArr)
        }
    }
    return (
        <>
            <StatusBar
                barStyle="light-content"
                backgroundColor='#0190D5'
                translucent
            />
            {/* Header  */}
            <ImageBackground source={require('../assets/questionsbg.png')} style={{ width: Dimensions.get('screen').width, height: Dimensions.get('window').height / 6 }}>
                <View style={{ padding: 7 }}></View>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <View style={{ width: 50, justifyContent: 'center' }}>
                        <TouchableOpacity style={{ marginLeft: 10, padding: 10 }}
                            onPress={() => navigation.openDrawer()}
                        >
                            <Image
                                source={require('../assets/bars.png')}
                                style={{ width: 15.5, height: 11.5 }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <View><Text style={{fontSize:24,color:'white'}}>Mankhal</Text></View>
                    </View>
                    <View style={{ width: 50, justifyContent: 'center' }}>
                        <TouchableOpacity style={{ alignItems: 'flex-end', marginRight: 10, padding: 10 }}
                            onPress={() => { setModalVisible(modalVisible ? false : true) }}
                        >
                            <Icon name='filter' size={20} style={{ color: 'white' }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>

            {/* Modal for filtering the view */}
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}
            >
                <View style={styles.modal_container}>
                    <View style={{ flex: 0.2, flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white', paddingTop: 20 }}>
                        <Text style={styles.titleModal}>top 10 dividend yield stocks </Text>
                        <MIcon style={{ color: "#1E1C61" }} color='#1E1C61' name='keyboard-arrow-down' size={20} />
                    </View>
                    <View style={{ alignItems: 'center', backgroundColor: 'white' }}>
                        <GetFilterView arrFilter={arrFilter} arr={arr} addToArr={(d) => addToArr(d)} />
                        <TouchableOpacity onPress={() => setModalVisible(false)} ><Image style={{ width: 20, height: 20, margin: 30 }} source={require('../assets/Union.png')} /></TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'black', opacity: 0.4 }}>
                    </View>
                </View>
            </Modal>
            {/* filter chossen scroll view from filter icon */}
            {arrFilter.length > 0 ?
                <View style={styles.horizontalFScroll}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {arrFilter.map(
                            (data, i) => {
                                return (
                                    <View key={i} style={styles.filterStyles}>
                                        <Text style={styles.filterText}>{data}</Text>
                                        <EIcon name='cross' onPress={() => { addToArr(data, i) }} size={11} style={{ color: '#1E1C61', paddingHorizontal: 5, paddingTop: 4 }} />
                                    </View>
                                )
                            })
                        }
                    </ScrollView></View>
                : null}

            <ScrollView >
                   <GetResultFilters arr={arrFilter}/>
            </ScrollView>

        </>
    )
}


const styles = StyleSheet.create({
    upwrap: {
        marginTop: 20,

    },
    modal_container: {
        flex: 1,
        marginTop: Dimensions.get('window').height / 6 - StatusBar.currentHeight,
        backgroundColor: 'transparent',

    },
    filterModalView: {
        marginTop: 30,
        height: 36,
        width: 226,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#1E1C61', justifyContent: "center", borderRadius: 18
    }
    , titleModal:
    {
        textAlign: 'center', textAlign: 'center',

        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 14,
        color: 'rgba(30, 28, 97, 0.75)', textTransform: 'capitalize'
    },
    filterStyles: {
        height: 36,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#565589',
        borderRadius: 19,
        marginHorizontal: 5,
        paddingHorizontal: 12
    },
    filterText: {
        fontSize: 11,
        color: '#1E1C61',
        fontWeight: 'bold',
        textTransform: 'capitalize'
    },
    horizontalFScroll: {
        width: Dimensions.get('screen').width,
        height: 50,
        paddingVertical: 5,
        elevation: 1,
        backgroundColor: 'white',
        marginBottom: 2
    },
    fontBody: {

        fontSize: 14,
        color: 'rgba(30, 28, 97, 0.75)',
        textTransform: 'capitalize'
    },
    fontBody1: {
        fontWeight: 'bold',
        fontSize: 14,
        color: 'rgba(30, 28, 97, 0.75)',
        textTransform: 'capitalize'
    },
    bodyContent: {
        backgroundColor: 'white', paddingHorizontal: 15, marginVertical: 10,
        width: Dimensions.get('window').width
    },
    fontBodyText: {
        fontSize: 14, fontWeight: 'bold',
        color: '#1E1C61'
    },
    cellBorder: { width: Dimensions.get('window').width / 2 - 20, justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1, borderColor: 'rgba(0,0,0,0.1)', height: 62 }

})
export default Filter;




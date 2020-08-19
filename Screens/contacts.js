import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AlphaScrollFlatList from 'alpha-scroll-flat-list';
import {RadioButton} from 'react-native-paper';

import {connect} from 'react-redux';

import AsyncStorage from '@react-native-community/async-storage';

const ITEM_HEIGHT = 45;

//react- redux code
const mapStateToProps = state => {
  return {users: state.users.users};
};
// const mapDispatchToProps = dispatch => {
//   return {
//     fetchUsers: function () {
//       dispatch(fetchUsers());
//     },
//   };
// };
//selector end

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      show: true,
      create: false,
      loading: true,
    };
    this.selectedItems = [];
    this.ip = '';
  }

  //mounting array Data in State
  async componentDidMount() {
    // this.props.fetchUsers();
    this.ip = await AsyncStorage.getItem('ip_key');
    this.setState({loading: false});
  }

  //function to handle search filter
  SearchFilterFunction(text) {
    if (text.length > 2) {
      const newData = this.props.users.filter(function (item) {
        const itemData = item.username.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.includes(textData);
      });
    }
    this.setState({
      text: text,
    });
  }

  //function to handle checked items while selecting items
  setChecked(item) {
    if (this.selectedItems.length > 0) {
      this.setState({create: true});
      if (this.selectedItems.includes(item)) {
        for (var i = 0; i < this.selectedItems.length; i++) {
          if (this.selectedItems[i] === item) {
            this.selectedItems.splice(i, 1);
            if (this.selectedItems.length === 0) {
              this.setState({create: false});
            }
          }
        }
      } else {
        this.selectedItems.push(item);
      }
    } else {
      this.selectedItems.push(item);
      this.setState({create: true});
    }
  }

  //view to be visible when in multiselect mode
  renderItem1 = ({item}) => {
    return (
      <>
        {this.ip !== item.uid ? (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => this.setChecked(item.username)}>
            <View style={{paddingRight: 5}}>
              <RadioButton
                value={item.username}
                status={
                  this.selectedItems.includes(item.username)
                    ? 'checked'
                    : 'unchecked'
                }
                onPress={() => this.setChecked(item.username)}
                color="grey"
                uncheckedColor="grey"
              />
            </View>
            <View
              style={{
                flex: 0.2,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/user.png')}
                style={{width: 50, height: 50}}
              />
            </View>
            <View style={styles.item}>
              <View style={{flex: 1, marginTop: -8}}>
                <Text style={styles.textX}>{item.username}</Text>
              </View>
              <View style={{flex: 1, marginTop: 15}}>
                <Text style={styles.textY}>{item.fullname}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ) : null}
      </>
    );
  };

  //view to be visible when not in multiselect mode
  renderItem2 = ({item}) => (
    <>
      {item.uid !== this.ip ? (
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() =>
            this.props.navigation.navigate('Chat', {
              uid: item.uid,
              username: item.username,
            })
          }>
          <View
            style={{flex: 0.2, justifyContent: 'center', alignItems: 'center'}}>
            <Image
              source={require('../assets/user.png')}
              style={{width: 50, height: 50}}
            />
          </View>
          <View style={styles.item}>
            <View style={{flex: 1, marginTop: -8}}>
              <Text style={styles.textX}>{item.username}</Text>
            </View>
            <View style={{flex: 1, marginTop: 15}}>
              <Text style={styles.textY}>{item.fullname}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ) : null}
    </>
  );
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          {this.state.show ? (
            <View style={styles.topBar}>
              <View style={{flex: 0.2, justifyContent: 'center', padding: 10}}>
                <AntDesign
                  name="back"
                  color="white"
                  size={20}
                  onPress={() => this.props.navigation.navigate('Home')}
                />
              </View>
              <View style={styles.topBarText}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 17,
                    fontFamily: 'Barlow-Bold',
                    fontWeight: 'bold',
                  }}>
                  New Chat
                </Text>
              </View>
              <TouchableOpacity
                style={{flex: 1, justifyContent: 'center', paddingRight: 15}}
                onPress={() => this.setState({show: false})}>
                <View
                  style={{
                    backgroundColor: '#D68910',
                    borderRadius: 20,
                    justifyContent: 'center',
                    flexDirection: 'row',
                    padding: 5,
                  }}>
                  <View style={{justifyContent: 'center', paddingRight: 5}}>
                    <MaterialIcons name="group" color="#053751" size={20} />
                  </View>
                  <View style={{justifyContent: 'center'}}>
                    <Text
                      style={{
                        color: '#053751',
                        fontSize: 17,
                        fontFamily: 'Barlow-Bold',
                        paddingBottom: 3,
                      }}>
                      Create Group
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          ) : this.state.create ? (
            <View style={styles.topBar}>
              <View style={{flex: 0.1, justifyContent: 'center', padding: 10}}>
                <AntDesign
                  name="back"
                  color="white"
                  size={20}
                  onPress={() => this.props.navigation.navigate('Home')}
                />
              </View>
              <View
                style={{
                  flex: 0.75,
                  justifyContent: 'center',
                  alignContent: 'center',
                  flexDirection: 'row',
                }}>
                <View
                  style={{justifyContent: 'center', alignContent: 'center'}}>
                  <Text
                    style={{
                      color: '#D68910',
                      fontSize: 17,
                      fontFamily: 'Barlow-Bold',
                      paddingBottom: 3,
                    }}>
                    Create Group
                  </Text>
                </View>
              </View>
              <View style={{position: 'absolute', left: 255, top: 5}}>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    paddingBottom: 5,
                    alignContent: 'center',
                  }}
                  onPress={() => {
                    this.props.navigation.navigate('CreateGroup');
                  }}>
                  <View
                    style={{
                      width: 80,
                      backgroundColor: 'rgba(128,128,128,0.5)',
                      borderRadius: 20,
                      justifyContent: 'center',
                      flexDirection: 'row',
                      padding: 5,
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 15,
                        fontFamily: 'Barlow-Bold',
                        paddingBottom: 1,
                        alignContent: 'center',
                      }}>
                      Create
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View style={styles.topBar}>
              <View style={{flex: 0.1, justifyContent: 'center', padding: 10}}>
                <AntDesign
                  name="back"
                  color="white"
                  size={20}
                  onPress={() => this.props.navigation.navigate('Home')}
                />
              </View>
              <View
                style={{
                  flex: 0.75,
                  justifyContent: 'center',
                  alignContent: 'center',
                  flexDirection: 'row',
                }}>
                <View
                  style={{justifyContent: 'center', alignContent: 'center'}}>
                  <Text
                    style={{
                      color: '#D68910',
                      fontSize: 17,
                      fontFamily: 'Barlow-Bold',
                      paddingBottom: 3,
                    }}>
                    Create Group
                  </Text>
                </View>
              </View>
            </View>
          )}
          <View style={styles.search}>
            <TextInput
              style={styles.txtInput}
              placeholder="Search"
              placeholderTextColor="white"
              onChangeText={text => this.SearchFilterFunction(text)}
              value={this.state.text}
            />
          </View>
          <View style={styles.list}>
            {/* <AlphaScrollFlatList
              keyExtractor={item => item.uid}
              data=
              {this.props.users.sort((prev, next) =>
                prev.username.localeCompare(next.username),
              )}
              renderItem={
                this.state.show
                  ? this.renderItem2.bind(this)
                  : this.renderItem1.bind(this)
              }
              scrollKey={'username'}
              reverse={false}
              itemHeight={ITEM_HEIGHT}
              scrollBarColor="grey"
              activeColor="red"
            /> */}
            {!this.state.loading ? (
              <AlphaScrollFlatList
                keyExtractor={item => item.uid}
                data={this.props.users}
                renderItem={
                  this.state.show
                    ? this.renderItem2.bind(this)
                    : this.renderItem1.bind(this)
                }
                scrollKey={'username'}
                reverse={false}
                itemHeight={ITEM_HEIGHT}
                scrollBarColor="grey"
                activeColor="red"
              />
            ) : null}
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const Container = connect(mapStateToProps, null)(Contacts);

export default Container;
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
    marginTop: 5,
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
    fontFamily: 'Barlow-Bold',
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
    marginBottom: 5,
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

import React, { Component } from 'react'
import { View, Text, FlatList, ScrollView, StyleSheet, Dimensions, Platform } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { Card, Divider, Button, Icon, List, ListItem, Avatar } from 'react-native-elements'

import ScrollableTabView, {ScrollableTabBar, DefaultTabBar} from 'react-native-scrollable-tab-view'

import colors from 'HSColors'
import socialColors from 'HSSocialColors'
import fonts from 'HSFonts'

const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height

const dataSource = [
  [{
    title: '我的帐号',
    icon: 'person',
    color: colors.primary,
    goto: 'LoginScreen'
  },
  {
    title: '门店信息',
    icon: 'person',
    color: colors.primary,
    goto: 'LoginScreen'
  }],
  [{
    title: '消息和提示间设置',
    icon: 'av-timer',
    color: colors.primary,
    goto: 'LoginScreen'
  },
  {
    title: '语言设置',
    icon: 'flight-takeoff',
    color: colors.primary,
    goto: 'LanguageSetting'
  }],
  [{
    title: '设定',
    icon: 'settings',
    color: colors.primary,
    goto: 'LoginScreen'
  }]
]

class Profile extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { navigation } = this.props
    return (
      <View style={{height: SCREEN_HEIGHT}}>
        <View style={styles.hero}>
          <Avatar
            large
            rounded
            source={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'}}
            onPress={() => console.log('Works!')}
            activeOpacity={0.7}
          />
          <Text style={styles.heading}>Buttons & Icons</Text>
        </View>
        <ScrollView style={styles.scrollView}>

          <List>
            {
              dataSource[0].map((item, i) => (
                <ListItem
                  key={i}
                  title={item.title}
                  leftIcon={{name: item.icon, color: item.color}}
                />
              ))
            }
          </List>

          <List>
            {
              dataSource[1].map((item, i) => (
                <ListItem
                  key={i}
                  title={item.title}
                  leftIcon={{name: item.icon, color: item.color}}
                  onPress={() =>
                    navigation.navigate(item.goto)}
                />
              ))
            }
          </List>

          <List>
            {
              dataSource[2].map((item, i) => (
                <ListItem
                  key={i}
                  title={item.title}
                  leftIcon={{name: item.icon, color: item.color}}
                  onPress={() =>
                    navigation.navigate(item.goto)}
                />
              ))
            }
          </List>

        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22
  },
  scrollView: {
    bottom: 0
  },
  hero: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: colors.primary
  },
  titleContainer: {},
  button: {
    marginTop: 15
  },
  title: {
    textAlign: 'center',
    color: colors.grey2,
    ...Platform.select({
      ios: {
        fontFamily: fonts.ios.black
      }
    })
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})
// const ProfilePage = StackNavigator({
//   OrderList: {
//     screen: Profile,
//     path: '/',
//     navigationOptions: () => ({
//       title: '我的',
//       headerStyle: {backgroundColor: '#03A9F4'},
//       headerTintColor: '#fff',
//     }),
//   },
//   OrderDetail: {
//     screen: Profile,
//     path: '/',
//     navigationOptions: () => ({
//       title: '日购app'
//     })
//   },
// },{
//     // headerMode: 'none',
// })

export default Profile

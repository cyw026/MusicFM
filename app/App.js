
import React, { Component } from 'react'
import { View, Text, Image, Dimensions } from 'react-native'
import { TabNavigator, StackNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';
import { Button, Icon } from 'react-native-elements'

import HomeTab from './views/home/HomePage';
import videoPlayer from './views/home/orderList';

import MyProfilePage from './views/myProfile/ProfilePage';
import LoginScreen from './views/login/LoginScreen';

import { useStrict } from 'mobx';
import { Provider, observer } from 'mobx-react/native';
useStrict(true);
import Store from './Store';

const HomeScreen = TabNavigator(
  {
    HomeTab: {
      screen: HomeTab,
      path: '/home',
      navigationOptions: {
        title: '新订单',
        tabBarLabel: '新订单',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? 'emoticon-cool' : 'emoticon-neutral'}
            size={30}
            type="material-community"
            color={tintColor}
          />
        ),
      },
    },
    FormsTab: {
      screen: MyProfilePage,
      path: '/profile',
      navigationOptions: {
        tabBarLabel: '我的',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name="person"
            size={30}
            // type="font-awesome"
            color={tintColor}
          />
        ),
        header:null,
      },
    },
  },
  {
    initialRouteName: 'HomeTab',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: '#03A9F4',
    },
    navigationOptions: {
      headerStyle: {backgroundColor: '#03A9F4'},
      headerLeft:null
    }
  },
);

const MyApp = StackNavigator(
{
  MainScene: {
    screen: HomeTab,
    path: '/home',
    navigationOptions: ({ navigation }) => ({
      headerStyle: {backgroundColor: '#E7272D'},
      headerTintColor: '#fff',
      headerPressColorAndroid: '#E7272D',
      title: 'Music FM',
      headerLeft: (
        <Icon
          name="menu"
          size={28}
          color='#fff'
          underlayColor='transparent'
          type="entypo"
          style={{ paddingLeft: 10 , backgroundColor: 'transparent'}}
          onPress={() => navigation.navigate('DrawerOpen')}
        />
      ),
    }),
  },
  videoPlayer: {
    screen: videoPlayer,
    path: '/login',
    navigationOptions: () => ({
      headerStyle: {backgroundColor: '#E7272D'},
      headerTintColor: '#fff',
      headerLeft: (
        <Icon
          name="bars"
          size={30}
          type="font-awesome"
          style={{ paddingLeft: 10 }}
          onPress={() => navigation.navigate('DrawerOpen')}
        />
      ),
      header:null,
    })
  },
},
{
  initialRouteName: 'MainScene',
})

const SCREEN_WIDTH = Dimensions.get('window').width;

const CustomDrawerContentComponent = props => (
  <View style={{ flex: 1, backgroundColor: '#fff' }}>
    <View
      style={{ marginTop: 0, justifyContent: 'center', alignItems: 'center' }}
    >
      <Image
        source={require('./assets/avatar.jpg')}
        style={{ width: SCREEN_WIDTH * 0.8, height: 200 }}
        resizeMode="cover"
      />
    </View>
    <DrawerItems {...props} />
  </View>
);


const MainRoot = DrawerNavigator(
  {
    Home: {
      path: '/home',
      screen: MyApp,
    },
    SwipeDecker: {
      path: '/swiper_decker',
      screen: HomeScreen,
    },
    Ratings: {
      path: '/ratings',
      screen: HomeScreen,
    }
  },
  {
    initialRouteName: 'Home',
    contentOptions: {
      activeTintColor: '#000',
      activeBackgroundColor: 'transparent',
      inactiveTintColor: '#000',
      inactiveBackgroundColor: 'transparent',
      labelStyle: {
        fontSize: 15,
        marginLeft: 10,
      },
    },
    drawerWidth: SCREEN_WIDTH * 0.8,
    contentComponent: CustomDrawerContentComponent,
  }
);


@observer
class App extends Component {
    render() {
        return (
            <Provider store={Store}>
                <MainRoot />
            </Provider>
        )
    }
}
export default App;

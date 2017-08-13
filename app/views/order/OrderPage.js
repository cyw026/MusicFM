import React, { Component } from 'react'
import { View, Text, FlatList, ScrollView, StyleSheet, Dimensions } from 'react-native'
import { Card, Divider, Button } from 'react-native-elements'
import ScrollableTabView, {ScrollableTabBar, DefaultTabBar} from 'react-native-scrollable-tab-view'

import colors from 'HSColors'

const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height

class OrderList extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <View style={styles.container}>
        <ScrollableTabView
          // tabBarUnderlineColor={colors.primary}
          tabBarInactiveTextColor={colors.grey3}
          tabBarActiveTextColor={colors.primary}
          tabBarBackgroundColor='#fff'
          ref="scrollableTabView"
          renderTabBar={() => <DefaultTabBar underlineStyle={{backgroundColor: colors.primary, height: 2}}/>}
          // renderTabBar={() => <ScrollableTabBar style={{height: 40,borderWidth:0,elevation:2}} tabStyle={{height: 39}}
          //                                       underlineStyle={{backgroundColor: colors.primary, height: 2}}/>}
        >
          <OrderTab tabLabel="未完成" />
          <OrderTab tabLabel="已完成" />
          <OrderTab tabLabel="已取消" />
        </ScrollableTabView>
      </View>
    )
  }
}

class OrderTab extends Component {
  constructor (props) {
    super(props)
        this.renderRow = this.renderRow.bind(this)
  }

  getRestaurants () {
    return require('../../service/data/restaurants.json')
  }

  renderRow (restaurant) {
    return (
      <Card containerStyle={styles.car}>
        <View style={{justifyContent: 'space-between', flexDirection: 'row', marginBottom: 10}}>
          <View>
            <Text style={{color: colors.grey1}}>
                预计取货时间
            </Text>
            <Text
              style={styles.pick_up}>现金支付</Text>
          </View>
          <Text style={{color: colors.grey1}}>
              05-17 9:00~11:00
          </Text>
        </View>
        <Divider />
        <View style={{justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginTop: 10}}>
          <Text style={{flex: 2, color: colors.grey1}}>
                  蔡先生
            <Text style={{color: colors.primary}}>
                      (13580446242)
            </Text>
          </Text>
          <Text style={{color: colors.primary, borderColor: colors.primary, borderWidth: 1, borderRadius: 10, padding: 3, fontSize: 10}}>店铺新客</Text>
        </View>
        <View style={{justifyContent: 'space-between', flexDirection: 'row', marginTop: 10}}>
          <Text>1.1km</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Button
            backgroundColor='#EDEEEF'
            color='#000000'
            containerViewStyle={{flex: 1, borderRadius: 5}}
            buttonStyle={{borderRadius: 5}}
            title='取消订单' />
          <Button
            backgroundColor='#03A9F4'
            containerViewStyle={{flex: 1, borderRadius: 5}}
            buttonStyle={{borderRadius: 5}}
            title='接单' />
        </View>
      </Card>
    )
  }

  render () {
    return (
      <ScrollView style={styles.screen}>
        <Card containerStyle={styles.car}>
          <Text style={{textAlign: 'center'}}>今日共计
            <Text style={{color: colors.primary}}>9</Text>
                          单，金额
            <Text style={{color: colors.primary}}>134</Text>
                          元
          </Text>
        </Card>
        <FlatList
          data={this.getRestaurants()}
          keyExtractor={(item, index) => item.name}
          renderItem={({item}) => this.renderRow(item)}
        />
      </ScrollView>
    )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  screen: {
    backgroundColor: '#EFF0F1'
  },
  icon: {
    width: SCREEN_WIDTH * 0.815,
    height: 150,
    resizeMode: 'cover'
  },
  car: {
    // borderRadius: 10,
    borderWidth: 0,
    // borderColor: '#fff',
    borderTopWidth: 2,
    borderTopColor: '#03A9F4'
  },
  pick_up: {
    color: '#FA8C98',
    borderRadius: 10,
    borderColor: '#FA8C98',
    borderWidth: 1,
    textAlign: 'center',
    padding: 1,
    marginTop: 8
  }
})

export default OrderList

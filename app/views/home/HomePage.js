import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, ScrollView, RefreshControl, TouchableHighlight, FlatList, Dimensions } from 'react-native'
import { Card, Divider, Button, List, ListItem, Icon, Avatar } from 'react-native-elements'
import Collapse from '../../components/collapsable-panel'

import colors from 'HSColors'
import { observer, inject } from 'mobx-react'
@inject('store')
@observer

class HomePage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isRefreshing: false,
      items: {}
    }
  }

  componentDidMount() {
        this.playlistItems();
    }

  getRestaurants () {
    return require('../../service/data/restaurants.json')
  }

  _onRefresh () {
    this.setState({
      isRefreshing: true
    })
    setTimeout(() => {
      this.setState({
        isRefreshing: false
      })
    }, 1000)
  }

  playlistItems = () => {
        const { store } = this.props;

        store.playlistItems()
        .then(res => {
            console.log('playlistItems success ! ! !' + JSON.stringify(res))
            if (res) {
                // store.navigateBack();
                this.setState({
                    loggingIn: false,
                    items: res.items
                });
            } else {
                this.setState({
                    loggingIn: false
                });
            }
        });
    }

  renderRow (item) {
    const { snippet } = item;
    const { navigation } = this.props;
    return (
      <TouchableHighlight onPress={() => navigation.navigate('videoPlayer')}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <View style={{padding: 4, backgroundColor: 'transparent'}}>
            <Image
              source={{uri: snippet.thumbnails.medium.url}}
              style={{width: 120, height: 67}}
              resizeMode='center'
            >
            </Image>
          </View>
          <View style={{flex: 1, paddingTop: 10}}>
            <Text style={{color: '#000000', width: 180}}>{item.snippet.title}</Text>
              <View style={styles.subtitleView}>
              <Text style={styles.ratingText}>views: 230k</Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
  render () {
    const { items } = this.state;
    return (
      <ScrollView style={styles.screen}
        refreshControl={
          <RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={ () => this._onRefresh()}
            tintColor="#ddd" />}
      >
        <FlatList
          data={items}
          keyExtractor={(item, index) => item.id}
          renderItem={({ item }) => this.renderRow(item)}
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
    backgroundColor: '#fff'
  },
  car: {
    borderRadius: 10,
    borderWidth: 0,
    borderTopWidth: 0,
    borderTopColor: '#03A9F4',
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    overflow: 'hidden'
  },
  titleContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: colors.primary,
    padding: 15,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 0
  },
  listContainer: {
    marginBottom: 0,
    marginTop: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0
  },
  ListItemContainer: {
    borderTopWidth: 0,
    borderBottomWidth: 0,
    paddingRight: 0,
    paddingTop: 15,
    paddingBottom: 15
  },
  ListItemWrapper: {
    marginLeft: 0
  },
  listItemTitle: {
    color: colors.grey3,
    fontSize: 14
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

export default HomePage

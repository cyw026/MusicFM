import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableHighlight, FlatList, Dimensions } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';
import YouTube, { YouTubeStandaloneAndroid } from 'react-native-youtube';
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-player';

const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height
const VIMEO_ID = '179859217';
import colors from 'HSColors'
import { observer, inject } from 'mobx-react'
@inject('store')
@observer

class PlayVideo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        video: { width: undefined, height: undefined, duration: undefined },
        thumbnailUrl: undefined,
        videoUrl: undefined,
        isReady: false,
        isPlay:false,
        isFullscreen: false,
        items: {}
        };
    }

    

    getRestaurants() {
        return require('../../service/data/restaurants.json');
    }

    componentDidMount() {
        // this.playVideo();
        this.playlistItems();
    }

    playVideo() {
        YouTubeStandaloneAndroid.playVideo({
                apiKey: 'AIzaSyAfqO7vC4TOtn81Hn3mJ6nZMateFmq5ODg', // Your YouTube Developer API Key
                videoId: '9aJVr5tTTWk', // YouTube video ID
                autoplay: true, // Autoplay the video
                lightboxMode: true
            })
            .then(() => console.log('Standalone Player Exited'))
            .catch(errorMessage => console.error(errorMessage))
    }

//   componentDidMount() {
//     global.fetch(`https://player.vimeo.com/video/${VIMEO_ID}/config`)
//       .then(res => res.json())
//       .then(res => this.setState({
//         thumbnailUrl: res.video.thumbs['640'],
//         videoUrl: res.request.files.hls.cdns[res.request.files.hls.default_cdn].url,
//         video: res.video,
//       }));
//   }
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
  render() {
      const {isPlay, isFullscreen, items} = this.state;
    return (
      <View >
          <YouTube
            apiKey='AIzaSyAfqO7vC4TOtn81Hn3mJ6nZMateFmq5ODg'
            videoId="9aJVr5tTTWk"   // The YouTube video ID 
            play={isPlay}             // control playback of video with true/false 
            fullscreen={isFullscreen}       // control whether the video should play in fullscreen or inline 
            loop={true}             // control whether the video should loop when ended 
            
            onReady={e => this.setState({ 
                isReady: true ,
                isPlay: true
                })}
            onChangeState={e => this.setState({ status: e.state })}
            onChangeQuality={e => this.setState({ quality: e.quality })}
            onChangeFullscreen={e => {
                console.log(e)
                this.setState({ isFullscreen: e.isFullscreen })
            }}
            onError={e => this.setState({ error: e.error })}
            
            style={isFullscreen ? styles.fullscreen : styles.lightboxMode}
            />

        <FlatList
          data={items}
          keyExtractor={(item, index) => item.id}
          renderItem={({ item }) => this.renderRow(item)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    icon: {
        width: 300,
        height: 150,
        resizeMode: 'cover',
    },
    car: {
        borderRadius: 10,
        borderWidth: 0,
        borderColor: '#fff',
    },
    fullscreen: {
        alignSelf: 'stretch',
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
    },
    lightboxMode:{
        alignSelf: 'stretch',
        height: SCREEN_WIDTH,
        width:SCREEN_HEIGHT
    },
    backgroundVideo: {
    backgroundColor: '#fff'
  },
});
export default PlayVideo;
import React, { Component } from 'react';
import { View, Text, Image, FlatList, ScrollView, StyleSheet, WebView } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';
import { YouTubeStandaloneAndroid } from 'react-native-youtube';


class videoPlayer extends Component {
    constructor(props) {
        super(props);
    }

    getRestaurants() {
        return require('../../service/data/restaurants.json');
    }

    componentDidMount() {
        // this.playVideo();
    }

    playVideo() {
        YouTubeStandaloneAndroid.playVideo({
                apiKey: 'AIzaSyBfaalvZeERdvx7PGDdoxi_WtbFNISxYJg', // Your YouTube Developer API Key
                videoId: '9aJVr5tTTWk', // YouTube video ID
                autoplay: true, // Autoplay the video
                lightboxMode: true
            })
            .then(() => console.log('Standalone Player Exited'))
            .catch(errorMessage => console.error(errorMessage))
    }

    render() {
        return ( 
          <ScrollView >
            <WebView 
            style={{height: 300}}
            source={{ html: "<html><body>Look Ma' a video! <br /> <iframe width=\"320\" height=\"300\" src=\"https://www.youtube.com/embed/9aJVr5tTTWk\" frameborder=\"0\" allowfullscreen></iframe></body></html>" }} />
          </ScrollView>
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
});
export default videoPlayer;
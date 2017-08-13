
import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Platform } from 'react-native';
import { Text, Button, Icon, SocialIcon, Card } from 'react-native-elements';

import colors from 'HSColors';
import socialColors from 'HSSocialColors';
import fonts from 'HSFonts';

const log = () => {
  console.log('Attach a method here.');
};

class Buttons extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <ScrollView>
        <View style={styles.hero}>
          <Icon color="white" name="whatshot" size={62} type="material" />
          <Text style={styles.heading}>Buttons & Icons</Text>
        </View>
        <Button
          buttonStyle={styles.button}
          backgroundColor={colors.primary2}
          icon={{ name: 'account', type: 'material-community' }}
          onPress={() =>
            navigation.navigate('LoginScreen')}
          title="New Order"
        />
        <Card title="ICONS" containerStyle={{ marginTop: 15 }}>
          <View style={[styles.socialRow, { marginVertical: 10 }]}>
            <Icon
              onPress={() => navigation.navigate('Icons_Detail')}
              type="font-awesome"
              color="#e14329"
              name="hashtag"
            />
            <Icon
              onPress={() => console.log('hello')}
              type="font-awesome"
              color="#02b875"
              name="rocket"
            />
            <Icon
              onPress={() => console.log('hello')}
              color="#000000"
              name="snapchat-ghost"
              type="font-awesome"
            />
            <Icon
              color="#6441A5"
              name="btc"
              type="font-awesome"
              onPress={() => console.log('hello')}
            />
            <Icon
              color="#f50"
              name="heartbeat"
              type="font-awesome"
              onPress={() => console.log('hello')}
            />
          </View>
          <View style={[styles.socialRow, { marginVertical: 10 }]}>
            <Icon
              name="rowing"
              color="#673AB7"
              onPress={() => console.log('hello')}
            />
            <Icon
              name="g-translate"
              color="#03A9F4"
              onPress={() => console.log('hello')}
            />
            <Icon
              color="#009688"
              name="sc-telegram"
              type="evilicon"
              onPress={() => console.log('hello')}
            />
            <Icon
              color="#8BC34A"
              name="social-apple"
              type="foundation"
              onPress={() => console.log('hello')}
            />
            <Icon
              color="#FFC107"
              name="ios-american-football"
              type="ionicon"
              onPress={() => console.log('hello')}
            />
          </View>
          <View style={styles.socialRow}>
            <Icon
              raised
              name="vpn-key"
              color="#E91E63"
              onPress={() => console.log('hello')}
            />
            <Icon
              raised
              name="ring-volume"
              color="#3F51B5"
              onPress={() => console.log('hello')}
            />
            <Icon
              raised
              color="#00BCD4"
              name="weekend"
              onPress={() => console.log('hello')}
            />
            <Icon
              raised
              color="#CDDC39"
              name="bubble-chart"
              onPress={() => console.log('hello')}
            />
            <Icon
              raised
              color="#FF5722"
              name="burst-mode"
              onPress={() => console.log('hello')}
            />
          </View>
          <View style={styles.socialRow}>
            <Icon
              reverse
              raised
              name="account-balance"
              color="#673AB7"
              onPress={() => console.log('hello')}
            />
            <Icon
              reverse
              raised
              name="android"
              color="#03A9F4"
              onPress={() => console.log('hello')}
            />
            <Icon
              reverse
              raised
              color="#009688"
              name="code"
              onPress={() => console.log('hello')}
            />
            <Icon
              reverse
              raised
              color="#8BC34A"
              name="card-travel"
              onPress={() => console.log('hello')}
            />
            <Icon
              reverse
              raised
              color="#FF9800"
              name="extension"
              onPress={() => console.log('hello')}
            />
          </View>
          <View style={styles.socialRow}>
            <Icon
              reverse
              name="group-work"
              color="#E91E63"
              onPress={() => console.log('hello')}
            />
            <Icon
              reverse
              name="lightbulb-outline"
              color="#3F51B5"
              onPress={() => console.log('hello')}
            />
            <Icon
              reverse
              color="#00BCD4"
              name="pets"
              onPress={() => console.log('hello')}
            />
            <Icon
              reverse
              color="#CDDC39"
              name="polymer"
              onPress={() => console.log('hello')}
            />
            <Icon
              reverse
              color="#FF5722"
              name="touch-app"
              onPress={() => console.log('hello')}
            />
          </View>
        </Card>
        <Card
          title="LIGHT SOCIAL ICONS"
          containerStyle={{ marginTop: 15, marginBottom: 15 }}
        >
          <View style={styles.socialRow}>
            <SocialIcon
              light
              raised={false}
              type="gitlab"
              onPress={() => console.log('hi!')}
            />
            <SocialIcon
              light
              type="medium"
              onPress={() => console.log('hi2!')}
            />
            <SocialIcon
              light
              type="github-alt"
              onPress={() => console.log('hi3!')}
            />
            <SocialIcon light type="twitch" />
            <SocialIcon light type="soundcloud" />
          </View>
        </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22,
  },
  hero: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: colors.primary,
  },
  titleContainer: {},
  button: {
    marginTop: 15,
  },
  title: {
    textAlign: 'center',
    color: colors.grey2,
    ...Platform.select({
      ios: {
        fontFamily: fonts.ios.black,
      },
    }),
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default Buttons;

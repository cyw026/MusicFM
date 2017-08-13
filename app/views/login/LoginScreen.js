import React, { Component } from 'react'
import { View, Text, FlatList, ScrollView, StyleSheet, Dimensions, Platform } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { Card, Divider, Button, Icon } from 'react-native-elements'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { Keyboard, ActivityIndicator, Modal} from 'react-native'
import Spinner from '../../components/Spinner'
import colors from 'HSColors'



const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

import { observer, inject } from 'mobx-react'
@inject('store')
@observer

class LoginScreen extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        username: 'cyw026@163.com',
        password: '123456',
        error: '',
        loggingIn: false
    }

    componentWillMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    _keyboardDidShow() {
        // alert('Keyboard Shown');
    }

    _keyboardDidHide() {
        // alert('Keyboard Hidden');
    }
    _onTouchStart() {
        Keyboard.dismiss
    }

    changeUsername = (username) => {
        this.setState({
            username
        });
    }

    changePassword = (password) => {
        this.setState({
            password
        });
    }

    login = () => {
        console.log('login now')
        const { navigation } = this.props;
        const { username, password, loggingIn } = this.state,
            { store } = this.props;

        if (loggingIn) return;

        if (!username || !password) {
            this.setState({
                error: 'Missing info'
            });
        } else {
            this.setState({ loggingIn: true });
            store.login(username, password).then(success => {
                console.log('login success ! ! !' + JSON.stringify(success))
                if (success) {
                    // store.navigateBack();
                    navigation.navigate('MainScene')
                    this.setState({
                        loggingIn: false,
                    });
                } else {
                    this.setState({
                        loggingIn: false,
                        error: "Bad login"
                    });
                }
            });
        }
    }

    render() {
        const { navigation } = this.props;
        const { loggingIn } = this.state;
        return (
            <View style={{flex: 1}}>
             <View style={styles.screen} onTouchStart={this._onTouchStart}>
                 <View style={styles.hero}>
                    <Icon color="white" name="whatshot" size={62} type="material" />
                    <Text style={styles.heading}>Buttons&Icons</Text>
                </View>
                <Text style={{ marginTop: 10, color: 'red' }}>
                    {this.state.error}
                </Text>
                <FormLabel />
                <FormLabel>手机号码</FormLabel>
                <FormInput
                    value={this.state.username}
                    onSubmitEditing={Keyboard.dismiss} />
                <FormValidationMessage></FormValidationMessage>

                <FormLabel>登录密码</FormLabel>
                <FormInput
                    value={this.state.password}
                    onSubmitEditing={Keyboard.dismiss} />
                <FormValidationMessage></FormValidationMessage>
                <Button
                    buttonStyle={styles.button}
                    backgroundColor={colors.primary}
                    icon={{ name: 'account', type: 'material-community' }}
                    onPress={() =>
                        this.login()
                    }
                    title="登录"
                /> 
            </View> 
            <Modal
                animationType={"none"}
                visible={loggingIn}
                transparent
                style = {{position: 'absolute', top: 80}}
            >
             <Spinner/> 
            </Modal>

            
            </View>
        );
    }
}

// const Spinner = () => (
//         <View style={[styles.centering]}>
//             <ActivityIndicator
//                 animating={true}
//                 color={colors.primary}
//                 style={[styles.centering, {height: 80}]}
//                 size="large"
//             />
//         </View>
//     );

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
        width: null,
        height: null
    },
    fullscreen: {
        flex: 1,
        width: null,
        height: null
    },
    centered: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    }, 
    spinner: {
        marginBottom: 50
    },
    heading: {
        color: 'white',
        marginTop: 10,
        fontSize: 22,
    },
    button: {
        marginTop: 15,
        borderRadius: 5,
    },
    hero: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
        backgroundColor: colors.primary,
    },
})

export default LoginScreen

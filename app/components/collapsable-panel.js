'use strict';

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Animated,
  Easing
} from 'react-native'
import { Icon, Divider, Button } from 'react-native-elements'
import { ViewPropTypes as RNViewPropTypes } from 'react-native';
const ViewPropTypes = RNViewPropTypes || View.propTypes;

import colors from 'HSColors'


const ICONS = {
	up: require('./img/arrow_up.png'),
	down: require('./img/arrow_up.png')
}

export default class Collapse extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      icon: '',
      title: '',
      expanded: props.expanded,
      animation: new Animated.Value()
    }
  }
  componentDidMount() {
  }

  toggle = () => {
    const { onToggle } = this.props
    const { expanded, maxHeight, minHeight, animation } = this.state
    const initialValue = expanded ? minHeight + maxHeight : minHeight
    const finalValue = expanded ? minHeight : minHeight + maxHeight

    this.setState({
      expanded: !expanded
    });

    animation.setValue(initialValue)

    Animated.timing(animation, {
      toValue: finalValue,
      duration: 250
    }).start()

    onToggle()
  }

  render() {
    const { expanded, animation, maxHeight,  } = this.state
    const { containerStyle } = this.props
    const icon = expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'

    return (
      <Animated.View style={[styles.container, { height: animation }, containerStyle]}>
        <View style={styles.titleContainer}
          onLayout={event => this.setState({ minHeight: event.nativeEvent.layout.height })}>
          <Icon
              onPress={() => console.log('hello')}
              color={colors.primary}
              name="local-grocery-store"
              large
            />
          <Text style={styles.title}>{this.props.title}</Text>
          <Button
            containerViewStyle={styles.buttonContainer}
            buttonStyle={{padding: 0}}
            iconRight
            color={colors.primary}
            backgroundColor='transparent'
            icon={{ name: icon, color: colors.primary}}
            title="详情"
            fontSize={Number(14)}
            onPress={this.toggle}
          />
        
        </View>
        <Divider />
        {/*fixed bug in recent version of react-native that maxHeight will be changed when body is collapsed*/}
        <View style={styles.body}
          onLayout={event => !maxHeight && this.setState({ maxHeight: event.nativeEvent.layout.height })}>
          {this.props.children}
        </View>
      </Animated.View>
    )
  }
}

Collapse.defaultProps = {
    expanded: true
  }

Collapse.propTypes = {
  containerStyle: ViewPropTypes.style,
  titleStyle: PropTypes.func,
  tintColor: PropTypes.string,
  expanded: PropTypes.bool,
  title: PropTypes.string,
  onToggle: PropTypes.func
};


class Panel extends Component {

  render() {
    return (
      <View>
        <TouchableHighlight style={styles.barWrapper} underlayColor='transparent' onPress={() => { this._toggleView() }}>
          <View style={[styles.bar, this.props.style]}>
            <Text style={[styles.title, this.props.titleStyle]}>{this.state.title}</Text>
            <Icon name={this.state.icon} size={this._iconSize} color={this._tintColor} style={styles.icon} />
          </View>
        </TouchableHighlight>
        {this.state.show && <Animated.View
          style={{ opacity: this.state.fadeAnim }}>
          {this.props.children}
        </Animated.View>}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    overflow: 'hidden'
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContainer: {
    marginRight: 0, 
    paddingLeft: 15, 
    paddingTop:15, 
    paddingBottom: 15,
  },
  title: {
    flex: 1,
    padding: 10,
    color: '#2a2f43',
    fontWeight: 'bold',
  },
  collapseTitle: {
    padding: 10,
    color: '#03A9F4',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonImage: {
    width: 25,
    height: 20
  },
  body: {
    paddingTop: 0,
  }
});
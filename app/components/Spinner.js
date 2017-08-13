
import React, { Component } from 'react'
import { View, Image, StyleSheet, ActivityIndicator } from 'react-native'
import styles from './styles'

const Spinner = () => (
  <View style={[styles.fullscreen, styles.centered]}>
    <ActivityIndicator
      animating={true}
      color='#03A9F4'
      style={[styles.centering, {height: 80}]}
      size="large"
    />
  </View>
)

export default Spinner

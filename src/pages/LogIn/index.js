import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import Header from '../../components/Header'

export default function LogIn() {
  return (
    <View style={styles.container}>
      <View>
        <Header name="Log In" />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  title: {}
})

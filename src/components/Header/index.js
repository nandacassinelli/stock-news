import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

export default function Header({ name }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.headerName}>{name}</Text>
      </View>
    </View>
  )
}

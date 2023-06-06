import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

export default function LogInContainer() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Usuário</Text>
      <Text style={styles.text}>Senha</Text>
      <Text style={styles.text}>Ainda não possui cadastro?</Text>
    </View>
  )
}

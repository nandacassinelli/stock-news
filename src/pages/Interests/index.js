import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Header from '../../components/Header'
import styles from './styles'

export default function Interests() {
  const navigation = useNavigation()
  return (
    <View>
      <Header name="Interesses" />
      <View style={styles.container}>
        <Text style={styles.text}>Usuário</Text>
        <TextInput placeholder="Digite seu e-mail" style={styles.input} />
        <Text style={styles.text}>Senha</Text>
        <TextInput placeholder="Digite sua senha" style={styles.input} />
        <TouchableOpacity
          style={styles.signUpButton}
          onPress={() => navigation.navigate('StockbrokerSignUp')}
        >
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

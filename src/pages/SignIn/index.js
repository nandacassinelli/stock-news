import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Header from '../../components/Header'
import styles from './styles'

// FIXME dando erro!

export default function SignUp() {
  const navigation = useNavigation()
  return (
    <View>
      <Header name="Entrar" />
      <View style={styles.container}>
        <Text style={styles.text}>Usuário</Text>
        <TextInput placeholder="Digite seu e-mail" style={styles.input} />
        <Text style={styles.text}>Senha</Text>
        <TextInput placeholder="Digite sua senha" style={styles.input} />
        <TouchableOpacity style={styles.signInButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <Text style={styles.signUpText}>Ainda não possui cadastro?</Text>
        <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Cadastrar-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

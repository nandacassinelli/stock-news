import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Header from '../../components/Header'
import styles from './styles'

export default function StockBrokerSignUp() {
  const navigation = useNavigation()
  return (
    <View>
      <Header name="MetaTrader" />
      <View style={styles.container}>
        <Text>Insira abaixo os dados para login em sua conta.</Text>
        <Text>Caso não possua essas informações, procure sua corretora de ações</Text>
        <Text style={styles.text}>Conta</Text>
        <TextInput placeholder="Digite sua conta" style={styles.input} />
        <Text style={styles.text}>Senha</Text>
        <TextInput placeholder="Digite sua senha" style={styles.input} />
        <Text style={styles.text}>Servidor</Text>
        <TextInput placeholder="Digite o nome do servidor" style={styles.input} />
        <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.buttonText}>Próximo</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

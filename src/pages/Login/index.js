import React, { useState, useContext } from 'react'
import { useNavigation } from "@react-navigation/native"
import { View, TextInput, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { api } from '../../utils/api'
import { AuthContext } from '../../utils'

export function Login() {
  const navigation = useNavigation()
  const { setUserId } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    try {
      const response = await api.get('/users')
      const users = response.data
      const userExists = users.some(user => user.email === email && user.password === password)
      if (userExists) {
        const user = users.find(user => user.email === email && user.password === password)
        setUserId(user.id)
        navigation.navigate('DiscussionTab')
      } else {
        alert('Email inválido, este usuário não existe.')
      }
    } catch (error) {
      console.error('Algo deu errado, ' + error)
      alert('Disculpe, parece que algo deu errado, tente novamente mais tarde.')
    }
  }

  const handleNavigate = async () => {
    navigation.navigate('Register')
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>Faça Login para contribuir nas discussões da comunidade</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#fff"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#fff"
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity
        style={styles.buttonLogin}
        onPress={handleLogin}
      >
        <Text style={styles.textButton}>Entrar</Text>
      </TouchableOpacity>

      <View style={styles.containerRegister}>
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Não possui registro na Bittcsy?</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={handleNavigate}
        >
          <Text style={styles.textButton}>Registre-se</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerDetails}>
        <Text style={styles.titleDetails}>Importante</Text>
        <Text style={styles.textDetails}>
          Por questões técnicas, as mensagens enviadas no chat são apagadas a cada 15 dias.
          E não se preocupe,
          suas informações pessoais são mantidas seguras e as contas servem apenas para identificar seus comentários no chat.
          Nosso objetivo é oferecer um ambiente para que os usuários possam compartilhar suas ideias e aprender mais sobre criptomoedas.
        </Text>
        <Text style={styles.titleDetails}>Networking</Text>
        <Text style={styles.textDetails}>
          Converse com outros entusiastas de criptomoedas e aprenda ainda mais sobre esse fascinante mundo.
          Compartilhe suas ideias, dúvidas e opiniões no chat e expanda seu conhecimento!
        </Text>
        <Text style={styles.titleDetails}>Objetivo</Text>
        <Text style={styles.textDetails}>
          O Bittcsy foi desenvolvido com objetivo e foco em alcançar o público brasileiro e ajudar a conhecer e entender
          o mundo das criptomoedas, blockchain, auto custódia e segurança do patrimônio e muito mais...
        </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03051E',
    paddingTop: '15%',
    padding: 14,
  },
  text: {
    color: '#FFD369',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 14
  },
  input: {
    width: '100%',
    color: '#fff',
    padding: 6,
    backgroundColor: '#222831',
    borderRadius: 8,
    borderWidth: .5,
    borderColor: 'rgba(204, 204, 204, 0.4)',
    marginBottom: 14
  },
  button: {
    backgroundColor: '#ECB365',
    padding: 10,
    borderRadius: 8
  },
  buttonLogin: {
    backgroundColor: '#FFD369',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center'
  },
  textButton: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  containerRegister: {
    marginTop: 20,
    gap: 15,
    alignItems: 'center'
  },

  // detalhes
  containerDetails: {
    flexDirection: 'column',
    alignItems: 'center',
    borderWidth: .5,
    borderRadius: 14,
    marginTop: 25,
    marginBottom: 170,
  },
  titleDetails: {
    color: '#FFD369',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 7
  },
  textDetails: {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20
  },
})
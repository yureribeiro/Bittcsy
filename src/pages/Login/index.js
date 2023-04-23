import React, { useState } from 'react'
import { useNavigation } from "@react-navigation/native"
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native'
import axios from 'axios'
import { AuthContext } from '../../utils'

export function Login() {
  const navigation = useNavigation()
  const { setUserId } = useContext(AuthContext)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleLogin = async () => {
    try {
      const response = await axios.get('https://api-bitcsy-fwdsib4ha-yureribeiro.vercel.app/users')
      const users = response.data
      const userExists = users.some(user => user.name === name && user.email === email)
      if (userExists) {
        const user = users.find(user => user.name === name && user.email === email);
        setUserId(user.id)
        navigation.navigate('DiscussionTab')
      } else {
        alert('Dados inválidos, este usuário não existe!')
      }
    } catch (error) {
      console.error('Algo deu errado :(')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Faça Login para contribuir nas discussões da comunidade</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#fff"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#fff"
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
      >
        <Text style={styles.textButton}>Entrar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03051E',
    paddingTop: '15%',
    padding: 14,
    alignItems: 'center',
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
    backgroundColor: '#FFD369',
    padding: 10,
    borderRadius: 8
  },
  textButton: {
    fontSize: 16,
    fontWeight: 'bold'
  }
})
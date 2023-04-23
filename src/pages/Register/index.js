import React, { useState } from 'react'
import { useNavigation } from "@react-navigation/native"
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import axios from 'axios'

export function Register() {
  const navigation = useNavigation()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleRegister = () => {
    axios.post('https://api-bitcsy-fwdsib4ha-yureribeiro.vercel.app/users', {
      name,
      email,
    })
      .then(response => {
        console.log(response.data)
        alert('Usuário cadastrado com sucesso!')
        navigation.navigate('Login')
      })
      .catch(error => {
        console.log(error)
        alert('Algo deu errado :(')
      })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Registre seu nome de usuário para contribuir nas discussões</Text>
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
        onPress={handleRegister}
      >
        <Text style={styles.textButton}>Registrar</Text>
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
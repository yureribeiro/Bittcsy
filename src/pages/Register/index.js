import React, { useState } from 'react'
import { useNavigation } from "@react-navigation/native"
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { api } from '../../utils/api'

export function Register() {
  const navigation = useNavigation()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = async () => {
    try {
      await api.post('/user', { name, email, password })
      alert('Usuário cadastrado com sucesso!')
      navigation.navigate('Login')
    } catch (error) {
      console.log(error)
      alert('Desculpe, Algo deu errado. Tente novamente')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Registre seu nome de usuário para contribuir nas discussões</Text>

      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        placeholder="nome de usuário"
        placeholderTextColor="#fff"
        value={name}
        onChangeText={setName}
      />
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        placeholder="exemplo@exemplo.com"
        placeholderTextColor="#fff"
        value={email}
        onChangeText={setEmail}
      />
      <Text style={styles.label}>Senha:</Text>
      <TextInput
        style={styles.input}
        placeholder="*******"
        placeholderTextColor="#fff"
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleRegister}
      >
        <Text style={styles.textButton}>Registrar</Text>
      </TouchableOpacity>

      <View style={styles.details}>
        <Text style={styles.label}>
          Por questões técnicas, as mensagens enviadas no chat são apagadas a cada 15 dias.
          E não se preocupe,
          suas informações pessoais são mantidas seguras e as contas servem apenas para identificar seus comentários no chat.
        </Text>
        <Text style={styles.label}>
          O Bittcsy foi desenvolvido com objetivo e foco em alcançar o público brasileiro e ajudar a conhecer e entender
          o mundo das criptomoedas, blockchain, auto custódia e segurança do patrimônio e muito mais...
        </Text>
      </View>
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
  label: {
    color: '#fff',
    fontWeight: 'bold',
    width: '100%',
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
  },
  details: {
    margin: 20,
    width: '100%'
  }
})
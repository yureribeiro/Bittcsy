import React, { useState, useEffect, useCallback, useContext } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView, RefreshControl, ActivityIndicator } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { api } from '../../utils/api'
import { AuthContext } from '../../utils'

export function Discussion() {
  const { userId } = useContext(AuthContext)
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')
  const [refreshing, setRefreshing] = useState(false)

  useEffect(() => {
    async function getMessages() {
      try {
        const response = await api.get('/messages')
        setMessages(response.data)
      } catch (error) {
        console.log('erro na requisição ' + error)
      }
    }
    getMessages()
  }, [refreshing])

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    setTimeout(() => {
      setRefreshing(false)
    }, 2000)
  }, [])

  const handleSendMessage = async () => {
    const authorId = userId
    try {
      const { data } = await api.post(`/messages/${authorId}`, { content: newMessage })
      setMessages([...messages, data])
      console.log(`author Id: ${authorId}`)
      setNewMessage('')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.chat}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {refreshing ? <ActivityIndicator style={styles.activityIndicator} size='large' color='#fff' /> :
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5, paddingBottom: 14 }}>
            <MaterialIcons name='south' size={17} color='#fff' />
            <Text style={styles.description}>
              arraste para atualizar!
            </Text>
          </View>
        }
        {messages.map((message) => (
          <View
            key={message.id}
            style={styles.cardMessage}>
            <Text style={styles.authorMessage}>{message.author ? message.author.name : 'Eu'}</Text>
            <Text style={styles.contentMessage}>{message.content}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.input}>
        <TextInput
          style={styles.textInput}
          value={newMessage}
          onChangeText={setNewMessage}
          placeholder='digite sua mensagem'
          placeholderTextColor="#fff"
        />
        <TouchableOpacity
          onPress={handleSendMessage}
          style={styles.submitButton}
        >
          <Text style={styles.textButtom}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202138',
    paddingTop: '18%',
    padding: 10,
    flexDirection: 'column',
    gap: 14
  },
  description: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold'
  },
  chat: {
    paddingBottom: '5%',
    width: '100%',
    height: '70%',
    overflow: 'scroll',
    borderRadius: 14
  },
  cardMessage: {
    color: '#fff',
    backgroundColor: 'rgba(57, 62, 70, 0.46)',
    gap: 8,
    borderWidth: .5,
    borderColor: 'rgba(204, 204, 204, 0.6)',
    borderRadius: 14,
    padding: 10,
    marginBottom: 14
  },
  contentMessage: {
    color: '#fff',
    fontSize: 16,
  },
  authorMessage: {
    color: '#FFD369',
    fontWeight: 'bold',
    fontSize: 17,
  },

  // input messeges
  input: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#222831',
    borderRadius: 8,
    borderWidth: .5,
    borderColor: 'rgba(204, 204, 204, 0.6)',
    padding: 6,
    marginBottom: '28%'
  },
  textInput: {
    width: '70%',
    color: '#fff',
    fontSize: 16,
    padding: 6
  },
  submitButton: {
    width: '20%',
    alignItems: 'center',
    padding: 6,
    borderRadius: 8,
    borderWidth: .5,
    borderColor: 'rgba(204, 204, 204, 0.7)',
  },
  textButtom: {
    color: '#FFD369',
    padding: 6,
    fontWeight: 'bold',
    fontSize: 16,
  },

  activityIndicator: {
    marginBottom: 16
  }
}) 
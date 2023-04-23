import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Modal, TextInput } from 'react-native'
import NewDiscussion from '../../components/newDisc'
import { useNavigation } from "@react-navigation/native"
import { AuthContext } from '../../utils'
import axios from 'axios'

export function Discussion() {
  const navigation = useNavigation()
  const { userId } = useContext(AuthContext)
  const [loading, setLoading] = useState(true)
  const [discussions, setDiscussions] = useState([])
  const [modalDiscussionVisible, setModalDiscussionVisible] = useState(false) //para criar nova discussão
  const [showComments, setShowComments] = useState(false)

  const [newDiscussion, setNewDiscussion] = useState({
    title: '',
    content: '',
    authorId: userId,
  })

  const [newComment, setNewComment] = useState({
    content: '',
    authorId: userId,
    discussionId: 1
  })

  useEffect(() => {
    //recuperar discussões e comentários
    async function getDiscussions() {
      try {
        const response = await axios.get('https://api-bitcsy.vercel.app/discussions')
        setDiscussions(response.data)
        setLoading(false)
      } catch (error) {
        console.error(error)
        setLoading(false)
      }
    }
    getDiscussions()
  }, [])

  const handleRegister = () => {
    navigation.navigate('Register');
  }

  const handleLogin = () => {
    navigation.navigate('Login');
  }



  //modal nova discussão
  const handleNewDiscussion = () => {
    setModalDiscussionVisible(true)
  }

  const handleViewComments = () => {
    setShowComments(!showComments)
  }

  //post de nova discussão
  const handleSubmitDiscussion = async () => {
    const response = await axios.post('https://api-bitcsy.vercel.app/discussions', newDiscussion)
    setDiscussions([...discussions, response.data])
    setModalDiscussionVisible(false)
    setNewDiscussion({ title: '', content: '', authorId: 1 })
  }

  //post de novo comentário em alguma discussão
  const postComment = async () => {
    const response = await axios.post('https://api-bitcsy.vercel.app/comments', newComment)
    setDiscussions([...discussions.comments, response.data])
    setNewComment({ content: '', authorId: 1 })
  }

  return (
    <View style={styles.container}>
      <View style={{ margin: 20 }}>
        <Text style={styles.text}>Para iniciar uma discussão e adicionar comentários faça login na Bitcsy</Text>
      </View>

      <View style={styles.containerLogin}>
        <TouchableOpacity style={styles.buttonLogin} onPress={handleRegister}>
          <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 16 }}>Registrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonLogin} onPress={handleLogin}>
          <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 16 }}>Entrar</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.titlePage}>Discussões publicadas </Text>

      < TouchableOpacity onPress={handleNewDiscussion} style={styles.button}>
        <Text style={styles.text}>Criar nova discussão</Text>
      </TouchableOpacity >

      {loading ? ( // Renderiza um indicador de carregamento enquanto loading for true
        <Text style={styles.loading}>Carregando discussões...</Text>
      ) : (<FlatList
        style={styles.list}
        data={discussions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.discussionCard}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.text}>{item.content}</Text>
            <View style={styles.authorDiv}>
              <Text style={styles.credito}>Iniciou a discussão:</Text>
              <Text style={styles.author}>{item.author.name}</Text>
            </View>
            <TouchableOpacity onPress={() => handleViewComments(item.id)} style={styles.buttomComments}>
              <Text style={styles.textButtom}>Visualizar comentários</Text>
            </TouchableOpacity>


            <View style={showComments ? styles.commentsSection : [styles.commentsSection, styles.hidden]}>
              <FlatList
                style={styles.commentsList}
                data={item.comments}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <>
                    <Text style={styles.author}>{item.author.name}</Text>
                    <Text style={styles.text}>{item.content}</Text>
                  </>
                )}
              />
              <View style={styles.containerCommentInput}>
                <TextInput
                  style={styles.inputComment}
                  placeholder="Faça um comentário"
                  placeholderTextColor="#EEEEEE"
                  value={newComment.content}
                  onChangeText={(text) => setNewComment({ ...newComment, content: text })}
                />
                <TouchableOpacity onPress={postComment} style={styles.submitButtonText}>
                  <Text style={styles.submitButtonText}>Públicar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )
        }
      />)}

      < Modal Modal visible={modalDiscussionVisible} animationType="slide" transparent >
        <NewDiscussion
          newDiscussion={newDiscussion}
          setNewDiscussion={setNewDiscussion}
          handleSubmitDiscussion={handleSubmitDiscussion}
          setModalDiscussionVisible={setModalDiscussionVisible}
        />
      </Modal>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03051E',
    paddingTop: '10%',
  },
  containerLogin: {
    flexDirection: 'row',
    marginBottom: 10,
    paddingLeft: 15
  },
  buttonLogin: {
    backgroundColor: '#9BA4B5',
    color: '#000',
    marginBottom: 16,
    marginLeft: 15,
    borderRadius: 8,
    borderWidth: .5,
    borderColor: 'rgba(204, 204, 204, 0.4)',
    padding: 5
  },
  titlePage: {
    fontSize: 25,
    color: '#FFD369',
    fontWeight: 'bold',
    marginBottom: 14,
    paddingLeft: 20
  },
  button: {
    backgroundColor: '#393E46',
    width: '43%',
    marginBottom: 16,
    marginLeft: 40,
    borderRadius: 8,
    borderWidth: .5,
    borderColor: 'rgba(204, 204, 204, 0.6)',
    padding: 10
  },
  loading: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: '10%',
    marginTop: '5%'
  },
  list: {
    width: '90%',
    paddingLeft: '10%',
    marginBottom: '13%'
  },
  discussionCard: {
    fontSize: 18,
    gap: 10,
    color: '#FFD369',
    fontWeight: 'bold',
    borderRadius: 8,
    borderWidth: .5,
    borderColor: 'rgba(204, 204, 204, 0.6)',
    padding: 12,
    marginBottom: 14
  },
  title: {
    fontSize: 20,
    color: '#FFD369',
    fontWeight: 'bold',
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
  credito: {
    color: '#d3d3d3',
    fontSize: 15,
  },
  author: {
    fontSize: 16,
    color: '#FFD369',
    fontWeight: 'bold',
  },
  authorDiv: {
    flexDirection: 'row',
    gap: 10,
  },
  buttomComments: {
    width: '70%',
    borderRadius: 8,
    borderWidth: .5,
    borderColor: 'rgba(204, 204, 204, 0.6)',
    padding: 5,
  },
  textButtom: {
    fontSize: 18,
    color: '#9BA4B5',
    fontWeight: 'bold'
  },

  // comentários
  commentsSection: {

  },
  hidden: {
    display: 'none'
  },
  commentsList: {
    borderRadius: 8,
    borderWidth: .8,
    borderBottomColor: 'rgba(204, 204, 204, 0.4)',
    paddingBottom: 8,
    marginBottom: 14
  },
  containerCommentInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 6,
    backgroundColor: '#222831',
    borderRadius: 8,
    borderWidth: .5,
    borderColor: 'rgba(204, 204, 204, 0.4)',
    marginBottom: 14
  },
  inputComment: {
    width: '75%',
    color: '#fff'
  },
  submitButtonText: {
    fontSize: 16,
    color: '#576CBC',
    fontWeight: 'bold'
  },

}) 
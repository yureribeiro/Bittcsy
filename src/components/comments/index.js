import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native"
import TextArea from 'react-native-textarea'

const CommentsModal = ({ newComment, setNewComment, selectedDiscussion, setModalCommentsVisible, postComment }) => {

  return (
    <TouchableOpacity style={styles.modalBackground} onPress={() => setModalCommentsVisible(false)}>
      <View style={styles.modal}>

        <Text style={styles.discussionTitle}>{selectedDiscussion.title}</Text>
        <Text style={styles.discussionContent}>{selectedDiscussion.content}</Text>

        <FlatList
          style={styles.commentsList}
          data={selectedDiscussion.comments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.comment}>
              <Text style={styles.commentAuthor}>{item.author.name}:</Text>
              <Text style={styles.commentContent}>{item.content}</Text>
            </View>
          )}
        />
        <TextArea
          style={styles.commentInput}
          placeholder="Digite seu comentário"
          value={newComment.content}
          onChangeText={(text) => setNewComment({ ...newComment, content: text })}
        />
        <TouchableOpacity onPress={postComment} style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    height: '50%',
    width: '80%',
    borderRadius: 10,
    borderWidth: .5,
    borderColor: 'rgba(204, 204, 204, 0.8)',
    padding: 20,
    overflow: 'hidden',
    backgroundColor: '#03051E',
    alignItems: 'center'
  }
})



export default CommentsModal
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import TextArea from 'react-native-textarea'

const NewDiscussion = ({ newDiscussion, setNewDiscussion, handleSubmitDiscussion, setModalDiscussionVisible }) => {

  return (
    <TouchableOpacity style={styles.modalBackground} onPress={() => setModalDiscussionVisible(false)}>
      <View style={styles.modal}>
        <Text style={styles.modalTitle}>Criar nova discussão</Text>
        <TextInput
          style={styles.modalInput}
          placeholder="Título"
          placeholderTextColor="#EEEEEE"
          value={newDiscussion.title}
          onChangeText={(text) => setNewDiscussion({ ...newDiscussion, title: text })}
        />
        <TextArea
          style={styles.modalTextArea}
          placeholder="Conteúdo"
          placeholderTextColor="#EEEEEE"
          value={newDiscussion.content}
          onChangeText={(text) => setNewDiscussion({ ...newDiscussion, content: text })}
        />
        <View style={styles.inputs}>
          <TouchableOpacity style={styles.modalButton} onPress={handleSubmitDiscussion}>
            <Text style={styles.modalButtonText}>Criar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalButton} onPress={() => setModalDiscussionVisible(false)}>
            <Text style={styles.modalButtonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
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
  },
  modalTitle: {
    fontSize: 20,
    color: '#FFD369',
    fontWeight: 'bold',
    marginBottom: 14,
  },
  modalInput: {
    width: '100%',
    color: '#fff',
    padding: 6,
    backgroundColor: '#222831',
    borderRadius: 8,
    borderWidth: .5,
    borderColor: 'rgba(204, 204, 204, 0.4)',
    marginBottom: 14
  },
  modalTextArea: {
    height: 140,
    marginBottom: 0,
    width: '100%',
    color: '#fff',
    padding: 6,
    backgroundColor: '#222831',
    borderRadius: 8,
    borderWidth: .5,
    borderColor: 'rgba(204, 204, 204, 0.4)',
    textAlignVertical: 'top',
  },
  inputs: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 30
  },
  modalButton: {
    backgroundColor: '#393E46',
    alignItems: 'center',
    width: '25%',
    borderRadius: 8,
    borderWidth: .5,
    borderColor: 'rgba(204, 204, 204, 0.6)',
    padding: 5
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
})

export default NewDiscussion
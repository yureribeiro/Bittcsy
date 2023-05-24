import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

const ErrorTranslate = ({ error, onClose }) => {
  return (
    <View id="divtranslate" style={styles.divTranslateError}>
      <Text style={styles.translateErrorText}>{error}</Text>
      <TouchableOpacity onPress={onClose} style={styles.buttonClose}>
        <Text style={styles.textButtonError}>OK</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  divTranslateError: {
    alignItems: 'center',
    backgroundColor: '#03051E',
    borderColor: 'rgba(204, 204, 204, 0.6)',
    borderWidth: .5,
    borderRadius: 14,
    padding: 5,
    margin: 12,
  },
  translateErrorText: {
    color: '#FFD369',
    fontWeight: 'bold',
    fontSize: 18,
    margin: 10,
  },
  buttonClose: {
    width: 120,
    padding: 16,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'rgba(57, 62, 70, 0.56)',
    borderWidth: .5,
    borderRadius: 10,
    borderColor: 'rgba(204, 204, 204, 0.6)',
    alignItems: 'center'
  },
  textButtonError: {
    color: '#FFD369',
    fontWeight: 'bold',
    fontSize: 17,
  }
})

export default ErrorTranslate
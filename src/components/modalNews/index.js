import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { Feather } from '@expo/vector-icons'
import { WebView } from 'react-native-webview'

export function DetailsNews({ linkUrl, handleClose }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleClose} style={styles.backButton}>
        <Feather name='arrow-left' size={30} color='#fff' />
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>
      <WebView
        style={styles.contentView}
        source={{ uri: linkUrl }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingTop: '9%'
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#03051E',
    paddingStart: 18,
    height: 50,
    width: '100%',
  },
  backText: {
    fontSize: 20,
    color: '#fff',
    paddingStart: 10,
    fontWeight: 'bold'
  },
  contentView: {
    flex: 1,
    width: '100%'
  }
})

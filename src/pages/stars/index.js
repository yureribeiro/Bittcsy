import { View, Text, StyleSheet } from 'react-native'

export function Stars() {
  return (
    <View style={styles.container}>
      <Text>pagina starts!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '10%'
  }
})
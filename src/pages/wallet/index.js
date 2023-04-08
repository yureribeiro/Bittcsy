import { View, Text, StyleSheet, ScrollView, Image, Share } from 'react-native'
import { Chart } from '../../components/piechart'

export function Wallet({ }) {
  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 14 }} style={styles.container} showsVerticalScrollIndicator={false}>
      <View>
        <Text>HOME DETAILS</Text>
        <Chart data={data} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f9ff',
    padding: 14
  }
}) 
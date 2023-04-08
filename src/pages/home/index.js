import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, FlatList } from 'react-native'
import axios from 'axios'
import { Coin } from '../../components/coins'

export function Home() {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    async function getCoins() {
      await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
        .then(res => {
          console.log(res.data)
          setCoins(res.data)
        })
        .catch(error => console.log(error))
    }
    getCoins()
  }, [])

  const handleSearch = text => {
    setSearch(text)
    const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(text.toLowerCase()))
    setCoins(filteredCoins)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.filter}>
        <TextInput
          style={styles.input}
          placeholder='Procure por uma cripto...'
          placeholderTextColor="#EEEEEE"
          onChangeText={handleSearch}
          value={search}
        />
      </View>
      <View style={styles.filter}>
        <Text style={styles.text}>Stats Coins</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={coins}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Coin data={item} />}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //garante que cubra toda a tela!
    backgroundColor: '#03051E',
    paddingTop: 36,
    paddingStart: 14,
    paddingEnd: 14
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  filter: {
    marginBottom: 14
  },
  input: {
    width: '100%',
    color: '#fff',
    padding: 10,
    backgroundColor: '#222831',
    borderRadius: 8,
    borderWidth: .5,
    borderColor: 'rgba(204, 204, 204, 0.4)'
  }
})

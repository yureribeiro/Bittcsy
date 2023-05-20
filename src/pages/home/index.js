import { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, StyleSheet, SafeAreaView, TextInput, FlatList, ActivityIndicator } from 'react-native'
import { Coin } from '../../components/coins'
import axios from 'axios'

export function Home() {
  const navigation = useNavigation()
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function getCoins() {
      setLoading(true)
      await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=70&page=1&sparkline=false')
        .then(res => {
          setCoins(res.data)
          setLoading(false)
        })
        .catch(error => console.log(error))
      setLoading(false)
    }
    getCoins()
  }, [])

  const handleChange = (text) => {
    setSearch(text)
  }

  const handleCoinPress = (coin) => {
    navigation.navigate('Details', { coin })
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.filter}>
        <TextInput
          style={styles.input}
          placeholder='Procure por uma cripto...'
          placeholderTextColor="#EEEEEE"
          onChangeText={handleChange}
          value={search}
        />
      </View>
      <View style={styles.filter}>
        <Text style={styles.text}>Acompanhe o Mercado</Text>
        <Text style={{ color: '#fff', paddingTop: 10 }}>Selecione para mais detalhes</Text>
      </View>
      {loading ? (
        <ActivityIndicator style={styles.loading} size="large" color="#fff" marginTop={25} />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()))}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Coin data={item} onPress={handleCoinPress} />
          )}
          ListEmptyComponent={() => (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>Nenhuma moeda encontrada...</Text>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03051E',
    paddingTop: '10%',
    paddingStart: 14,
    paddingEnd: 14,
  },
  text: {
    color: '#FFD369',
    fontWeight: 'bold',
    fontSize: 18,
    fontWeight: 'bold'
  },
  filter: {
    marginBottom: 14,
    paddingTop: 10
  },
  input: {
    width: '100%',
    color: '#fff',
    padding: 10,
    backgroundColor: '#222831',
    borderRadius: 8,
    borderWidth: .5,
    borderColor: 'rgba(204, 204, 204, 0.4)'
  },

  emptyContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
    marginLeft: '20%',
    marginTop: '20%',
    backgroundColor: '#222831',
    padding: 14,
    borderRadius: 10
  },
  emptyText: {
    color: '#fff',
  }
})

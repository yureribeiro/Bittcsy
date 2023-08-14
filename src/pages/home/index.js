import { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, StyleSheet, TextInput, FlatList, ActivityIndicator } from 'react-native'
import { Coin } from '../../components/coins'
import axios from 'axios'
import { TouchableOpacity } from 'react-native-gesture-handler'

export function Home() {
  const navigation = useNavigation()
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [currency, setCurrency] = useState('usd')

  useEffect(() => {
    async function getCoins() {
      setLoading(true)
      await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=70&page=1&sparkline=false`)
        .then(res => {
          setCoins(res.data)
          setLoading(false)
        })
        .catch(error => console.log(error))
      setLoading(false)
    }
    getCoins()
  }, [currency])

  const handleChangeSearch = (text) => {
    setSearch(text)
  }

  const handleCoinPress = (coin) => {
    navigation.navigate('Details', { coin })
  }

  const handleChangeUSD = () => {
    setCurrency('usd')
  }

  const handleChangeBRL = () => {
    setCurrency('brl')
  }


  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.text}>Acompanhe o Mercado</Text>
      </View>
      <View style={styles.filter}>
        <TextInput
          style={styles.input}
          placeholder='Procure por uma cripto...'
          placeholderTextColor="#EEEEEE"
          onChangeText={handleChangeSearch}
          value={search}
        />
        <View style={styles.contentButtons}>
          <TouchableOpacity style={styles.buttonUSD} onPress={handleChangeUSD}>
            <Text style={styles.textButton}>USD</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonBRL} onPress={handleChangeBRL}>
            <Text style={styles.textButton}>BRL</Text>
          </TouchableOpacity>
        </View>
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
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202138',
    paddingTop: '10%',
    paddingStart: 14,
    paddingEnd: 14,
    paddingBottom: 100
  },
  text: {
    color: '#FFD369',
    fontWeight: 'bold',
    fontSize: 22,
    fontWeight: 'bold'
  },
  filter: {
    marginBottom: 17,
  },
  input: {
    width: '100%',
    color: '#fff',
    fontSize: 18,
    padding: 12,
    backgroundColor: '#222831',
    borderRadius: 8,
    borderWidth: .5,
    borderColor: 'rgba(204, 204, 204, 0.4)',
    marginBottom: 8
  },
  containerTitle: {
    marginBottom: 10,
  },
  contentButtons: {
    marginTop: 8,
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  buttonUSD: {
    fontSize: 18,
    padding: 12,
    backgroundColor: '#222831',
    borderRadius: 8,
    borderWidth: .8,
    borderColor: '#5800FF'
  },
  buttonBRL: {
    fontSize: 18,
    padding: 12,
    backgroundColor: '#222831',
    borderRadius: 8,
    borderWidth: .8,
    borderColor: '#3EC70B'
  },
  textButton: {
    color: '#fff'
  },

  emptyContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    marginLeft: '15%',
    marginTop: '20%',
    backgroundColor: '#222831',
    padding: 14,
    borderRadius: 10
  },
  emptyText: {
    color: '#fff',
    fontSize: 17
  }
})

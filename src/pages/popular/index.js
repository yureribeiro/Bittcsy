import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView, Image, ActivityIndicator } from 'react-native'
import axios from 'axios'

export function Popular() {
  const [trend, setTrend] = useState([])

  useEffect(() => {
    async function fetchTrend() {
      const response = await axios.get('https://api.coingecko.com/api/v3/search/trending')
      setTrend(response.data.coins)
    }
    fetchTrend()
  }, [])

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: '27%' }} style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={{ padding: 15, marginBottom: 20, gap: 10 }}>
        <Text style={{ color: '#FFD369', fontSize: 24, fontWeight: 'bold' }}>As 7 moedas mais populares</Text>
        <Text style={{ color: '#fff', fontSize: 18 }}>baseado em pesquisas dos usuários nas últimas 24 horas (coinGecko)</Text>
        <Text style={styles.text}>(ordenadas por popularidade)</Text>
      </View>
      <View style={styles.trend}>
        {trend.length === 0 ? (
          <ActivityIndicator
            fontSize={30}
            color='#fff'
          />
        ) : (
          trend.map((coin, index) => {
            return (
              <View key={coin.item.id} style={styles.containerTrend}>
                <View style={styles.trendCoin}>
                  <View style={{ flexDirection: 'row', gap: 10 }}>
                    <Text style={styles.index}>{index + 1}</Text>
                    <Image
                      source={{ uri: coin.item.large }}
                      style={styles.image}
                    />
                  </View>
                  <View style={{ flexDirection: 'row', gap: 15 }}>
                    <Text style={styles.text}>{coin.item.name}</Text>
                    <Text style={styles.symbol}>{coin.item.symbol}</Text>
                  </View>
                </View>
              </View>
            )
          })
        )}
        <Text style={{ color: '#FFD369', marginBottom: 10, fontSize: 19 }}>
          fonte: CoinGecko
        </Text>
        <Text style={{ color: '#fff', marginBottom: 14, fontSize: 19 }}>
          CoinGecko fornece uma análise fundamental do mercado de criptomoedas.
        </Text>
      </View>
    </ScrollView >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202138',
    paddingTop: '5%',
  },
  loading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  },
  trend: {
    width: '80%',
    marginLeft: '10%',
  },
  trendCoin: {
    gap: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    backgroundColor: '#222831',
    borderRadius: 8,
    borderWidth: .5,
    borderColor: 'rgba(204, 204, 204, 0.4)',
    padding: 6,
  },
  index: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  image: {
    width: 40,
    height: 40
  },
  symbol: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#FFD369',
  },
})
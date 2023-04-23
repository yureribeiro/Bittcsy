import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
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
      <View style={{ marginLeft: 30, marginBottom: 20 }}>
        <Text style={{ color: '#fff', fontSize: 16 }}>As 7 moedas mais populares</Text>
        <Text style={{ color: '#fff', marginBottom: 14, fontSize: 16 }}>baseado em pesquisas dos usuários nas últimas 24 horas</Text>
        <Text style={styles.text}>(ordenadas por popularidade)</Text>
      </View>
      <View style={styles.trend}>
        {trend.length === 0 ? (
          <Text style={styles.loading}>Carregando...</Text>
        ) : (
          trend.map((coin, index) => {
            return (
              <View key={coin.item.id} style={styles.containerTrend}>
                <View style={styles.trendCoin}>
                  <View style={{ flexDirection: 'row', gap: 10 }}>
                    <Text style={styles.index}>{index + 1}   </Text>
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
        <Text style={{ color: '#fff', marginBottom: 14, fontSize: 16 }}>
          fonte: CoinGecko
        </Text>
        <Text style={{ color: '#fff', marginBottom: 14, fontSize: 16 }}>
          CoinGecko fornece uma análise fundamental do mercado de criptomoedas.
        </Text>
      </View>
    </ScrollView >
  )
}
// 4faae1745ee545949fb759c797e8b036
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03051E',
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
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold'
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  image: {
    width: 30,
    height: 30
  },
  symbol: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFD369',
  },
})
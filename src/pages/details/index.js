import { useState, useEffect } from 'react'
import { View, ScrollView, Text, StyleSheet, Image } from 'react-native'
import { useRoute } from '@react-navigation/native'
import useWebSocket from 'react-use-websocket'
import { LineChart } from 'react-native-chart-kit'
import { ActivityIndicator } from 'react-native'

export function Details() {
  const route = useRoute()
  const { coin } = route.params
  const [historicalPrice, setHistoricalPrice] = useState([0]);
  const [websocketUrl, setWebsocketUrl] = useState(`wss://stream.binance.com:9443/ws/${coin.symbol.toLowerCase()}usdt@kline_5m`)
  const [websocketLoading, setWebsocketLoading] = useState(true)

  useEffect(() => {
    setWebsocketUrl(`wss://stream.binance.com:9443/ws/${coin.symbol.toLowerCase()}usdt@kline_5m`)
  }, [coin.symbol])

  const updateHistoricalData = (newData) => {
    if (!isNaN(newData)) {
      setHistoricalPrice((prevData) => [...prevData.slice(-20), newData]);
    }
  };

  // Move o hook useWebSocket para fora do componente
  const { readyState, lastJsonMessage } = useWebSocket(websocketUrl, {
    onOpen: () => {
      console.log('WebSocket opened')
      setWebsocketLoading(false)
    },
    onError: (event) => console.log(` error event: ${event}`),
    shouldReconnect: (closeEvent) => console.log(` close event: ${closeEvent}`),
    reconnectInterval: 60000,
    onMessage: (event) => {
      if (lastJsonMessage) {
        const price = parseFloat(lastJsonMessage.k.o); // Utiliza o preço de abertura como valor Y
        console.log(price);
        updateHistoricalData(Number(price));
      }
    },
    onReconnectStop: () => {
      console.log('Reconnect stopped');
    }
  });

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: '27%' }} style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.coin}>
        <Image
          style={styles.image}
          source={{ uri: coin.image }}
        />
        <View>
          <Text style={styles.name}>{coin.name}</Text>
          <Text style={styles.name}>({coin.symbol.toUpperCase()})</Text>
        </View>
      </View>
      {
        // verificar se historicalPrice esta vazio
        websocketLoading || readyState !== 1 ? (
          <ActivityIndicator
            style={styles.loading} size="large" color="#fff" marginBottom={25}
          />
        ) : (
          <LineChart
            data={{
              labels: historicalPrice.map((data) => ''),
              datasets: [{ data: historicalPrice, strokeWidth: 1 }],
            }}
            width={350}
            height={220}
            chartConfig={{
              backgroundColor: '#222831',
              backgroundGradientFrom: '#EEEEEE',
              backgroundGradientTo: '#FFD369',
              decimalPlaces: 0, // Define a quantidade de casas decimais a serem exibidas no eixo Y
              style: {
                borderRadius: 16,
              },
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        )
      }



      <View style={styles.list}>
        <Text style={styles.text}>Rank: {coin.market_cap_rank}</Text>
      </View>
      <View style={styles.price}>
        <Text style={styles.text}>Price: {coin.current_price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</Text>
        <Text
          style={[styles.porcent, coin.price_change_percentage_24h >= 0 ?
            styles.positive : styles.negative]}>
          {coin.price_change_percentage_24h.toFixed(2)}%
        </Text>
      </View>
      <View style={styles.list}>
        <Text style={styles.text}>
          Market cap: {coin.market_cap.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
        </Text>
      </View>
      <View style={styles.list}>
        <Text style={styles.text}>
          Volume: {coin.total_volume.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
        </Text>
      </View>
      <View style={styles.list}>
        <Text style={styles.text}>
          Hight 24H: {coin.high_24h.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
        </Text>
      </View>
      <View style={styles.list}>
        <Text style={styles.text}>
          Low 24H: {coin.low_24h.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202138',
    paddingLeft: '10%',
    paddingTop: 10
  },
  coin: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    marginBottom: 14
  },
  name: {
    fontSize: 24,
    color: '#FFD369',
    fontWeight: 'bold',
    paddingLeft: 25
  },
  image: {
    height: 100,
    width: 100
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  list: {
    width: '90%',
    padding: 10,
    backgroundColor: '#222831',
    borderRadius: 8,
    borderWidth: .5,
    borderColor: 'rgba(204, 204, 204, 0.4)',
    marginBottom: 14
  },
  price: {
    width: '90%',
    padding: 10,
    backgroundColor: '#222831',
    borderRadius: 8,
    borderWidth: .5,
    borderColor: 'rgba(204, 204, 204, 0.4)',
    marginBottom: 14,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  porcent: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },
  positive: {
    color: '#16FF00'
  },
  negative: {
    color: '#F96666'
  }
})




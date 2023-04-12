import { useRoute } from '@react-navigation/native'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'

export function Details() {
  const route = useRoute();
  const { coin } = route.params;

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
    backgroundColor: '#03051E',
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
    fontSize: 20,
    color: '#FFD369',
    fontWeight: 'bold',
    marginBottom: 14
  },
  image: {
    height: 100,
    width: 100
  },
  text: {
    color: '#fff',
    fontSize: 16,
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
    fontWeight: 'bold',
    color: 'white'
  },
  positive: {
    color: 'green'
  },
  negative: {
    color: 'red'
  }
})
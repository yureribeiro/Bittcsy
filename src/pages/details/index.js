import { useRoute } from '@react-navigation/native'
import { View, Text, StyleSheet, Image } from 'react-native'

export function Details() {
  const route = useRoute();
  const { coin } = route.params;

  console.log('Coin:', coin);

  return (
    <View style={styles.container}>
      <Text>{coin.name}</Text>
      <Image
        style={styles.image}
        source={{ uri: coin.image }} />
      <Text>Symbol: {coin.symbol}</Text>
      <Text>Current price: ${coin.current_price}</Text>
      <Text>Market cap: ${coin.market_cap}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    height: 100,
    width: 100
  }
})
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native"

export function Coin({ data, onPress }) {

  return (
    <TouchableOpacity activeOpacity={0.9} style={styles.container} onPress={() => onPress(data)}>
      <View style={styles.criptoContent}>
        <View style={styles.cripto}>
          <View style={styles.imageView}>
            {/* icone cripto */}
            <Image
              source={{ uri: data.image }}
              style={styles.image}
            />
          </View>
          {/* name and symbol */}
          <View>
            <Text style={styles.name}>{data.name}</Text>
            <Text style={styles.symbol}>{data.symbol.toUpperCase()}</Text>
          </View>
        </View>
        {/* price and porcentage */}
        <View style={styles.porcentView}>
          <Text style={styles.name}>{data.current_price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</Text>
          <Text
            style={[styles.porcent, data.price_change_percentage_24h >= 0 ?
              styles.positive : styles.negative]}>
            {data.price_change_percentage_24h.toFixed(2)}%
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 14,
  },
  criptoContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 14,
    paddingEnd: 20
  },
  cripto: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageView: {
    backgroundColor: '#474E68',
    borderRadius: 8,
    padding: 5
  },
  image: {
    width: 36,
    height: 36,
  },
  name: {
    fontSize: 17.5,
    color: '#fff',
    paddingLeft: 10,
    fontWeight: 'bold'
  },
  symbol: {
    fontSize: 16,
    paddingLeft: 10,
    color: '#FFD369',
    fontWeight: 'bold'
  },
  porcentView: {
    flexDirection: 'column',
    alignItems: 'flex-end'
  },
  porcent: {
    fontSize: 16.5,
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



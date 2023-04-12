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
    width: 35,
    height: 35,
  },
  name: {
    paddingLeft: 10,
    color: '#fff',
    fontWeight: 'bold'
  },
  symbol: {
    paddingLeft: 10,
    color: '#FFD369',
    fontWeight: 'bold'
  },
  porcentView: {
    flexDirection: 'column',
    alignItems: 'flex-end'
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



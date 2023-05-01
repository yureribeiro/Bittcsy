import { useContext } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'
import newImage from '../../../assets/news-image.jpg'
import worldImage from '../../../assets/world-image.jpg'
import discussion from '../../../assets/discussion.jpg'
import { useNavigation } from "@react-navigation/native"
import { LinearGradient } from 'expo-linear-gradient'
import { AuthContext } from '../../utils'

export function World() {
  const { userId } = useContext(AuthContext);
  const navigation = useNavigation()

  function handleNavigate(screen) {
    if (screen === 'DiscussionTab' && userId === null) {
      navigation.navigate('Login')
      return
    }
    navigation.navigate({ name: screen })
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Fique por dentro</Text>
      <Text style={styles.title}>do mundo cripto!</Text>

      <View style={styles.cards}>

        <TouchableOpacity style={styles.content} activeOpacity={0.7} onPress={() => handleNavigate('NewsTab')}>
          <Image source={newImage} style={styles.images} />
          <Text style={styles.text}>Últimas notícias</Text>
          <Text style={styles.description}>Se mantenha atualizado com notícias do mercado cripto</Text>
          <LinearGradient
            style={styles.gradient}
            colors={['transparent', 'rgba(0, 0, 0, 0.70)', 'rgba(0, 0, 0, 0.95)']}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.content} activeOpacity={0.7} onPress={() => handleNavigate('DiscussionTab')}>
          <Image source={discussion} style={styles.images} />
          <Text style={styles.text}>Forum de Discussões</Text>
          <Text style={styles.description}>Faça login e contribua com o chat único da comunidade</Text>
          <LinearGradient
            style={styles.gradient}
            colors={['transparent', 'rgba(0, 0, 0, 0.70)', 'rgba(0, 0, 0, 0.95)']}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.content} activeOpacity={0.7} onPress={() => handleNavigate('Popular')}>
          <Image source={worldImage} style={styles.images} />
          <Text style={{ ...styles.text, bottom: 45 }}>Criptos populares</Text>
          <Text style={{ ...styles.description, bottom: 22 }}>7 criptos mais pesquisadas na CoinGecko</Text>
          <LinearGradient
            style={styles.gradient}
            colors={['transparent', 'rgba(0, 0, 0, 0.70)', 'rgba(0, 0, 0, 0.95)']}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03051E',
    paddingTop: '15%',
    paddingLeft: '10%'
  },
  cards: {
    marginTop: 14,
    gap: 20,
    paddingBottom: '50%'
  },
  title: {
    color: '#FFD369',
    fontSize: 26,
    fontWeight: 'bold',
  },
  content: {
    borderWidth: .5,
    borderColor: 'rgba(204, 204, 204, 0.6)',
    borderRadius: 14,
    height: 195,
    width: '90%'
  },
  images: {
    width: '100%',
    height: '100%',
    borderRadius: 14
  },
  text: {
    color: '#fff',
    fontSize: 21,
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 54,
    left: 20,
    zIndex: 99
  },
  description: {
    fontStyle: 'italic',
    color: '#fff',
    fontSize: 15,
    position: 'absolute',
    bottom: 15,
    left: 20,
    zIndex: 99
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '55%',
    borderRadius: 14,
    zIndex: 1,
    backgroundColor: 'transparent'
  }
})
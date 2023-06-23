import { useContext, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated'
import newsImage from '../../../assets/news-image.jpg'
import worldImage from '../../../assets/world-image.jpg'
import discussion from '../../../assets/discussion.jpg'
import Learn from '../../../assets/learn.jpg'
import mercadoImage from '../../../assets/mercadocripto.jpg'

import { useNavigation, useIsFocused } from "@react-navigation/native"
import { LinearGradient } from 'expo-linear-gradient'
import { AuthContext } from '../../utils'

export function World() {
  const { userId } = useContext(AuthContext)
  const navigation = useNavigation()
  const isFocused = useIsFocused()
  const fadeInValue = useSharedValue(0)

  useEffect(() => {
    if (isFocused) {
      fadeInValue.value = withTiming(1, {
        duration: 800,
        easing: Easing.linear,
      })
    }
  }, [isFocused])

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: fadeInValue.value,
    }
  })

  function handleNavigate(screen) {
    if (screen === 'DiscussionTab' && userId === null) {
      navigation.navigate('Login')
      return
    }
    navigation.navigate({ name: screen })
  }

  return (
    <ScrollView style={styles.container}>
      <Animated.View style={animatedStyle}>
        <Text style={styles.title}>Acompanhe o Mundo Cripto!</Text>
      </Animated.View>

      <View style={styles.cards}>
        <Animated.View style={animatedStyle}>
          <Text style={{ color: '#fff', fontSize: 22, fontWeight: 'bold' }}>Navegue pelo app</Text>
        </Animated.View>
        <Animated.View style={animatedStyle}>
          <TouchableOpacity style={styles.content} activeOpacity={0.7} onPress={() => handleNavigate('WorldTab')}>
            <Image source={mercadoImage} style={styles.images} />
            <Text style={styles.text}>Mercado Cripto</Text>
            <Text style={styles.description}>Acompanhe a cotação e o status das criptomoedas</Text>
            <LinearGradient
              style={styles.gradient}
              colors={['transparent', 'rgba(0, 0, 0, 0.70)', 'rgba(0, 0, 0, 0.95)']}
            />
          </TouchableOpacity>
        </Animated.View>

        <Animated.View style={animatedStyle}>
          <TouchableOpacity style={styles.content} activeOpacity={0.7} onPress={() => handleNavigate('NewsTab')}>
            <Image source={newsImage} style={styles.images} />
            <Text style={styles.text}>Últimas notícias</Text>
            <Text style={styles.description}>Se mantenha atualizado com notícias do mercado cripto</Text>
            <LinearGradient
              style={styles.gradient}
              colors={['transparent', 'rgba(0, 0, 0, 0.70)', 'rgba(0, 0, 0, 0.95)']}
            />
          </TouchableOpacity>
        </Animated.View>

        <Animated.View style={animatedStyle}>
          <TouchableOpacity style={styles.content} activeOpacity={0.7} onPress={() => handleNavigate('DiscussionTab')}>
            <Image source={discussion} style={styles.images} />
            <Text style={styles.text}>Forum de Discussões</Text>
            <Text style={styles.description}>Faça login e contribua com o chat da comunidade</Text>
            <LinearGradient
              style={styles.gradient}
              colors={['transparent', 'rgba(0, 0, 0, 0.70)', 'rgba(0, 0, 0, 0.95)']}
            />
          </TouchableOpacity>
        </Animated.View>

        <Animated.View style={animatedStyle}>
          <TouchableOpacity style={styles.content} activeOpacity={0.7} onPress={() => handleNavigate('Learn')}>
            <Image source={Learn} style={styles.images} />
            <Text style={styles.text}>Aprenda mais sobre Blockchain e Bitcoin</Text>
            <Text style={styles.description}>Como essas tecnologias revolucionárias está mudando o mundo!</Text>
            <LinearGradient
              style={styles.gradient}
              colors={['transparent', 'rgba(0, 0, 0, 0.70)', 'rgba(0, 0, 0, 0.95)']}
            />
          </TouchableOpacity>
        </Animated.View>

        <Animated.View style={animatedStyle}>
          <TouchableOpacity style={styles.content} activeOpacity={0.7} onPress={() => handleNavigate('Popular')}>
            <Image source={worldImage} style={styles.images} />
            <Text style={{ ...styles.text, bottom: 45 }}>Criptos populares</Text>
            <Text style={{ ...styles.description, bottom: 22 }}>7 criptos mais pesquisadas na CoinGecko</Text>
            <LinearGradient
              style={styles.gradient}
              colors={['transparent', 'rgba(0, 0, 0, 0.70)', 'rgba(0, 0, 0, 0.95)']}
            />
          </TouchableOpacity>
        </Animated.View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25334C',
    paddingTop: '12%',
    paddingLeft: '5%'
  },
  title: {
    color: '#FFD369',
    fontSize: 26,
    fontWeight: 'bold',
  },
  cards: {
    marginTop: 14,
    gap: 20,
    paddingBottom: '50%'
  },
  content: {
    borderWidth: 1,
    borderColor: '#ffffffbf',
    borderRadius: 14,
    height: 195,
    width: '95%',
    overflow: 'hidden',
  },
  images: {
    width: '100%',
    height: '100%',
    borderRadius: 14
  },
  text: {
    color: '#ffd36a',
    fontSize: 22,
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 56,
    left: 20,
    zIndex: 99
  },
  description: {
    width: '90%',
    fontStyle: 'italic',
    color: '#fff',
    fontSize: 17,
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
    height: '65%',
    borderRadius: 14,
    zIndex: 1,
    backgroundColor: 'transparent'
  }
})
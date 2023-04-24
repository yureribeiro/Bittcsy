import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import logoNews from '../../../assets/poweredby_nytimes_30a.jpg'
import axios from 'axios'

export function News() {
  const [news, setNews] = useState([])

  useEffect(() => {
    async function getNews() {
      const response = await axios.get('https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=dhMClOdIxGxgS9POjHxSOkcp9IQgSXRz')
      console.log(response.data)
    }
    getNews()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Últimas Notícias de Tecnologia
      </Text>
      <Text>
        Dados fornecidos pelo The New York Times
      </Text>
      <Image source={logoNews} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03051E',
    paddingTop: '10%',
    paddingStart: 14,
    paddingEnd: 14,
  },
  title: {
    color: '#FFD369',
    fontWeight: 'bold',
    fontSize: 22,
    fontWeight: 'bold'
  },
  credits: {
    color: '#fff'
  }
})
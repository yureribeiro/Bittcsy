import { useState, useEffect, useCallback } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator, RefreshControl } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import axios from 'axios'
import ErrorTranslate from '../../components/tranlateError'

export function News() {
  const [news, setNews] = useState([])
  const [refreshing, setRefreshing] = useState(false)
  const [translatedNews, setTranslatedNews] = useState([])
  const [translationError, setTranslationError] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function getNews() {
      try {
        setLoading(true)
        await axios.get(`https://cryptopanic.com/api/v1/posts/?auth_token=9a983942ff49f9df6c185a86344c58d6e898ddb2&public=true`)
          .then(res => {
            setNews(res.data.results)
            setLoading(false)
          })
      } catch (error) {
        console.log(error)
      }
    }
    getNews()
  }, [])

  async function translateText(text) {
    try {
      const response = await fetch(`https://translation.googleapis.com/language/translate/v2?key=AIzaSyDH1LKLHA3DBxHlQMC1yGNfpcEGCYmQ7k4&q=${text}&target=pt-br`, {
        method: 'POST'
      })
      const json = await response.json()
      return json.data.translations[0].translatedText
    } catch (error) {
      console.error(error)
      throw new Error('Ocorreu um erro ao traduzir o texto. Por favor, tente novamente.')
    }
  }

  async function handleTranslate(item) {
    try {
      const translatedTitle = await translateText(item.title)
      setTranslatedNews([...translatedNews, { ...item, title: translatedTitle }])
    } catch (error) {
      console.error(error.message)
      setTranslationError((prevErrors) => ({
        ...prevErrors,
        [item.id]: error.message,
      }))
    }
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    setTimeout(() => {
      setRefreshing(false)
    }, 2000)
  }, [])

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {refreshing ? <ActivityIndicator size='large' color='#fff' /> :
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5, paddingBottom: 14 }}>
          <MaterialIcons name='south' size={17} color='#fff' />
          <Text style={styles.updatedPage}>
            arraste para atualizar!
          </Text>
        </View>
      }
      <Text style={styles.title}>
        Últimas Notícias
      </Text>
      {loading ? (
        <ActivityIndicator size="large" color="#fff" marginTop={25} />
      ) : (
        news.map((item, index) => {
          const translatedItem = translatedNews.find((i) => i.id === item.id)
          const error = translationError[item.id]
          return (
            <View key={item.id} style={styles.cardNews}>
              <Text style={styles.titleCard}>{translatedItem ? translatedItem.title : item.title}</Text>
              {error && (
                <ErrorTranslate error={error} onClose={() => setTranslationError(prevErrors => ({ ...prevErrors, [item.id]: null }))} />
              )}
              <View style={styles.detailsNews}>
                <Text style={styles.domain}>{item.domain}</Text>
                <TouchableOpacity style={styles.buttonTranslated} onPress={() => handleTranslate(item)}>
                  <Text style={styles.translateText}>traduzir notícia</Text>
                  <Text style={styles.translateText}>{index + 1}</Text>
                </TouchableOpacity>
              </View>
            </View>
          )
        })
      )}

      <View style={styles.credits}>
        <Text style={{ ...styles.textCredits, color: '#FFD369', fontWeight: 'bold' }}>
          Fonte: CryptoPanic
        </Text>
        <Text style={styles.textCredits}>
          Notícias completas em breve com Bittcsy PRO.
        </Text>
        <Text style={styles.textCredits}>
          Em caso de muitos acessos, aguarde um momento e atualize a página.
        </Text>
      </View>
    </ScrollView >
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202138',
    paddingTop: '10%',
    paddingStart: 14,
    paddingEnd: 14,
  },
  title: {
    color: '#FFD369',
    fontWeight: 'bold',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 14,
    marginBottom: 20
  },

  // notícias
  cardNews: {
    backgroundColor: 'rgba(57, 62, 70, 0.56)',
    gap: 8,
    borderWidth: .5,
    borderColor: 'rgba(204, 204, 204, 0.6)',
    borderRadius: 14,
    padding: 15,
    marginBottom: 16
  },
  titleCard: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },

  // tradução
  detailsNews: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  domain: {
    color: '#C4DFDF',
    fontWeight: 'bold',
    fontSize: 18
  },
  buttonTranslated: {
    flexDirection: 'row',
    gap: 5,
    padding: 16
  },
  translateText: {
    color: '#FFD369',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 18,
  },

  // creditos da pagina
  credits: {
    marginTop: 14,
    marginBottom: '45%',
  },
  textCredits: {
    fontSize: 18,
    color: '#fff',
    fontStyle: 'italic'
  },

  // loading ao carregar as noticias 
  updatedPage: {
    color: '#fff',
    fontSize: 15
  }
})
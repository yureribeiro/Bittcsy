import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView, Modal, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { DetailsNews } from '../../components/modalNews'
import { GOOGLE_API_KEY } from "@env"
import { TOKEN_NEWS } from "@env"
import axios from 'axios'

export function News() {
  const [news, setNews] = useState([])
  const [showLink, setShowLink] = useState(false)
  const [translatedNews, setTranslatedNews] = useState([])
  const [selectedNewsUrl, setSelectedNewsUrl] = useState(null)

  useEffect(() => {
    async function getNews() {
      const response = await axios.get(`https://cryptopanic.com/api/v1/posts/?auth_token=${TOKEN_NEWS}&public=true`)
      setNews(response.data.results)
    }
    getNews()
  }, [])

  async function translateText(text) {
    try {
      const response = await fetch(`https://translation.googleapis.com/language/translate/v2?key=${GOOGLE_API_KEY}&q=${text}&target=pt-br`, {
        method: 'POST'
      })
      const json = await response.json()
      return json.data.translations[0].translatedText
    } catch (error) {
      console.error(error)
    }
  }

  async function handleTranslate(item) {
    const translatedTitle = await translateText(item.title);
    setTranslatedNews([...translatedNews, { ...item, title: translatedTitle }]);
  }

  const date = () => {
    const now = new Date(Date.now())
    const year = now.getFullYear()
    const month = now.getMonth() + 1
    const day = now.getDate()
    const formattedDate = `${day}/${month}/${year}`
    return (
      <Text style={styles.textDetailsCard}>
        {formattedDate}
      </Text>
    )
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Últimas Notícias
      </Text>

      {news.map((item) => {
        const translatedItem = translatedNews.find((i) => i.id === item.id)
        return (
          <View key={item.id} style={styles.cardNews}>
            <Text style={styles.titleCard}>{translatedItem ? translatedItem.title : item.title}</Text>

            <View style={styles.detailsCard}>
              <Text style={styles.textDetailsCard}>{date()}</Text>
              <TouchableOpacity onPress={() => handleTranslate(item)}>
                <Text style={styles.translateText}>Traduzir</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.linkCard} onPress={() => {
                setSelectedNewsUrl(item.url);
                setShowLink(true);
              }}>
                <Text style={styles.fonteCard}>{item.domain}</Text>
                <MaterialIcons name='near-me' size={16} color={'#FFD369'} />
              </TouchableOpacity>
            </View>
          </View>
        )
      })}

      <View style={styles.credits}>
        <Text style={styles.textCredits}>
          Notícias fornecidos pela CryptoPanic
        </Text>
        <Text style={styles.textCredits}>
          caso as notícias não aparecerem, aguarde um momento e atualize a página.
        </Text>
      </View>

      <Modal visible={showLink} animationType='slide'>
        <DetailsNews
          handleClose={() => setShowLink(false)}
          linkUrl={selectedNewsUrl}
        />
      </Modal>
    </ScrollView >
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
    fontWeight: 'bold',
    marginTop: 14,
    marginBottom: 20
  },
  cardNews: {
    backgroundColor: 'rgba(57, 62, 70, 0.56)',
    gap: 8,
    borderWidth: .5,
    borderColor: 'rgba(204, 204, 204, 0.6)',
    borderRadius: 14,
    padding: 10,
    marginBottom: 14
  },
  titleCard: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  detailsCard: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textDetailsCard: {
    color: '#9BA4B5'
  },
  linkCard: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center'
  },
  translateText: {
    color: '#FFD369'
  },
  fonteCard: {
    color: '#576CBC'
  },
  credits: {
    marginTop: 14,
    marginBottom: '45%'
  },
  textCredits: {
    fontSize: 12,
    color: '#fff',
    fontStyle: 'italic'
  }
})
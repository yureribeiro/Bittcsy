import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView, Modal, TouchableOpacity, Linking } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { DetailsNews } from '../../components/modalNews'
import axios from 'axios'

export function News() {
  const [news, setNews] = useState([])
  const [showLink, setShowLink] = useState(false)

  useEffect(() => {
    async function getNews() {
      const response = await axios.get('https://cryptopanic.com/api/v1/posts/?auth_token=9a983942ff49f9df6c185a86344c58d6e898ddb2&public=true')
      setNews(response.data.results)
    }
    getNews()
  }, [])

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

  function handlePress() {
    setShowLink(true)
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Últimas Notícias
      </Text>
      {news.map((item) => {
        return (
          <>
            <View key={item.id} style={styles.cardNews}>
              <Text style={styles.titleCard}>{item.title}</Text>
              <View style={styles.detailsCard}>
                <Text style={styles.textDetailsCard}>{date()}</Text>
                <TouchableOpacity style={styles.linkCard} onPress={handlePress}>
                  <Text style={styles.fonteCard}>{item.domain}</Text>
                  <MaterialIcons name='near-me' size={16} color={'#FFD369'} />
                </TouchableOpacity>
              </View>
            </View>

            <Modal visible={showLink} animationType='slide'>
              <DetailsNews
                handleClose={() => setShowLink(false)}
                linkUrl={item.url}
              />
            </Modal>
          </>
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
  fonteCard: {
    color: '#576CBC'
  },
  credits: {
    marginTop: 14,
    marginBottom: '45%'
  },
  textCredits: {
    color: '#fff',
    fontStyle: 'italic'
  }
})
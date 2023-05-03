import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Linking } from 'react-native'


export function Learn() {

  const handleLinkPress = () => {
    Linking.openURL('https://bitcoin.org/pt_BR/')
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titlePage}>É novo no mundo cripto? todos nós somos!</Text>

      <View>
        <Text style={styles.title}>O que é Blockchain?</Text>
        <Text style={styles.description}>O Blockchain é uma tecnologia que permite o armazenamento e compartilhamento de informações de maneira descentralizada e segura. Em outras palavras, é um livro-razão digital que registra todas as transações que acontecem em uma rede, como se fosse um registro de operações bancárias.</Text>
        <Text style={styles.description}>A grande vantagem do Blockchain é que ele é descentralizado, ou seja, não depende de um único servidor centralizado para armazenar as informações. Isso significa que não há um ponto único de falha que possa comprometer a segurança do sistema.</Text>
        <Text style={styles.description}>Além disso, o Blockchain é extremamente seguro, pois usa criptografia para proteger as informações e garantir que elas não sejam alteradas ou falsificadas. Cada transação é verificada por vários participantes da rede antes de ser adicionada ao livro-razão, o que torna o sistema altamente confiável.</Text>
        <Text style={styles.description}>Outra grande vantagem do Blockchain é que ele pode ser usado para criar contratos inteligentes, que são programas que executam automaticamente as regras de um contrato quando certas condições são atendidas. Isso pode simplificar e acelerar muitos processos comerciais e legais.</Text>
        <Text style={styles.description}>Por fim, o Blockchain também pode ser usado para criar sistemas de votação eletrônica seguros e transparentes, bem como para rastrear a origem e o histórico de produtos e alimentos, o que pode ser útil para garantir a segurança alimentar e evitar fraudes.</Text>
        <Text style={styles.description}>Em resumo, o Blockchain é uma tecnologia revolucionária que pode trazer muitos benefícios em termos de segurança, transparência e eficiência.</Text>
      </View>
      <View>
        <Text style={styles.title}>O que é Bitcoin?</Text>
        <Text style={styles.description}>O Bitcoin é uma criptomoeda, ou seja, uma moeda digital que usa criptografia para proteger as transações e controlar a criação de novas unidades. Ele foi criado em 2009 por um programador desconhecido, ou um grupo de programadores, que usou o pseudônimo Satoshi Nakamoto.</Text>
        <Text style={styles.description}>Uma das principais vantagens do Bitcoin é a descentralização. Isso significa que ele não é controlado por nenhum governo ou instituição financeira centralizada, e as transações são processadas por uma rede global de computadores. Isso torna o Bitcoin muito resistente a intervenções externas, como censura ou confisco.</Text>
        <Text style={styles.description}>Outra vantagem do Bitcoin é a transparência. Todas as transações são registradas em um livro-razão público chamado Blockchain, que é verificado e mantido pela rede de computadores. Isso significa que todas as transações são públicas e podem ser verificadas por qualquer pessoa, o que aumenta a confiança no sistema.</Text>
        <Text style={styles.description}>Além disso, o Bitcoin é muito seguro. As transações são protegidas por criptografia de ponta a ponta, o que significa que apenas o remetente e o destinatário têm acesso às informações da transação. Além disso, a rede Bitcoin usa um sistema de consenso descentralizado para validar as transações, o que torna muito difícil para hackers ou fraudadores manipularem o sistema.</Text>
        <Text style={styles.description}>Por fim, o Bitcoin é muito conveniente. As transações podem ser realizadas em qualquer lugar do mundo, a qualquer hora do dia, e as taxas são geralmente muito baixas em comparação com as transações bancárias convencionais.</Text>
        <Text style={styles.description}>Em resumo, o Bitcoin é uma criptomoeda revolucionária que oferece muitas vantagens, como descentralização, transparência, segurança e conveniência.</Text>
      </View>
      <View>
        <Text style={styles.title}>Poder Centralizado e Descentralizado</Text>
        <Text style={styles.description}>Em termos gerais, a centralização refere-se a um sistema em que um único ponto de controle exerce uma grande influência sobre as decisões e operações relacionadas a esse sistema. Já a descentralização refere-se a um sistema em que várias entidades autônomas operam de forma independente, sem um ponto central de controle.</Text>
        <Text style={styles.description}>No contexto do blockchain e do Bitcoin, a centralização e a descentralização referem-se à forma como as transações são processadas e validadas na rede. Em um sistema centralizado, as transações são processadas e validadas por uma única entidade, como uma instituição financeira, por exemplo. Já em um sistema descentralizado, as transações são processadas e validadas por uma rede de nós ou computadores interconectados, sem a necessidade de uma autoridade central.</Text>
        <Text style={styles.description}>O Bitcoin foi criado com o objetivo de ser uma moeda descentralizada, ou seja, sem a necessidade de uma autoridade central que controle as transações. O blockchain do Bitcoin é composto por uma rede de nós interconectados que validam e processam as transações. Dessa forma, a rede é considerada descentralizada, pois não há uma autoridade central que possa exercer controle sobre as operações.</Text>
        <Text style={styles.description}>No entanto, é importante notar que existem vários níveis de descentralização, e que mesmo uma rede descentralizada pode ter elementos de centralização. Por exemplo, a mineração de Bitcoin é realizada por um grupo relativamente pequeno de mineradores, o que pode ser considerado um elemento de centralização. Além disso, as exchanges que permitem a compra e venda de Bitcoin são geralmente empresas centralizadas que podem exercer algum controle sobre as transações.</Text>
      </View>

      <View style={styles.credits}>
        <Text style={styles.textCredits}>Aprenda mais sobre Bitcoin em:</Text>
        <TouchableOpacity onPress={handleLinkPress}>
          <Text style={styles.linkCredits}>bitcoin.org</Text>
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
    padding: 20
  },
  titlePage: {
    color: '#576CBC',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 14
  },
  title: {
    color: '#FFD369',
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 14
  },
  description: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 14
  },
  credits: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 200
  },
  textCredits: {
    color: '#FFD369',
    fontStyle: 'italic'
  },
  linkCredits: {
    color: '#576CBC'
  }
})
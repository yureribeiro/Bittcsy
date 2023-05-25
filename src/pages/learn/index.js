import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Linking } from 'react-native'


export function Learn() {

  const handleLinkPress = () => {
    Linking.openURL('https://bitcoin.org/pt_BR/')
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titlePage}>É novo no mundo cripto? todos nós somos!</Text>

      <View>
        <Text style={styles.title}>1 Who/Where/When - Quem criou o Bitcoin, onde e quando:</Text>
        <Text style={styles.description}>O Bitcoin foi proposto em um artigo "Bitcoin: a Peer to Peer ElectronicCash System" enviado por  um  participante que utilizava o pseudônimo de Satoshi Nakamoto. 2008 em um grupo de e-mails de cypherpunks. Em 18 de agosto de 2008, o domínio bitcoin.org foi registrado, em 31 de outubro, o whitepaper publicado e, em janeiro de 2009, o código aberto foi divulgado.</Text>
        <Text style={styles.description}>Momento em que o sistema começou a rodar, com a mensagem "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks” registrada no primeiro bloco em 3 de janeiro de 2009. Nesse grupo, congregavam os  principais cypherpunks, experts  em criptografia e ativistas do austro-libertarianismo, em decorrência disso, o espaço era  utilizado por  alguns  de  seus participantes como meio de divulgação e teste de softwares abertos e descentralizados, em grande parte como resposta aos  abusos reincidentes por  parte dos  governos dos  seus privilégios de  senhoriagem e  monopólio de  emissão de  moeda.</Text>
        <Text style={styles.description}>Os integrantes desse  grupo sabiam que  o  domínio da  criptografia pelo indivíduo médio era um fator fundamental para evitar o totalitarismo</Text>
        <Text style={styles.descriptionUp}>"O problema raiz da moeda convencional é toda a confiança necessária para fazê-la funcionar.  O Banco Central deve ser confiável para não desvalorizar a moeda, mas o histórico das moedas fiduciárias está cheio de violações dessa confiança." - Satoshi Nakamoto.</Text>
        <Text style={styles.description}>Após propor o whitepaper e contribuir ativamente na comunidade nos primeiros anos, Satoshi Nakamoto  se  despediu e deixou o projeto que continuou de maneira descentralizada. Os primeiros bitcoins minerados, supostamente por ele, não foram movidos – servindo de prova de segurança das carteiras mais modernas e de garantia de que o criador até hoje não obteve vantagem pecuniária pela venda dos primeiros tokens criados.</Text>

        <Text style={styles.title}> Em  que  lugar fica  o  Bitcoin?</Text>
        <Text style={styles.description}> Todos os  registros de  transações se encontram em cada nó (full  node),  que  totalizam mais de  16  mil usuários com o cliente instalado (nodes ou  nós  públicos).</Text>
        <Text style={styles.description}> Desta maneira, o Bitcoin não está em nenhum país ou jurisdição específica, mas sim, nas  nuvens!</Text>
      </View>
      <View>
        <Text style={styles.title}>O que é Bitcoin?</Text>
        <Text style={styles.description}>Em  apenas uma frase: Bitcoin (token)  é  o  dinheiro que  pode ser enviado por qualquer meio de comunicação, Bitcoin é o sistema público e aberto de registros de seu token nativo e o software livre para sua utilização pela Internet.</Text>
        <Text style={styles.description}>Por isso se afirma que para proibir o uso de bitcoins, globalmente, seria necessário destruir a Internet em todos os países do mundo, ou em uma jurisdição determinada, impedir o direito de expressão, retirando dessa população rádio, SMS,  telefone,  carta e  qualquer outra forma de comunicação com pessoas quem tenham acesso à Internet.</Text>
        <Text style={styles.description}>Esse sistema já consome mais energia que vários países e possui o maior poder de processamento do planeta — cerca de 90 milhões de terahashes por segundo (TH/s), cerca de 100 vezes maior que os servidores do Google.</Text>
      </View>
      <View>
        <Text style={styles.title}>O Bitcoin tem três funções inatas:</Text>
        <Text style={styles.descriptionUp}>1 -</Text>
        <Text style={styles.description}>Sistema de comunicação global, incensurável, público e perpétuo  –  que  garante a  faculdade de  troca de informações e registro público de dados fora de qualquer controle estatal</Text>
        <Text style={styles.descriptionUp}>2 -</Text>
        <Text style={styles.description}>Sistema de pagamentos que não está sujeito às jurisdições nacionais, o que inviabiliza, na  prática, controles de  capitais (incluindo no  mercado internacional os bilhões de indivíduos sem acesso a serviços bancários).</Text>
        <Text style={styles.descriptionUp}>3 -</Text>
        <Text style={styles.description}>Plataforma de manutenção de saldos como reserva de valor, que apresenta certas características de dinheiro superiores ao ouro e a qualquer reserva de valor anteriormente adotada – libertando seus usuários de expropriações e tributos involuntários, mesmo após a sua morte, incluindo aí até mesmo a senhoriagem e a inflação.</Text>
      </View>
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
        <Text style={styles.title}>Poder Centralizado e Descentralizado</Text>
        <Text style={styles.description}>Em termos gerais, a centralização refere-se a um sistema em que um único ponto de controle exerce uma grande influência sobre as decisões e operações relacionadas a esse sistema. Já a descentralização refere-se a um sistema em que várias entidades autônomas operam de forma independente, sem um ponto central de controle.</Text>
        <Text style={styles.description}>No contexto do blockchain e do Bitcoin, a centralização e a descentralização referem-se à forma como as transações são processadas e validadas na rede. Em um sistema centralizado, as transações são processadas e validadas por uma única entidade, como uma instituição financeira, por exemplo. Já em um sistema descentralizado, as transações são processadas e validadas por uma rede de nós ou computadores interconectados, sem a necessidade de uma autoridade central.</Text>
        <Text style={styles.description}>O Bitcoin foi criado com o objetivo de ser uma moeda descentralizada, ou seja, sem a necessidade de uma autoridade central que controle as transações. O blockchain do Bitcoin é composto por uma rede de nós interconectados que validam e processam as transações. Dessa forma, a rede é considerada descentralizada, pois não há uma autoridade central que possa exercer controle sobre as operações.</Text>
        <Text style={styles.description}>No entanto, é importante notar que existem vários níveis de descentralização, e que mesmo uma rede descentralizada pode ter elementos de centralização. Por exemplo, a mineração de Bitcoin é realizada por um grupo relativamente pequeno de mineradores, o que pode ser considerado um elemento de centralização. Além disso, as exchanges que permitem a compra e venda de Bitcoin são geralmente empresas centralizadas que podem exercer algum controle sobre as transações.</Text>
      </View>

      <View style={styles.credits}>
        <Text style={styles.textCredits}>mais conteudos aqui em breve...</Text>
        <Text style={styles.textCredits}>Contem Referências do livro Redpill Bitcoin</Text>

        <View style={{ flexDirection: 'column' }}>
          <Text style={styles.textCredits}>Aprenda mais sobre Bitcoin em:</Text>
          <TouchableOpacity style={styles.contentlink} onPress={handleLinkPress}>
            <Text style={styles.linkCredits}>bitcoin.org</Text>
          </TouchableOpacity>
        </View>

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
    color: '#DDF7E3',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 14
  },
  title: {
    color: '#FFD369',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 14
  },
  description: {
    color: '#FFF',
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 14
  },
  descriptionUp: {
    color: '#FFD369',
    fontStyle: 'italic',
    fontSize: 18,
    marginBottom: 14
  },
  credits: {
    padding: 8,
    flexDirection: 'column',
    gap: 10,
    marginBottom: 200
  },
  textCredits: {
    color: '#FFD369',
    fontStyle: 'italic',
    fontSize: 17
  },
  contentlink: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50
  },
  linkCredits: {
    color: '#DDF7E3',
    fontSize: 20
  }
})
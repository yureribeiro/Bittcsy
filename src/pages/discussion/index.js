import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const DiscussionGroupScreen = () => {
  const [discussions, setDiscussions] = useState([]);

  // useEffect(() => {
  //   // Recupera dados da API de discussões
  //   fetch('https://example.com/api/discussions')
  //     .then(response => response.json())
  //     .then(data => setDiscussions(data));
  // }, []);

  const handleNewDiscussion = () => {
    // Exibe formulário para criar novo tópico de discussão
    // e envia para a API para armazenar os dados
  };

  const handleJoinDiscussion = (discussionId) => {
    // Exibe a discussão selecionada e permite que o usuário
    // adicione novas postagens
  };

  return (
    <View>
      <FlatList
        data={discussions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleJoinDiscussion(item.id)}>
            <Text>{item.topic}</Text>
            <Text>{item.recentPosts}</Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity onPress={handleNewDiscussion}>
        <Text>Criar novo tópico de discussão</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DiscussionGroupScreen;
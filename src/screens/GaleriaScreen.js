import React, { useState } from 'react';
import { View, FlatList, Image, Modal, Text, TouchableOpacity, StyleSheet, Pressable } from 'react-native';

export default function GaleriaScreen({ navigation }) {
  const [imagens, setImagens] = useState([
    { id: '1', uri: 'https://picsum.photos/id/10/200/200' },
    { id: '2', uri: 'https://picsum.photos/id/11/200/200' },
    { id: '3', uri: 'https://picsum.photos/id/12/200/200' },
    { id: '4', uri: 'https://picsum.photos/id/13/200/200' },
  ]);

  const [modalVisivel, setModalVisivel] = useState(false);
  const [imagemSelecionada, setImagemSelecionada] = useState(null);

  const abrirModal = (item) => {
    setImagemSelecionada(item);
    setModalVisivel(true);
  };

  const excluirImagem = () => {
    setImagens(imagens.filter(img => img.id !== imagemSelecionada.id));
    setModalVisivel(false);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={imagens}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate('ImagemTelaCheia', { uri: item.uri })}
            onLongPress={() => abrirModal(item)}
            style={styles.imagemContainer}
          >
            <Image source={{ uri: item.uri }} style={styles.imagem} />
          </Pressable>
        )}
      />

      <Modal visible={modalVisivel} transparent animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalConteudo}>
            <Text style={styles.textoModal}>Deseja excluir esta imagem?</Text>
            <View style={styles.botoes}>
              <TouchableOpacity onPress={() => setModalVisivel(false)} style={[styles.botao, { backgroundColor: '#999' }]}>
                <Text style={styles.textoBotao}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={excluirImagem} style={[styles.botao, { backgroundColor: 'red' }]}>
                <Text style={styles.textoBotao}>Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 10 },
  imagemContainer: { flex: 1, margin: 5 },
  imagem: { width: '100%', height: 150, borderRadius: 10 },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalConteudo: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: 250,
  },
  textoModal: { fontSize: 16, textAlign: 'center', marginBottom: 15 },
  botoes: { flexDirection: 'row', justifyContent: 'space-between' },
  botao: { padding: 10, borderRadius: 8, width: '45%', alignItems: 'center' },
  textoBotao: { color: '#fff', fontWeight: 'bold' },
});

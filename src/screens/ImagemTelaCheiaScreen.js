import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function ImagemTelaCheiaScreen({ route }) {
  const { uri } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri }} style={styles.imagem} resizeMode="contain" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' },
  imagem: { width: '100%', height: '100%' },
});

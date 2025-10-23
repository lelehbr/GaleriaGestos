import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import GaleriaScreen from './src/screens/GaleriaScreen';
import ImagemTelaCheiaScreen from './src/screens/ImagemTelaCheiaScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Galeria" component={GaleriaScreen} />
        <Stack.Screen name="ImagemTelaCheia" component={ImagemTelaCheiaScreen} options={{ title: 'Imagem' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// zona 1 imports: zona de importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import React, {useState} from 'react';
// zona 2 Main: zona de componentes
export default function App() {
  const[contador,setContador]=useState(0);
  return (
    <View style={styles.container}>
      <Text>Contador:{contador}</Text>
      <Button title= "Agregar" onPress={()=>setContador(contador+1)}/>
      <Button title= "Quitar" onPress={()=>setContador(contador-1)}/>  
      <Button title= "Reiniciar" onPress={()=>setContador(0)}/>
      <Button title = 'incrementar' onPress={()=>setContador(contador===0)}/>
      <StatusBar style="auto" />
    </View>
  );
}
//zona 3 styles: zona de estilos y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
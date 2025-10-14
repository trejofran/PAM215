// zona 1 imports: zona de importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import React, {useState} from 'react';
// zona 2 Main: zona de componentes
export default function App() {
  const[contador,setContador]=useState(0);3
  return (
    <View style={styles.container}>

      <Text style= {styles.texto}>Contador</Text>
      <Text style= {styles.texto2}>{contador}</Text>
      <View style={styles.contenedoresBotones}>
      <Button color="red" title= "Agregar" onPress={()=>setContador(contador+1)}/>
      <Button color="purple" title= "Quitar" onPress={()=>setContador(contador-1)}/>  
      <Button color="orange" title= "Reiniciar" onPress={()=>setContador(0)}/>
      
         </View>
      <StatusBar style="auto" />
    </View>
  );
}
//zona 3 styles: zona de estilos y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#635353ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    fontFamily:'Times New Roman',
    fontSize:30,
    color:'#131111ff',
    fontWeight:'bold',
    fontStyle:'italic',
    textDecorationLine :'Line-through',

  },
   texto2:{
    fontFamily:'Courier New',
    fontSize:40,
    color:'#dd2424ff',
    fontWeight:'500',
    textDecorationLine :'underline',

  },
  contenedoresBotones:{
    marginTop:25,
  flexDirection:'row',
  gap:10,},
    
});


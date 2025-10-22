import { Text, StyleSheet, View, ImageBackground,Animated,Easing} from 'react-native'
import React,{useState,useEffect, use} from 'react';




export default function  BackgroundImage() {
const[cargando,setCargando]= useState(true);
const desvanecido= new Animated.Value(1);
useEffect(()=>{
  const timer= setTimeout(()=>{
    Animated.timing(desvanecido,{
      toValue:0,
      duration:800,
      easing: Easing.out(Easing.ease),
      useNativeDriver:true,

    }).start(()=> setCargando(false));
  },3000);
  return()=> clearTimeout(timer);

},[]);
if(cargando){
   return(
    <Animated.View style={[styles.splashContainer,{opacity: desvanecido}]}> 
      <ImageBackground
      source={require('../assets/candy.jpg')}
      resizeMode='contain'
      style={styles.splashImage}
      
      >
        <Text style={styles.splashImage}>Cargando....</Text>
      </ImageBackground>


    </Animated.View>
    );
}
 
  

  
    return (
      <ImageBackground
      source={require('../assets/gato.jpg')}
      resizeMode='cover'
      style={styles.backgrouns}
      > 

      <text style={styles.texto}>Bienvenido a mi app    </text>
      </ImageBackground>
      //<View>
       // <Text>Proximamente por Carlos</Text>
      //</View>
    )
  }


const styles = StyleSheet.create({
  backgrouns: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  texto: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
  alignItems: 'center',
padding: 20,},
  splashImage: {
    flex: 1,
     justifyContent: 'center',
  alignItems: 'center',
    width: '100%',
  },
  splashText: {
    position: 'absolute',
    marginBotton:50,
    fontSize: 24,
    color: 'white',


  },


})

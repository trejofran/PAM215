import { Text, StyleSheet,View,Button } from 'react-native'
import React, { useState } from 'react'
import ContadorScreen from './ContadorScreen';
import BotonesScreen from './BotonesScreen';
import TextScreen from './TextScreen';
import ImageScreen from './ImageScreen';
import ScrollScreen from './ScrollScreen';
import IndicatorScreen from './ActivityScreen';
import FlatListScreen from './FlatlistScreen';
import ModalScreen from './ModalScreen';
import BottomScreen from './BottomScreen';
import RepasosScreen from './RepasosScreen'; 


export default function MenuScreen() {

    const[screen,setScreen]=useState('Menu');

    switch(screen){

        case 'Contador':
            return <ContadorScreen/>;
        case 'Botones':
            return <BotonesScreen/>;
        case 'Texto':
            return <TextScreen/>;
        case 'Image':
            return <ImageScreen/>;
        case 'Scroll':
            return <ScrollScreen/>;
        case 'Indicator':
            return <IndicatorScreen/>;
        case 'List':
            return <FlatListScreen/>;
        case 'Modal':
            return <ModalScreen/>;
        case 'Bottom':
            return <BottomScreen/>;
        case 'Repaso':
            return <RepasosScreen/>;
            default:
                return(
            <View>
                <Text>Menu de practicas </Text>
                <Button onPress={()=>setScreen('Contador')} title='Pract:Contador'/>
                <Button onPress={()=>setScreen('Botones')} title='Pract:Buttons'/>
                <Button onPress={()=>setScreen('Texto')} title='Pract:Text'/>
                <Button onPress={()=>setScreen('Image')} title='Pract:Image'/>
                <Button onPress={()=>setScreen('Scroll')} title='Pract:Scroll'/>
                <Button onPress={()=>setScreen('Indicator')} title='Pract:Indicator'/>
                <Button onPress={()=>setScreen('List')} title='Pract:List'/>
                <Button onPress={()=>setScreen('Modal')} title='Pract:Modal'/>
                <Button onPress={()=>setScreen('Bottom')} title='Pract:Bottom'/>
                <Button onPress={()=>setScreen('Repaso')} title='Pract:Repasos'/>

                </View>


            )

    }


  
}

const styles = StyleSheet.create({})
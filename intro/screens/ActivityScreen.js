import { Text, StyleSheet, View, ActivityIndicator, useState } from 'react-native'


export default function ActivityIndicatorScreen() {
  const [loading, setLoading]=useState(false);

  const startLoading=()=>{
    setLoading(true);
    setTimeout(()=>setLoading(false),3000)
  };

  
    if (loading) {
      return(
      <view>
        <view>
          <ActivityIndicator
          size='large'
          color='#0000ff'
          animating={true}
          hidesWhenStopped={true}
          />
          <Text>Cargando....</Text>
        </view>
      </view>
      );
    }
    return (
      <View>
        <Text>ActivityIndicator</Text>
        <Button title="Carga de datos" onPress= {startLoading}/>
      </View>
    )


        
      
      
    }

  


const styles = StyleSheet.create({

  container :{
    flex:1,
    justifyContent:'center',
    alignItems:'center',

  }
})
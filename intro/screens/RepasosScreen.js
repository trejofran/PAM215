import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert, ImageBackground, Animated, Easing, Switch, StyleSheet } from 'react-native';

export default function RegistroScreen() {
  const [loading, setLoading] = useState(true);
  const fadeAnim = new Animated.Value(1);

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [emailInvalid, setEmailInvalid] = useState(false);

  // Función de validación y alerta
  const handleRegister = () => {
    const validarEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!userName.trim() && !userEmail.trim()) {
      Alert.alert('Error', 'Por favor llena todos los campos (Móvil)');
      alert('Por favor llena todos los campos (Web)');
      return;
    }
    if (!userName.trim()) {
      Alert.alert('Error', 'Ingresa tu nombre (Móvil)');
      alert('Ingresa tu nombre (Web)');
      return;
    }
    if (!userEmail.trim()) {
      Alert.alert('Error', 'Ingresa tu correo (Móvil)');
      alert('Ingresa tu correo (Web)');
      return;
    }
    if (!acceptedTerms) {
      Alert.alert('Error', 'Debes aceptar los términos y condiciones (Móvil)');
      alert('Debes aceptar los términos y condiciones (Web)');
      return;
    }
    if (!validarEmail(userEmail)) {
      Alert.alert('Error', 'Correo inválido (Móvil)');
      alert('Correo inválido (Web)');
      return;
    }

    Alert.alert('Registro Exitoso', `Nombre: ${userName}\nCorreo: ${userEmail}`);
    alert(`Registro Exitoso\nNombre: ${userName}\nCorreo: ${userEmail}`);
  };

  // Splash screen
  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 800,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }).start(() => setLoading(false));
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Animated.View style={[styles.splashWrapper, { opacity: fadeAnim }]}>
        <ImageBackground
          source={require('../assets/candy.jpg')}
          style={styles.splashImage}
          resizeMode="contain"
        >
          <Text style={styles.splashText}>Cargando...</Text>
        </ImageBackground>
      </Animated.View>
    );
  }

  return (
    <ImageBackground
      source={require('../assets/gato.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.formWrapper}>
        <Text style={styles.header}>Registro de Usuario</Text>

        <TextInput
          style={styles.inputField}
          placeholder="Nombre"
          value={userName}
          onChangeText={setUserName}
          placeholderTextColor="#ccc"
        />

        <TextInput
          style={styles.inputField}
          placeholder="Correo"
          value={userEmail}
          onChangeText={setUserEmail}
          placeholderTextColor="#ccc"
        />

        <View style={styles.termsWrapper}>
          <Text style={styles.label}>Aceptar términos y condiciones</Text>
          <Switch
            value={acceptedTerms}
            onValueChange={() => setAcceptedTerms(!acceptedTerms)}
            trackColor={{ true: 'green', false: 'gray' }}
          />
        </View>

        <Button title="Registrarse" onPress={handleRegister} color="#333" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { 
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  splashWrapper: { 
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  splashImage: { 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    width: '100%'
  },
  splashText: { 
    position: 'absolute',
    bottom: 60, 
    fontSize: 20, 
    color: '#333'
  },
  formWrapper: { 
    backgroundColor: '#00000070', 
    padding: 25, 
    borderRadius: 12, 
    width: '85%' 
  },
  header: { 
    fontSize: 28,
    fontWeight: '700', 
    color: '#fff', 
    marginBottom: 20, 
    textAlign: 'center' 
  },
  inputField: {
    width: '100%',
    borderWidth: 2, 
    borderColor: '#fff', 
    borderRadius: 8, 
    padding: 10, 
    marginBottom: 15, 
    color: '#fff', 
    backgroundColor: '#ffffff25' 
  },
  termsWrapper: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    marginBottom: 20 
  },
  label: {
    color: '#fff', 
    fontSize: 14 
  },
});

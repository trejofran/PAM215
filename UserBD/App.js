import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import UsuarioView from './screens/InsertUsuarioScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <UsuarioView />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

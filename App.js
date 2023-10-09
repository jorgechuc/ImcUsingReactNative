import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Peso de la persona en kilogramos:</Text>
        <TextInput />
        <Text>Estatura de la persona en metros:</Text>
        <TextInput />
      </View>

      <View>
        <Button title="Calcular"/>
        <Button title="Limpiar"/>
      </View>

      <View>
        <Text>El índice de masa corporal de la persona es:</Text>
        <Text>28.9012</Text>
        <Text>El estado nutricional de la persona es:</Text>
        <Text>Peso normal</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

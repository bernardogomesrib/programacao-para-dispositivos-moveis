import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';


export default function App() {
  
  return (
    <View style={styles.container}>
      
        <Text>Login</Text>
        <Text>
          Nome:
        </Text>
        <TextInput placeholder="Nome" />
        <Text>
          Password:
        </Text>
        <TextInput placeholder="Password" secureTextEntry={true} />
        <Button title="Login" />
      

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

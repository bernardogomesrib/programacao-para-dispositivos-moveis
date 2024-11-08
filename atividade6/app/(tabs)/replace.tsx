import { Text, View } from '@/components/Themed';
import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>push</Text>

      <View style={{ margin: 20 }}>
        <Text>Pushed screen</Text>
        </View>
        <Link push href="/push"></Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
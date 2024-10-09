import { useColorScheme } from '@/components/useColorScheme';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function CustomHeader({ title }:{title:string}) {
  const colorScheme = useColorScheme();

  return (
    <View style={styles.header}>
      
      <Text style={{fontSize:20}}>{title}</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 30,
    paddingBottom: 10,
    paddingLeft: 15,
    backgroundColor: 'lightgrey',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CustomHeader;

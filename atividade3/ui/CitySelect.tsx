import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface City {
  id: number;
  title: string;
}

interface HomeProps {
  cityList: City[];
  city: string;
  setCity: (city: string) => void;
  searchWeatherByCityName: (city:string) => void;
}

export default function CitySelect({city, cityList, setCity, searchWeatherByCityName }: HomeProps) {
  
  const [filteredCities, setFilteredCities] = useState<City[]>([]);

  const handleSearch = (text: string) => {
    setCity(text);
    if (text) {
      setFilteredCities(
        cityList.filter((city) =>
          city.title.toLowerCase().includes(text.toLowerCase())
        )
      );
    } else {
      setFilteredCities([]);
    }
  };

const handleSelectCity = (cityName: string) => {
    setCity(cityName);
    setFilteredCities([]);
    setTimeout(() => {
        searchWeatherByCityName(cityName);
    }, 30);
};

  return (
    <View style={styles.container}>
    <View style={styles.searchContainer}>
      <Icon name="map-marker" size={24} color="#fff" />
      <TextInput
        style={styles.searchInput}
        placeholder="Entre o nome da cidade"
        placeholderTextColor="#fff"
        value={city}
        onChangeText={handleSearch}
        onSubmitEditing={() => handleSelectCity(city)}
      />
    </View>
      {filteredCities.length > 0 && (
        <FlatList
          data={filteredCities.slice(0, 10)}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleSelectCity(item.title)} style={styles.cityItem}>
              <Text style={styles.cityText}>{item.title}</Text>
            
            </TouchableOpacity>
          )}
          style={styles.cityList}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 25,
    
    
  },
  searchInput: {
    width: '80%',
    color: '#fff',
    
  },
  cityList: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10,
    marginTop: 5,
  },
  cityItem: {
    padding: 10,
    width: '100%',
  },
  cityText: {
    color: '#000',
  },
});

import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { switchStringForpng } from '../weatherFunctions/switcher';
import WeatherCarousel from './carroucel';

interface HomeProps {
  weather: any;
  today: any;
}

export default function Home({ weather, today }: HomeProps){
  const [viewWeather,setViewWeather]=React.useState(false)
  const handleCarouselClick = () => {setViewWeather(!viewWeather)}
    return (<ScrollView style = { styles.container } >
      <View style={styles.header}>
        <Icon name="map-marker" size={24} color="#fff" />
        <Text style={styles.location}>{weather.city}</Text>
        <Icon name="bell-outline" size={24} color="#fff" style={styles.notification} />
      </View>

      <WeatherCarousel weather={weather} onClick={() => handleCarouselClick()}/>
     
      <View style={styles.detailsContainer}>
        <View style={styles.detailItem}>
          <Icon name="water-percent" size={20} color="#fff" />
          <Text style={styles.detailText}>{today.humidity}%</Text>
        </View>
        <View style={styles.detailItem}>
          <Icon name="weather-rainy" size={20} color="#fff" />
          <Text style={styles.detailText}>{today.rain_probability}%</Text>
        </View>
        <View style={styles.detailItem}>
          <Icon name="weather-windy" size={20} color="#fff" />
          <Text style={styles.detailText}>{today.wind_speedy}</Text>
        </View>
      </View>
      <View style={styles.nextForecast}>
      <Text style={styles.todayText}>Proximos dias</Text>
       <View style={{flexWrap:'wrap',flexDirection:'row',justifyContent:'center',width:'100%'}}>
       <View style={styles.forecastItem}>
          <Text style={styles.time}>{weather.forecast[1].weekday}</Text>
          {switchStringForpng(weather.forecast[1].condition,true)}
          <Text style={styles.time}>{weather.forecast[1].max}°C</Text>
          <Text style={styles.temp}>{weather.forecast[1].min}°C</Text>
        </View>
        <View style={styles.forecastItem}>
          <Text style={styles.time}>{weather.forecast[2].weekday}</Text>
          {switchStringForpng(weather.forecast[2].condition,true)}
          <Text style={styles.time}>{weather.forecast[2].max}°C</Text>
          <Text style={styles.temp}>{weather.forecast[2].min}°C</Text>
        </View>
        <View style={styles.forecastItem}>
          <Text style={styles.time}>{weather.forecast[3].weekday}</Text>
          {switchStringForpng(weather.forecast[3].condition,true)}
          <Text style={styles.time}>{weather.forecast[3].max}°C</Text>
          <Text style={styles.temp}>{weather.forecast[3].min}°C</Text>
        </View>
        <View style={styles.forecastItem}>
          <Text style={styles.time}>{weather.forecast[4].weekday}</Text>
          {switchStringForpng(weather.forecast[4].condition,true)}
          <Text style={styles.time}>{weather.forecast[4].max}°C</Text>
          <Text style={styles.temp}>{weather.forecast[4].min}°C</Text>
        </View>
        <View style={styles.forecastItem}>
          <Text style={styles.time}>{weather.forecast[5].weekday}</Text>
          {switchStringForpng(weather.forecast[5].condition,true)}
          <Text style={styles.time}>{weather.forecast[5].max}°C</Text>
          <Text style={styles.temp}>{weather.forecast[5].min}°C</Text>
        </View>
        <View style={styles.forecastItem}>
          <Text style={styles.time}>{weather.forecast[6].weekday}</Text>
          {switchStringForpng(weather.forecast[6].condition,true)}
          <Text style={styles.time}>{weather.forecast[6].max}°C</Text>
          <Text style={styles.temp}>{weather.forecast[6].min}°C</Text>
        </View>
        <View style={styles.forecastItem}>
          <Text style={styles.time}>{weather.forecast[7].weekday}</Text>
          {switchStringForpng(weather.forecast[7].condition,true)}
          <Text style={styles.time}>{weather.forecast[7].max}°C</Text>
          <Text style={styles.temp}>{weather.forecast[7].min}°C</Text>
        </View>
        <View style={styles.forecastItem}>
          <Text style={styles.time}>{weather.forecast[8].weekday}</Text>
          {switchStringForpng(weather.forecast[8].condition,true)}
          <Text style={styles.time}>{weather.forecast[8].max}°C</Text>
          <Text style={styles.temp}>{weather.forecast[8].min}°C</Text>
        </View>
        <View style={styles.forecastItem}>
          <Text style={styles.time}>{weather.forecast[9].weekday}</Text>
          {switchStringForpng(weather.forecast[9].condition,true)}
          <Text style={styles.time}>{weather.forecast[9].max}°C</Text>
          <Text style={styles.temp}>{weather.forecast[9].min}°C</Text>
        </View>
       </View>
      </View>

      {viewWeather&&<View>
      {weather&&Object.entries(weather).map(([key, value]) => (
        <Text key={key}>
          <Text>{key}: {JSON.stringify(value)}</Text>
        </Text>
      ))}
      <Text> tamanho do array:{weather.forecast.length}</Text>
      </View>}
    </ScrollView >)
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#005BEA', // Cor sólida de fundo (tom de azul)
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      paddingVertical: 10,
      marginTop: 16,
    },
    location: {
      color: '#fff',
      fontSize: 20,
      fontWeight: '600',
    },
    notification: {
      marginLeft: 'auto',
    },
    weatherContainer: {
      alignItems: 'center',
      marginVertical: 10,
    },
    weatherIcon: {
      width: 100,
      height: 100,
    },
    temperature: {
      color: '#fff',
      fontSize: 50,
      fontWeight: '300',
    },
    weatherDesc: {
      color: '#fff',
      fontSize: 16,
    },
    tempRange: {
      color: '#fff',
      fontSize: 14,
    },
    detailsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingHorizontal: 40,
      paddingVertical: 20,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderRadius: 10,
      marginHorizontal: 20,
      marginBottom: 15,
    },
    detailItem: {
      alignItems: 'center',
    },
    detailText: {
      color: '#fff',
      fontSize: 16,
    },
    todayForecast: {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      marginHorizontal: 20,
      borderRadius: 10,
      padding: 15,
    },
    todayText: {
      color: '#fff',
      fontSize: 18,
      marginBottom: 10,
      width: '100%',
      textAlign: 'center',
    },
    forecastItem: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      marginBottom: 5,
    },
    time: {
      color: '#fff',
    },
    temp: {
      color: '#fff',
    },
    nextForecast: {
      flexDirection:'row',
      flexWrap:'wrap',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      marginHorizontal: 20,
      borderRadius: 10,
      padding: 15,
      marginTop: 20,
      alignItems:'center',
    },
    nextText: {
      color: '#fff',
      fontSize: 18,
      marginBottom: 10,
    },
    nextItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 5,
    },
    day: {
      color: '#fff',
    },
    nextTemp: {
      color: '#fff',
    },
  });
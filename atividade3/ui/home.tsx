import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { Alert, RefreshControl, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { switchStringForpng } from '../weatherFunctions/switcher';
import WeatherCarousel from './carroucel';
import CitySelect from './CitySelect';

interface HomeProps {
  weather: any;
  today: any;
  city: string;
  changeCity: boolean;
  setChangeCity: (changeCity: boolean) => void;
  setCity: (city: string) => void;
  searchWeatherByCityName: (city:string) => void;
  onRefresh: () => Promise<void>; // Adicione uma prop para a função de atualização
}

export default function Home({ weather, today, city , changeCity, setChangeCity, setCity, searchWeatherByCityName, onRefresh }: HomeProps) {
  const [viewWeather, setViewWeather] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  
  const [cityList, setCityList] = useState<any[]>([]);

  const getCityList = async () => {
    if (cityList.length === 0) {
      try {
        const response = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/municipios');
        const simplifiedCityList = response.data.map((city: any) => ({
          id: city.id,
          title: city.nome + "," + city.microrregiao.mesorregiao.UF.sigla
        }));
        setCityList(simplifiedCityList);
      } catch (error) {
        Alert.alert('Erro', 'Erro ao buscar lista de cidades');
      }
    }
  };

  React.useState(() => {
    getCityList();
  });

  const handleCarouselClick = () => {
    setViewWeather(!viewWeather);
  };

  const comparaHoras = (timeNow: string, timeSunset: string) => {
    if (timeSunset.includes(" pm")) {
      timeSunset = timeSunset.replace(" pm", "");
      let time = timeSunset.split(":");
      let hour = parseInt(time[0]) + 12;
      timeSunset = hour + ":" + time[1];
    } else {
      timeSunset = timeSunset.replace(" am", "");
    }

    let date1 = new Date("2021-01-01T" + timeNow + ":00");
    let date2 = new Date("2021-01-01T" + timeSunset + ":00");
    let resultado = date1.getTime() < date2.getTime();
    return resultado;
  };

  const onRefreshHandler = useCallback(async () => {
    setRefreshing(true);
    await onRefresh();
    setRefreshing(false);
  }, [onRefresh]);

  return (
    <View
      style={comparaHoras(weather.time, weather.sunset) ? styles.container : styles.containerDark}
      
    >
      {!changeCity ? (
        <TouchableWithoutFeedback onPress={() => setChangeCity(!changeCity)} style={styles.header} >
            <View style={styles.header}>
            <Icon name="map-marker" size={24} color="#fff" />
            <Text style={styles.location}>{weather.city}</Text>
            <Icon name="magnify" size={24} color="#fff" style={styles.notification} />
            </View>
        </TouchableWithoutFeedback >
      ) : (<TouchableWithoutFeedback onPress={() => {setChangeCity(!changeCity) }} style={styles.header}>
        <View style={styles.header}>
          <CitySelect cityList={cityList} city={city} setCity={setCity} searchWeatherByCityName={searchWeatherByCityName} />
          <Icon name="close" size={24} color="#fff" style={styles.notification} />
        </View>
      </TouchableWithoutFeedback>)}
      <ScrollView style={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefreshHandler}
          />
        }>
      <WeatherCarousel weather={weather} onClick={() => handleCarouselClick()} />

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
        <View style={{ flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center', width: '100%' }}>
          {weather.forecast.slice(1, 10).map((forecast: any, index: number) => (
            <View style={styles.forecastItem} key={index}>
              <Text style={styles.time}>{forecast.weekday}</Text>
              {switchStringForpng(forecast.condition, true)}
              <Text style={styles.time}>{forecast.max}°C</Text>
              <Text style={styles.temp}>{forecast.min}°C</Text>
            </View>
          ))}
        </View>
      </View>

      {viewWeather && <View>
        {weather && Object.entries(weather).map(([key, value]) => (
          <Text key={key}>
            <Text>{key}: {JSON.stringify(value).replace(",\"", "\",\n\"")}</Text>
          </Text>
        ))}
        <Text> tamanho do array:{weather.forecast.length}</Text>
      </View>}
      {viewWeather && (
        <View>
          {Object.entries(cityList.slice(1, 10)).map(([key, value]) => (
            <Text key={key}>
              {key}: {JSON.stringify(value).replace(",\"", "\",\n\"")}
            </Text>
          ))}
        </View>
      )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#005BEA', // Cor sólida de fundo (tom de azul)
  },
  containerDark: {
    flex: 1,
    backgroundColor: '#333', // Cor sólida de fundo (tom de azul)
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
    width: '11%',
  },
  time: {
    color: '#fff',
  },
  temp: {
    color: '#fff',
  },
  nextForecast: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
    alignItems: 'center',
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

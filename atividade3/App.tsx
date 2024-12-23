import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import Home from './ui/home';
import { getLocalWeather, getWeatherFromCity } from './weatherFunctions/weather';
const WeatherApp = () => {
  const [weather, setWeather] = React.useState<any>({});
  const [city, setCity] = React.useState('');
  const [today, setToday] = React.useState<any>({});
  const [loaded, setLoaded] = React.useState(false)
  const [changeCity, setChangeCity] = React.useState(false);
  let lastFunctionUsed: ((city:string) => any) | null = null;
  const fetchWeather = async (city:string) => {
    lastFunctionUsed = fetchWeather;
    const aux = await getLocalWeather();
    if (aux) {
      setWeather(aux.results);
      setToday(aux.results.forecast[0]);
      setLoaded(true);
    }
  };

  const useLastFunctionUsed = async () => {
    if (lastFunctionUsed === null) {
      await fetchWeather(city);
    } else {
      await lastFunctionUsed(city);
      
    }
  }

  React.useEffect(() => {
    useLastFunctionUsed();
  }, []);

  const getWeatherOnCity = async (city:string) => {
    lastFunctionUsed=getWeatherOnCity;
    
    const aux = await getWeatherFromCity(city);
    if (aux) {
      setWeather(aux.results);
      setToday(aux.results.forecast[0]);
      setLoaded(true);
      setChangeCity(false);
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      {loaded === true ? (
        <Home setChangeCity={setChangeCity} changeCity={changeCity} weather={weather} today={today} city={city} setCity={setCity} searchWeatherByCityName={getWeatherOnCity} onRefresh={useLastFunctionUsed}/>
      ) : (
        <ScrollView style={styles.container}>
          <Text>Carregando</Text>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

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
    marginVertical: 20,
  },
  weatherIcon: {
    width: 100,
    height: 100,
  },
  temperature: {
    color: '#fff',
    fontSize: 72,
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
  },
  forecastItem: {
    flexDirection: 'row',
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
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
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

export default WeatherApp;

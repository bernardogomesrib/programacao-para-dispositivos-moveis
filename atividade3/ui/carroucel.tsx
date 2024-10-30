import { Dimensions, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import PagerView from 'react-native-pager-view';
import { switchStringForpng, switchStringForpngMoon, tradutorDeFazesDaLua } from '../weatherFunctions/switcher';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const WeatherCarousel = ({ weather, onClick }: { weather: any, onClick: () => void }) => {

  return (

    <View>
      <PagerView style={styles.pagerView} initialPage={0}>
        <View key="0">
          <View style={styles.weatherContainer}>
            <TouchableWithoutFeedback onPress={onClick}>
              {switchStringForpng(weather?.condition_slug ?? '', false)}
            </TouchableWithoutFeedback>
            <Text style={styles.temperature}>{weather?.temp}°</Text>
            <Text style={styles.weatherDesc}>Temperaturas</Text>
            <Text style={styles.tempRange}>Máx: {weather?.forecast[0].max}° Min: {weather?.forecast[0].min}°</Text>
          </View>
        </View>

        <View key="1">
          <View style={styles.moonContainer}>
            <Text style={styles.moonPhase}>Fase da Lua</Text>
            <TouchableWithoutFeedback onPress={onClick}>
              {switchStringForpngMoon(weather?.moon_phase ?? '')}
            </TouchableWithoutFeedback>
              <Text style={styles.moonDescription}>{tradutorDeFazesDaLua( weather?.moon_phase?? '')}</Text>
          </View>
        </View>
      </PagerView>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Adicionando cor de fundo para verificar o layout
  },
  pagerView: {
    flexGrow: 1,
    width: screenWidth,
    height: screenHeight * 0.45,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333', // Adicionando cor de fundo para verificar o layout
  },
  weatherContainer: {
    alignItems: 'center',
    padding: 20,
  },
  temperature: {
    color: '#fff',
    fontSize: 60,
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
  moonContainer: {
    alignItems: 'center',
    padding: 20,
  },
  moonPhase: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '500',
  },
  moonDescription: {
    color: '#fff',
    fontSize: 18,
  },
});

export default WeatherCarousel;

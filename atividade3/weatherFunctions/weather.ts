import axios from 'axios';
import * as Location from 'expo-location';
import { Alert } from 'react-native';

const localPosition = async () => {
    try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            throw new Error('Permission to access location was denied');
        }

        const location = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = location.coords;
        return { latitude, longitude };
    } catch (error:any) {
        console.error(error);
        Alert.alert("Erro ao pegar sua posição de gps!",error.message);
        return { latitude: undefined, longitude: undefined };
    }
}
const getLocalWeather = async () => {
    const { latitude, longitude }: { latitude: number | undefined, longitude: number | undefined } = await localPosition();

    if (latitude === undefined || longitude === undefined) {
        return {};
    }
    return axios.get(process.env.EXPO_PUBLIC_LOCAL_FUNNY_SITE+"?key="+process.env.EXPO_PUBLIC_LOCAL_FUNNY_NUMBER+"&lat="+latitude+"&lon="+longitude+"&user_ip=remote").then((result) => {
        return result.data;
    }).catch((err) => {
        Alert.alert("Erro ao pegar informações da api!",err.message);
    });
}
const getWeatherFromCity = async (city:string) => {
    return axios.get(process.env.EXPO_PUBLIC_LOCAL_FUNNY_SITE+"?key="+process.env.EXPO_PUBLIC_LOCAL_FUNNY_NUMBER+"&city_name="+city).then((result) => {
        return result.data;
    }).catch((err) => {
        Alert.alert("Erro ao pegar informações da api!",err.message);
    });
}
export { getLocalWeather, getWeatherFromCity, localPosition };


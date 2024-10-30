import { Image } from 'react-native';


const switchStringForpng = (weather: string,icon:boolean) => {
    if(icon){
        switch (weather) {
            case 'clear_day':
                return <Image source={require('../assets/API_ASSETS/hg-brasil-conditions-slugs/clear_day.png')} style={{width:35,height:35}} />;
            case 'clear_night':
                return <Image source={require('../assets/API_ASSETS/hg-brasil-conditions-slugs/clear_night.png')} style={{width:35,height:35}}/>;
            case 'cloud':
                return <Image source={require('../assets/API_ASSETS/hg-brasil-conditions-slugs/cloud.png')} style={{width:35,height:35}}/>;
            case 'cloudly_day':
                return <Image source={require('../assets/API_ASSETS/hg-brasil-conditions-slugs/cloudly_day.png')} style={{width:35,height:35}}/>;
            case 'cloudly_night':
                return <Image source={require('../assets/API_ASSETS/hg-brasil-conditions-slugs/cloudly_night.png')} style={{width:35,height:35}}/>;
            case 'rain':
                return <Image source={require('../assets/API_ASSETS/hg-brasil-conditions-slugs/rain.png')} style={{width:35,height:35}}/>;
            case 'storm':
                return <Image source={require('../assets/API_ASSETS/hg-brasil-conditions-slugs/storm.png')} style={{width:35,height:35}}/>;
            case 'snow':
                return <Image source={require('../assets/API_ASSETS/hg-brasil-conditions-slugs/snow.png')} style={{width:35,height:35}}/>;
            case 'fog':
                return <Image source={require('../assets/API_ASSETS/hg-brasil-conditions-slugs/fog.png')} style={{width:35,height:35}}/>;
        }
    }
    switch (weather) {
        case 'clear_day':
            return <Image source={require('../assets/API_ASSETS/hg-brasil-conditions-slugs/clear_day.png')} style={{width:200,height:200}} />;
        case 'clear_night':
            return <Image source={require('../assets/API_ASSETS/hg-brasil-conditions-slugs/clear_night.png')} style={{width:200,height:200}}/>;
        case 'cloud':
            return <Image source={require('../assets/API_ASSETS/hg-brasil-conditions-slugs/cloud.png')} style={{width:200,height:200}}/>;
        case 'cloudly_day':
            return <Image source={require('../assets/API_ASSETS/hg-brasil-conditions-slugs/cloudly_day.png')} style={{width:200,height:200}}/>;
        case 'cloudly_night':
            return <Image source={require('../assets/API_ASSETS/hg-brasil-conditions-slugs/cloudly_night.png')} style={{width:200,height:200}}/>;
        case 'rain':
            return <Image source={require('../assets/API_ASSETS/hg-brasil-conditions-slugs/rain.png')} style={{width:200,height:200}}/>;
        case 'storm':
            return <Image source={require('../assets/API_ASSETS/hg-brasil-conditions-slugs/storm.png')} style={{width:200,height:200}}/>;
        case 'snow':
            return <Image source={require('../assets/API_ASSETS/hg-brasil-conditions-slugs/snow.png')} style={{width:200,height:200}}/>;
        case 'fog':
            return <Image source={require('../assets/API_ASSETS/hg-brasil-conditions-slugs/fog.png')} style={{width:200,height:200}}/>;
    }
}
const switchStringForpngMoon=(weather:string)=>{
    switch (weather) {
        case "waning_crescent":
            return <Image source={require('../assets/API_ASSETS/hg-brasil-moon-phases/waning_crescent.png')} style={{width:200,height:200}}/>;
        case "last_quarter":
            return <Image source={require('../assets/API_ASSETS/hg-brasil-moon-phases/last_quarter.png')} style={{width:200,height:200}}/>;
        case "waning_gibbous":
            return <Image source={require('../assets/API_ASSETS/hg-brasil-moon-phases/waning_gibbous.png')} style={{width:200,height:200}}/>;
        case "new":
            return <Image source={require('../assets/API_ASSETS/hg-brasil-moon-phases/new.png')} style={{width:200,height:200}}/>;
        case "waxing_crescent": 
            return <Image source={require('../assets/API_ASSETS/hg-brasil-moon-phases/waxing_crescent.png')} style={{width:200,height:200}}/>;
        case "first_quarter":
            return <Image source={require('../assets/API_ASSETS/hg-brasil-moon-phases/first_quarter.png')} style={{width:200,height:200}}/>;
        case "waxing_gibbous":
            return <Image source={require('../assets/API_ASSETS/hg-brasil-moon-phases/waxing_gibbous.png')} style={{width:200,height:200}}/>;
        case "full":
            return <Image source={require('../assets/API_ASSETS/hg-brasil-moon-phases/full.png')} style={{width:200,height:200}}/>;
        default:
            break;
    }
}
const tradutorDeFazesDaLua=(weather:string)=>{
    switch (weather) {
        case "waning_crescent":
            return "Minguante Côncava";

        case "last_quarter":
            return "Quarto Minguante";
        case "waning_gibbous":
            return "Minguante Gibosa";
        case "new":
            return "Nova";
        case "waxing_crescent":
            return "Crescente Côncava";
        case "first_quarter":
            return "Quarto Crescente";
        case "waxing_gibbous":
            return "Crescente Gibosa";
        case "full":
            return "Cheia";
        default:
            break;
    }
    
}
export { switchStringForpng, switchStringForpngMoon, tradutorDeFazesDaLua };


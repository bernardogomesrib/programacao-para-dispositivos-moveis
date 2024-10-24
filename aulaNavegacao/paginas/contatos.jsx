import axios from "axios";
import React from "react";
import { Alert, View } from "react-native";
import ButtonContato from "../ui/contato";

export default function Contatos({navigation,route}){
    const usuarioEntrado = JSON.stringify(route);
    const [contatos,setContatos] = React.useState([]);
    React.useEffect(()=>{
        if(route.params){
            console.log(JSON.stringify(route.params))
            axios.get("http://192.168.1.20:3001/contatos").then((result)=>{
                setContatos(result.data);
                console.log(result.data.length);
            })
            .catch((error)=>{Alert.alert("ERRO!",error.message)})
        }
    },[])
    return(
        <View style={{
            flex: 1,
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: 1,
            width: "100%",
            backgroundColor:"rgb(231,221,215)"
        }}>
            
            {contatos.map((contato) => (
                <ButtonContato key={contato.id} contato={contato} navigation={navigation}/>
            ))}
        </View>
    );
}

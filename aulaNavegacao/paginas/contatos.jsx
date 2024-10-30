import axios from "axios";
import React from "react";
import { Alert, ScrollView } from "react-native";
import ButtonContato from "../ui/contato";

export default function Contatos({ navigation, route }) {
    const [contatos, setContatos] = React.useState([]);
    React.useEffect(() => {
        if (route.params) {
            
            axios
                .get(`${process.env.EXPO_PUBLIC_LOCAL_API_URL}/contatos`)
                .then((result) => {
                    setContatos(result.data);
                })
                .catch((error) => {
                    Alert.alert("ERRO!", error.message);
                });
        }
    }, [route.params]);
 
    
    return(
        <ScrollView contentContainerStyle={{
            flexGrow: 1,
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: 1,
            width: "100%",
            backgroundColor:"rgb(231,221,215)"
        }}>
            {contatos.sort((a, b) => a.nome.localeCompare(b.nome)).map((contato) => (
                <ButtonContato key={contato.id} contato={contato} navigation={navigation}/>
            ))}
        </ScrollView>
    );
}

import axios from "axios";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { styles } from "../stylesheet/stylesheet";
import Button from "../ui/button/button";

export default function DetalhesContato({navigation,route}){
    const contato = route.params.contato;
    const [nome, setNome] = useState(contato.nome);
    const [email, setEmail] = useState(contato.email);
    const [telefone, setTelefone] = useState(contato.telefone);
    const [desabilitado, setDesabilitado] = useState(true);
    const [id, setId] = useState(contato.id);
    const salvarEdicao = () => {
        axios.put(`http://192.168.1.20:3001/contatos/${id}`,{
            nome: nome,
            email: email,
            telefone: telefone
        }).then((result)=>{
            if(result.status===200){
                alert("Contato editado com sucesso!");
                navigation.goBack();
            }
        }).catch((error)=>{
            alert("Erro ao editar contato!");
            console.error(error);
        });
    }
    return(
        <View style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-start",
            
            gap: 1,
            width: "100%",
            backgroundColor:"rgb(231,221,215)"
        }}>
            
            <Text style={styles.label}>Nome: {contato.nome}</Text>
            <TextInput style={styles.input} value={nome} onChangeText={setNome} editable={!desabilitado}/>
            <Text style={styles.label}>Telefone: {contato.telefone}</Text>
            <TextInput style={styles.input} value={telefone} onChangeText={setTelefone} editable={!desabilitado}/>
            <Text style={styles.label}>Email: {contato.email}</Text>
            <TextInput style={styles.input} value={email} onChangeText={setEmail} editable={!desabilitado}/>
            <Button
                onPress={() => {setDesabilitado(!desabilitado)}}
                title="Editar"
                style={styles.bt}
                textStyle={styles.textStyle}
            />
            {desabilitado==false? (<Button
                title = "Salvar"
                style={styles.bt2}
                textStyle={styles.textStyle}
                onPress={() => {}}
            />):(<Button
                onPress={() => navigation.goBack()}
                title="Voltar"
                style={styles.bt}
                textStyle={styles.textStyle}
            />)}
        </View>
    );
}
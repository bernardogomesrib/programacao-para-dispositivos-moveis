import axios from "axios";
import * as React from "react";
import { Alert, Image, ScrollView, Text, TextInput } from "react-native";
import { styles } from "../stylesheet/stylesheet";
import Button from "../ui/button/button";

export default function LoginScreen({ navigation }) {
  const [email,setEmail]=React.useState("");
  const [senha,setSenha]=React.useState("");
  const login = () => {
    
    const url = "http://192.168.1.20:3001/usuarios?email="+email+"&senha="+senha
    console.log(url)
    axios.get(url).then((result)=>{
      if(result.status===200&&result.data.length===1){
        navigation.navigate("Lista de contatos",result.data[0])
      }else{
        Alert.alert("não sei como",JSON.stringify(result.data))
      }
    })
    .catch((error)=>{Alert.alert("Um erro ocorreu!",error.message)})
  };
  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
        width: "100%",
        backgroundColor: "rgb(231,221,215)",
      }}
    >
      <Image
        source={require("../assets/avatar.png")}
        style={{ width: 200, height: 200, borderRadius: 100 }}
      />
      <Text style={styles.label}>login</Text>
      <TextInput aria-label="login" style={styles.input} value={email} onChangeText={setEmail}/>
      <Text style={styles.label}>senha</Text>
      <TextInput aria-label="senha" style={styles.input} value={senha} onChangeText={setSenha} secureTextEntry/>
      <Button
        onPress={login}
        title="Login"
        style={styles.bt}
        textStyle={styles.textStyle}
      />
      <Button
        style={styles.bt2}
        onPress={() => navigation.navigate("Usuário")}
        title="Cadastre-se"
        textStyle={styles.textStyle}
      />
    </ScrollView>
  );
}

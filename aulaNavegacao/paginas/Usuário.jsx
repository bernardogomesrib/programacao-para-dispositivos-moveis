import axios from "axios";
import React from "react";
import { Alert, Text, TextInput, View } from "react-native";
import styles from "../stylesheet/stylesheet";
import Button from "../ui/button/button";
export default function Usuário({ navigation }) {
  const [nome, setNome] = React.useState("");
  const [cpf, setCpf] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const save = (usr) => {
    axios
      .post("http://192.168.1.20:3001/usuarios", usr)
      .then((resp) => {
        if (resp.status === 201) {
          Alert.alert("Conta criada", "Parabéns a sua conta foi criada!");
          navigation.navigate("login");
        } else {
          Alert.alert(
            "não foi possivel salvar",
            "um erro ocorreu: STATUS" + resp.status
          );
        }
      })
      .catch((error) => {
        Alert.alert("um erro ocorreu", error.message);
      });
  };

  const salvar = () => {
    // Implement the save functionality here
    const usuarioRequest = {
      nome: nome,
      cpf: cpf,
      email: email,
      senha: senha,
    };
    axios
      .get("http://192.168.1.20:3001/usuarios?email=" + email)
      .then((resp) => {
        if (resp.data.length > 0) {
          Alert.alert(
            "Não foi posível cadastrar",
            "já existe alguém com este email"
          );
        } else {
          axios
            .get("http://192.168.1.20:3001/usuarios?cpf=" + cpf)
            .then((resp) => {
              if (resp.data.length > 0) {
                Alert.alert(
                  "Não foi posível cadastrar",
                  "já existe alguém com este cpf"
                );
              } else {
                save(usuarioRequest);
              }
            })
            .catch((error) => {
              Alert.alert("um erro ocorreu", error.message);
            });
        }
      })
      .catch((error) => {
        Alert.alert("um erro ocorreu", error.message);
      });
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
        width: "100%",
        backgroundColor: "rgb(231,221,215)",
      }}
    >
      <Text style={styles.label}>nome</Text>
      <TextInput
        style={styles.input}
        aria-label="nome"
        value={nome}
        onChangeText={setNome}
      />
      <Text style={styles.label}>cpf</Text>
      <TextInput
        style={styles.input}
        aria-label="cpf"
        value={cpf}
        onChangeText={setCpf}
      />
      <Text style={styles.label}>email</Text>
      <TextInput
        style={styles.input}
        aria-label="email"
        value={email}
        onChangeText={setEmail}
      />
      <Text style={styles.label}>senha</Text>
      <TextInput
        style={styles.input}
        aria-label="senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      <Button
        title="Salvar"
        style={styles.bt}
        textStyle={styles.textStyle}
        onPress={salvar}
      />
    </View>
  );
}

import axios from "axios";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { styles } from "../stylesheet/stylesheet";
import Button from "../ui/button/button";

export default function DetalhesContato({ navigation, route }) {
  const contato = route.params.contato;
  const [nome, setNome] = useState(contato.nome);
  const [email, setEmail] = useState(contato.email);
  const [telefone, setTelefone] = useState(contato.telefone);
  const [desabilitado, setDesabilitado] = useState(true);
  const [id, setId] = useState(contato.id);
  const salvarEdicao = () => {
    console.log("Salvando edição");
    axios
      .put(`${process.env.EXPO_PUBLIC_LOCAL_API_URL}/contatos/${id}`, {
        nome: nome,
        email: email,
        telefone: telefone,
      })
      .then((result) => {
        console.log(result.status);
        if (result.status === 200) {
          alert("Contato editado com sucesso!");
          navigation.navigate("Lista de contatos", { merge: true });
        }
      })
      .catch((error) => {
        alert("Erro ao editar contato!");
        console.error(error);
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
      <Text style={styles.label}>Nome: {contato.nome}</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        editable={!desabilitado}
      />
      <Text style={styles.label}>Telefone: {contato.telefone}</Text>
      <TextInput
        style={styles.input}
        value={telefone}
        onChangeText={setTelefone}
        editable={!desabilitado}
      />
      <Text style={styles.label}>Email: {contato.email}</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        editable={!desabilitado}
      />
      <Button
        onPress={() => {
          setDesabilitado(!desabilitado);
        }}
        title="Editar"
        style={styles.bt}
        textStyle={styles.textStyle}
      />
      {desabilitado == false ? (
        <Button
          title="Salvar"
          style={styles.bt2}
          textStyle={styles.textStyle}
          onPress={salvarEdicao}
        />
      ) : (
        <Button
          onPress={() =>
            axios
              .delete(`${process.env.EXPO_PUBLIC_LOCAL_API_URL}/contatos/${id}`)
              .then((result) => {
                if (result.status === 200) {
                  alert("Contato excluido com sucesso!");
                  navigation.navigate("Lista de contatos", { merge: true });
                }
              })
              .catch((error) => {
                alert("Erro ao excluir contato!");
                console.error(error);
              })
          }
          title="Excluir"
          style={styles.bt}
          textStyle={styles.textStyle}
        />
      )}
    </View>
  );
}

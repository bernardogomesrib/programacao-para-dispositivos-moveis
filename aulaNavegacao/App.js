import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { Text, View } from "react-native";
import './css.css';
import AdicionarContatos from "./paginas/adicionarContatos";
import Contatos from "./paginas/contatos";
import DetalhesContato from "./paginas/detalhesContatos";
import LoginScreen from "./paginas/login";
import Usuário from "./paginas/Usuário";
import { styles } from "./stylesheet/stylesheet";
import Button from "./ui/button/button";
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        style={styles.bt}
        onPress={() => navigation.navigate("login")}
        title="Fazer login"
        textStyle={styles.textStyle}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="Usuário" component={Usuário} />
        <Stack.Screen
          name="Lista de contatos"
          component={Contatos}
          options={({ navigation }) => ({
            title: 'Lista de contatos',
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate('Adicionar Contatos')}
                title="+"
                style={styles.bt3}
              />
            ),
          })}
        />
        <Stack.Screen name="Adicionar Contatos" component={AdicionarContatos} />
        <Stack.Screen name="Detalhes Contato" component={DetalhesContato} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

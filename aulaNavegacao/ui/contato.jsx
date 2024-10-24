import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../stylesheet/stylesheet";

export default function ButtonContato({ navigation, contato }) {
  
  const press = () => {
    navigation.navigate("Detalhes Contato", { contato: contato });
  };
const localStyle = StyleSheet.create({
    container: {
            flex: 1,
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: 1,
            width: "100%",
            backgroundColor: "rgb(231,221,215)",
            
            borderBottomWidth: 3,
            borderColor: "black",
            borderStyle: "solid",
            maxHeight: 100,
    }
})
return (
    <View style={localStyle.container}>
        <TouchableOpacity onPress={press} style={{width:"100%",flexDirection: "row"}}>
            <View style={{ aspectRatio: 1, width: "20%", overflow: "hidden" }}>
                <Image
                    source={require("../assets/avatar.png")}
                    style={{ width: "100%", height: "100%", borderRadius: 100, resizeMode: "cover" }}
                />
            </View>
            <View style={{ width: "79%"}}>
                <Text style={styles.txtStyle}>{contato.nome}</Text>
                <Text style={styles.txtStyle}>{contato.telefone}</Text>
            </View>
        </TouchableOpacity>
    </View>
);
}

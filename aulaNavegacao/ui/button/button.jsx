import { Text, TouchableOpacity, View } from "react-native";

export default function Button({ title, onPress, style,textStyle }) {
  const styles = style;

  const txtStyle = textStyle;
  return (
    <View style={styles}>
      <TouchableOpacity style={styles} onPress={onPress}>
        <Text style={txtStyle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

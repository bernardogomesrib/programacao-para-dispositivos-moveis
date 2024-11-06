import { View } from "@/components/Themed";
import * as ExpoImagePicker from 'expo-image-picker';
import { useState } from "react";
import { Button, Image, ScrollView, Text, useColorScheme } from 'react-native';

export default function App() {
    const colorScheme = useColorScheme();
    const backgroundColor = colorScheme === 'dark' ? '#000' : '#fff';
    const textColor = colorScheme === 'dark' ? '#fff' : '#000';
    const [image, setImage] = useState<ExpoImagePicker.ImagePickerAsset[] | null>(null);

    return (
        <ScrollView contentContainerStyle={{ display: 'flex', flexGrow: 1, backgroundColor: backgroundColor, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ display: 'flex', color: textColor }}>
                Hello, World!
            </Text>
            <View style={{ width: '40%' }}>
                <Button onPress={async () => {
                    const result = await ExpoImagePicker.launchImageLibraryAsync({
                        mediaTypes: ExpoImagePicker.MediaTypeOptions.All,
                        allowsMultipleSelection: true,
                        allowsEditing: false,
                        quality: 1,
                    });

                    if (!result.canceled) {
                        setImage(result.assets);

                    }
                }} title="Escolher imagem" />

            </View>

            {image && image.map((img, index) => (
                <View key={index} style={{ width: "100%", display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'center', alignItems: 'center',gap:5 }}>
                    <Image source={{ uri: img.uri }} style={{ width: "50%", aspectRatio: img.width / img.height, marginVertical: 10 }} />
                    <View style={{ width: '30%', height: 'auto' }}>
                        <Button onPress={() => {
                            setImage(prevImages => prevImages?.filter((_, i) => i !== index) || null);
                        }} title="Excluir imagem" />
                    </View>
                </View>
            ))}
            {image&& image.length>0&&<View style={{ width: '40%' }}>
                <Button onPress={async () => { }} title="Enviar imagens" />
            </View>}
        </ScrollView>
    );
}
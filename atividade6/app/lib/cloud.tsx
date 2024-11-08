import * as ImagePicker from 'expo-image-picker';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Button, Image, ScrollView, Text, View } from 'react-native';

const CloudinaryUpload = () => {
    const [image, setImage] = useState<any>(null);
    const [uploading, setUploading] = useState(false);
    const [uploadedImages, setUploadedImages] = useState<any>([]);
    const CLOUD_NAME = "ddfziqvrw";
    const k = '994762338755181';
    const sc = '1da2Z6pYmJhTT2RZ0DoAJ6FHRNE';
    
    const fetchImages = async () => {
            
        const URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/search/`;
        try {
            const response = await fetch(URL, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "expression": "uploaded_at<730d AND resource_type:image",
                    "sort_by": [{ "public_id": "desc" }],
                    "api_key": k.toString(),
                    "api_secret": sc.toString(),
                    "Authorization": `Basic ${btoa(`${k}:${sc}`)}`
                }
            });
            const responseData = await response.json();
            
            setUploadedImages(responseData.resources.map((image: any) => ({ uri: image.url, public_id: image.public_id })));

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        
        fetchImages();
    }, []);
    // Função para 'selecionar' uma imagem
    const pickImage = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (!permissionResult.granted) {
            alert("Permission to access gallery is required!");
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage({ uri: result.assets[0].uri });
        }
    };
    // Função para fazer o upload da imagem
    const uploadImage = async () => {
        if (!image) {
            Alert.alert("Please select an image first");

            return;
        }
        const CLOUD_NAME = "ddfziqvrw";
        const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload/`;
        setUploading(true);
        let file = {
            uri: image.uri,
            type: 'image/jpeg',
            name: 'upload.jpg'
        };
        const data = new FormData();
        data.append('upload_preset', 'atividade');
        data.append('file', file);
        data.append('api_key', k);
        data.append('folder', 'uploadsAtividade');
        data.append('tags', 'atividade');
        data.append('timestamp', Math.floor(Date.now() / 1000).toString());

        fetch(CLOUDINARY_URL, {
            method: 'post',
            body: data
        }).then((response) => response.json())
            .then((data) => {
                setUploading(false);
                console.log(data);
                if (data.secure_url) {
                    setUploadedImages([{ uri: data.url, public_id: data.public_id },...uploadedImages]);
                } else {
                    alert(data.error.message);
                }
            }).catch((error) => {
                setUploading(false);
                console.log(error);
            });

    };
    const deleteImage = async (public_id: string) => {
        const CLOUD_NAME = "ddfziqvrw";
        const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/image/upload/?keep_original=0`;
        const k = '994762338755181';
        const data = new FormData();
        const list = [];
        list.push(public_id);
        data.append('public_ids', list);
        data.append('api_key', k);
        data.append('api_secret', sc);
        data.append('Authorization', `Basic ${btoa(`${k}:${sc}`)}`);
        
        fetch(CLOUDINARY_URL, {
            method: 'delete',
            headers: {
                "Authorization": `Basic ${btoa(`${k}:${sc}`)}`
            },
            body: data
        }).then((response) => response.json())
            .then((data) => {
                console.log(data);
                    fetchImages();
                    alert(data.error.message);
            }).catch((error) => {
                console.log(error);
            });
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            {image && <Image source={{ uri: image.uri }} style={{ width: 200, height: 200, marginBottom: 20 }} />}
            <Button title="Pick an Image" onPress={pickImage} />
            <Button title="Upload Image" onPress={uploadImage} disabled={uploading} />
            {uploading && <ActivityIndicator size="large" color="#0000ff" style={{ marginTop: 20 }} />}
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Uploaded Images:</Text>
            <ScrollView >
            {uploadedImages.length > 0 && (
                <View style={{ marginTop: 20, width: '100%' }}>
                    {uploadedImages.map((image: any,key:number) => (
                        <View key={key} style={{ marginTop: 10, alignItems: 'center',flexDirection:'row' }}>
                            {/* <Image source={{ image.uri }} style={{ width: 100, height: 100, marginBottom: 10 }} /> */}
                            <Image source={{ uri: image.uri }} style={{ width: 100, height: 100, marginBottom: 10 }} />
                            <Button title="Delete" onPress={() => { console.log(image.public_id);deleteImage(image.public_id) }} />
                        </View>
                    ))}
                </View>
            )}
            </ScrollView>
        </View>
    );
};

export default CloudinaryUpload;
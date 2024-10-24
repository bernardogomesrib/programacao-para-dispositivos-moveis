import axios from 'axios';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import * as styleSheet from '../stylesheet/stylesheet';
import Button from '../ui/button/button';
export default function AdicionarContatos({ navigation, route }) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');

    const handleSaveContact = async () => {
        try {
            const response = await axios.post('http://192.168.1.20:3001/contatos', {
                nome,
                email,
                telefone
            });
            if (response.status === 201) {
                alert('Contato salvo com sucesso!');
                navigation.goBack();
            }
        } catch (error) {
            alert('Erro ao salvar contato');
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styleSheet.styles.label}>Nome</Text>
            <TextInput
                style={styleSheet.styles.input}
                placeholder="Nome"
                value={nome}
                onChangeText={setNome}
            />
            <Text style={styleSheet.styles.label}>Email</Text>
            <TextInput
                style={styleSheet.styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <Text style={styleSheet.styles.label}>Telefone</Text>
            <TextInput
                style={styleSheet.styles.input}
                placeholder="Telefone"
                value={telefone}
                onChangeText={setTelefone}
                keyboardType="phone-pad"
            />
            <Button title="Salvar Contato" onPress={handleSaveContact} style={styleSheet.styles.bt} textStyle={styleSheet.styles.textStyle}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
        gap:10,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: "rgb(231,221,215)",
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
});
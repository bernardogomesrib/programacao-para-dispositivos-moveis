import React from 'react';
import { StyleSheet } from 'react-native';
import CloudinaryUpload from '../lib/cloud';

export default function Casa() {
    return (
        <CloudinaryUpload/>
    );
}
/* <View style={styles.container}>

            <Text style={styles.title}>Home</Text>

            <View style={{ margin: 20 }}>
                <Text>home screen</Text>
            </View>
            
            <Link push href="/push"><Text>pushed screen</Text></Link>
        </View> */

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
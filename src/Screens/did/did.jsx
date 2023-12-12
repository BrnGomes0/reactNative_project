import react, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

function did () {
    const [number, setNumber] = useState('')
    return(
        <View style={styles.container}>
            <Text>YOUR PIX DID FOR ACCOUNT{number}</Text>
        </View>
    );
}

export default did;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#252525',
    },
    text: {
        color: 'gray',
        fontSize: 16,
        padding: 10,
    },
    balance: {
        color: '#E4EE00',
        fontSize: 20,
    },
    tittle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
        width: 200,
    },
    textArea: {
        flex: 1,
        marginTop: 80,
        padding: 20,
    },
    input:{
        backgroundColor: '#d9d9d94d',
        borderRadius: 10,
        height: 40,
        width: 300,
        color: 'white',
        padding: 10,
        marginTop: 20,
    },
    
    
})
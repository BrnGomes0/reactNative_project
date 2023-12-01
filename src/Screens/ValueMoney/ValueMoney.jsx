import react, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Button from "../../Components/Button/Button.jsx";
import Input from '../../Components/Input/Input.jsx'

function ValueMoney () {
    const balance = 'R$ 9.322,11'
    const [balnce, setbalnce] = useState('');
    return(
        <View style={styles.container}>
            <View style={styles.textArea}>
                <Text style={styles.tittle}>Enter the amount of your transfer</Text>
                <Text style={styles.text}>Current Balance: <Text style={styles.balance}>{balance}</Text></Text>
                <TextInput
                    placeholder='Enter your value'
                    style={styles.input}
                    keyboardType='numeric'
                    value={balnce}
                />
            </View>
            <Button
                 title={'Send'}
                 style={styles.button}
             />
        </View>
    );
}

export default ValueMoney;

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
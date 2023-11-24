import react from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Button from "../../Components/Button/Button";

function ValueMoney () {
    const balance = 'R$ 9.331,11'
    return(
        <View style={styles.container}>
            <View style={styles.textArea}>
                <Text style={styles.tittle}>Enter the amount of your transfer</Text>
                <Text style={styles.text}>Current Balance: <Text style={styles.balance}>{balance}</Text></Text>
                <TextInput
                    placeholder='Value'
                    style={styles.input}
                />
            </View>
            <Button
                title={'Send'}
            />
        </View>
    );
}

export default ValueMoney;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#252525',
        flexDirection: 'column',
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
    input: {
        marginTop: 20,
        width: 280,
        height: 40,
        padding: 24,
        borderColor: 'gray',
    }
})
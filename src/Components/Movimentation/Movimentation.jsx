import react, { useState } from "react";

import {
     View,
     Text,
     StyleSheet, 
     TouchableOpacity,
     ScrollView,
 } from "react-native";

export default function Movimentation ({data}) {
    const [showValue, setShowValue] = useState(false);
    const pressed = () => {
        setShowValue(!showValue);
    }
    return(
         <TouchableOpacity style={styles.container} onPress={pressed}>
            <Text style={styles.data}>{data.date}</Text>
            <View style={styles.content}>
                <Text style={styles.label}>{data.label}</Text>
                { showValue ? (
                    <Text style={data.type === 1 ? styles.value : styles.expenses}>{data.type === 1 ? `R$ ${data.value}` : 
                    `R$ -${data.value}`}</Text>
                ): (
                    <View style={styles.skeleton}></View>
                )}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 24,
        backgroundColor: '#d9d9d94d',
        borderRadius:10,
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2, 
        marginBottom:8,
        padding: 4,
    },
    data: {
        color: 'gray',
        fontWeight: 'bold',
    },
    label: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    value: {
        fontSize: 16,
        color: '#E4EE00',
        fontWeight: 'bold',
    },
    expenses: {
        fontSize: 16,
        color: 'red',
        fontWeight: 'bold',
    },
    skeleton: {
        marginTop: 6,
        width: 80,
        height: 10,
        backgroundColor: 'gray',
        borderRadius: 10,
    }
});
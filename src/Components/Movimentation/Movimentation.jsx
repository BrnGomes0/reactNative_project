import react, { useState } from "react";

import {
     View,
     Text,
     StyleSheet,
     TouchableOpacity,
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
        backgroundColor: '#8B8B8C',
        borderRadius:10,
        padding: 4,
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2, 
        marginBottom:8,
        padding: 4,
    },
    data: {
        color: '#4A4F59 ',
        fontWeight: 'bold',
        padding: 2,
    },
    label: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#E8E6ED'
    },
    value: {
        fontSize: 16,
        color: '#52FF78',
        fontWeight: 'bold',
    },
    expenses: {
        fontSize: 16,
        color: '#8C031C',
        fontWeight: 'bold',
    },
    skeleton: {
        marginTop: 6,
        width: 80,
        height: 10,
        backgroundColor: 'gray',
        borderRadius: 10,
    },
});
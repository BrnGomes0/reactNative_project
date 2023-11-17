import react from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

export default function Button ({title, onPress}) {
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 314,
        height: 60,
        backgroundColor: '#E4EE00',
        borderRadius: 8,
        padding: 15,
        height: 48,
        alignContent: 'center',
    },
    text: {
        alignItems: 'center',
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    }
});
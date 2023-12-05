import react, { useState } from "react";
import { StyleSheet, TextInput, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";

export default function Input (props) {
    const [sec, setSec] = useState(props.secureTextEntry)
    return(
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                underlineColorAndroid='transparent'
                placeholderTextColor='gray'
                placeholder={props.placeholder}
                {...props}
                secureTextEntry={sec}
                onChangeText={props.onChangeText}
                value={props.value}
            />
            <MaterialCommunityIcons
                name={props.icon}
                color='white'
                size={26}
                style={styles.icon}
            />
            {props.secureTextEntry && (
                <TouchableOpacity onPress={() => setSec(!sec)}>
                <MaterialCommunityIcons
                    name='eye'
                    size={20}
                    color='white'
                    style={styles.iconSecret}
                />
                </TouchableOpacity>
            )}
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 20,
    },
    input: {
        height: 50, 
        flex: 1, 
        backgroundColor: '#d9d9d94d',
        paddingLeft: 40,
        marginHorizontal: 20,
        borderRadius: 8,
        fontSize: 18,
        borderColor: '#D9D9D9',
        borderWidth: 1,
        color: 'white'
    },
    icon: {
        position: 'absolute',
        left: 26,
        top: 12,
    },
    iconSecret: {
        position: 'absolute',
        right: 30,
        top: 14,
    }
});
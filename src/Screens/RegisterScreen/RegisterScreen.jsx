import react, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";


function RegisterScreen() {

    const navigation = useNavigation();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [password, setPassword] = useState('');

    const saveData = async () => {
        try {
            const result = await axios.post('http://10.234.88.183:8000/api/v1/user/create',
                {
                    email: email,
                    password: password,
                    first_name: firstName,
                    last_name: lastName,
                    cpf: cpf,
                })
            console.log(result.data)
            navigation.navigate('LoginScreen')
        } catch (error) {
            console.log(error.response)
        }
        
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create an account</Text>
            <Text style={styles.text}>Create your account here. Look the your email after create account for to check code</Text>
            <Input
                placeholder='First Name: '
                icon='account'
                onChangeText={(txt) => setFirstName(txt)}
                value={firstName}
            />
            <Input
                placeholder='Last Name: '
                icon='account'
                onChangeText={(txt) => setLastName(txt)}
                value={lastName}
            />
            <Input
                placeholder='Email: '
                icon='email'
                onChangeText={(txt) => setEmail(txt)}
                value={email}
            />
            <Input
                placeholder='Cpf: '
                icon='card'
                onChangeText={(txt) => setCpf(txt)}
                value={cpf}
            />
            <Input
                placeholder='Password: '
                icon='lock-outline'
                secureTextEntry
                onChangeText={(txt) => setPassword(txt)}
                value={password}
            />
            <View style={styles.button}>
                <Button
                    title='Create an Account'
                    onPress={saveData}
                />
                <TouchableOpacity style={styles.textArea} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.text}>Do you already have an account?</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#252525',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'col',
    },
    text: {
        color: 'white',
        textAlign: 'center'
    },
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        paddingRight: 120,

    },
    button: {
        padding: 30
    },
    textButton: {
        textAlign: 'center',
        color: 'white'
    },

})
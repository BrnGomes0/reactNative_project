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
    
    const [account_agency, setAccount_agency] = useState('');
    const [account_number, setAccount_number] = useState('');
    const [account_balance, setAccount_balance] = useState('');
    const [account_type, setAccount_type] = useState('');

    // const createAccount = async (token) => {
    //     try {
    //         const configuration = {
    //             headers: {
    //                 Authorization: `Bearer ${token}`,
    //             },
    //         };

    //         const result = await axios.post('http://10.109.71.5:19006/api/v1/user/accounts',
    //             {
    //                 account_agency: account_agency,
    //                 account_number: account_number,
    //                 account_balance: account_balance,
    //                 account_type: account_type,
    //             },
    //             configuration
    //         );
    //         console.log(result.data);
    //     }catch(error){
    //         console.log(error);
    //     }
    // };

    const saveData = async () => {
        try {
            const result = await axios.post('http://10.109.71.5:19006/api/v1/user/create',
                {
                    email: email,
                    password: password,
                    first_name: firstName,
                    last_name: lastName,
                    cpf: cpf,
                });
            console.log(result.data)

            // if (result.data && result.data.token){
            //     console.log("Inside if block");
            //     const userToken = result.data.token;
            //     await createAccount(userToken)
            //     navigation.navigate('LoginScreen')
            // }
            navigation.navigate('LoginScreen')
        } catch (error) {
            console.log(error)
        }
        
    };

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
import react, { useState } from "react";
import { 
    View,
     Text,
    StyleSheet } from "react-native";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";


function RegisterScreen () {
    const registred = () => {
        console.warn('REGISTRED!')
    }
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState(0);
    const [date, setDate] = useState('');
    const [password, setPassword] = useState('');

    return(
        <View style={styles.container}>
        <Text style={styles.title}>Create an account</Text>
        <Text style={styles.text}>Create your account here. Look the your email after create account for to check code</Text>
        <Input
            placeholder='First Name'
            icon='account'
        />
        <Input
            placeholder='Second Name'
            icon='account'
        />
        <Input
            placeholder='Email'
            icon='email'
        />
        <Input
            placeholder='Phone'
            icon='phone'
        />
        <Input
            placeholder='Born Date'
            icon='calendar'
        />
        <Input
            placeholder='Password'
            icon='lock-outline'
            secureTextEntry
        />
        <Button
            title='Create an Account'
            onPress={registred}
        />
        <Text style={styles.text}>Already have an account?</Text>
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
        color:'white',
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    }
})
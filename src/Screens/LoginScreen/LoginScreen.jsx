import react, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Input from "../../Components/Input/Input.jsx";
import Button from "../../Components/Button/Button.jsx";
import SocialButton from '../../Components/SocialButton/SocialButton.jsx'
import { useNavigation } from "@react-navigation/native";


function LoginScreen () {
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const saveData = async () => {
        try {
            const result = await axios.post('http://10.109.71.4:8000/api/token/',
                {
                    email: email,
                    password: password
                })
            console.log(result.data)
            navigation.navigate('FirstScreen')
        } catch (error) {
            console.log(error.response)
        }
    }
    return(
        <View style={styles.container}>
            <Text style={styles.tittle}>Welcome Back</Text>
            <Text style={styles.text}>Welcome back to the best investment bank ever created on earth</Text>
            <Input
                placeholder='Email'
                icon='email'
                onChangeText={(txt) => setEmail(txt)}
                value={email}
            />
            <Input
                placeholder='Password'
                icon='lock-outline'
                secureTextEntry
                onChangeText={(txt) => setPassword(txt)}
                value={password}
            />
            <SocialButton
                text='Login Apple'
                name='apple'
            />
            <SocialButton
                text='Login Google'
                name='google'
            />
            <SocialButton
                text='Login Facebook'
                name='facebook'
            />
            <Button
                title='LogIn'
                style={styles.button}
                onPress={saveData}
            />
        </View>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#252525',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'col',
    },
    tittle: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        paddingRight: 180,  
        paddingTop: 0,  
    },
    text: {
        color: 'white',
    },
    button: {
        padding: 30,
    }
});
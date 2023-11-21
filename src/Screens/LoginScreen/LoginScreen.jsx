import react from "react";
import { View, StyleSheet, Text } from "react-native";
import Input from "../../Components/Input/Input.jsx";
import Button from "../../Components/Button/Button.jsx";
import SocialButton from '../../Components/SocialButton/SocialButton.jsx'

function LoginScreen () {
    return(
        <View style={styles.container}>
            <Text style={styles.tittle}>Welcome Back</Text>
            <Text style={styles.text}>Welcome back to the best investment bank ever created on earth</Text>
            <Input
                placeholder='Email'
                icon='email'
            />
            <Input
                placeholder='Password'
                icon='lock-outline'
                secureTextEntry
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
        fontSize: 20,
        fontWeight: 'bold',    },
    text: {
        color: 'white',
    }
});
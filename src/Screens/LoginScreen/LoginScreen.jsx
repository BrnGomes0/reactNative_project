import { StyleSheet } from "react-native";
import { View } from "react-native";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";

function LoginScreen () {
    return(
        <View>
        <Text>Create an account</Text>
        <Text>Create your account here. Look the your email after create account for to check code</Text>

        <Input
            placeholder='Email'
            icon='account'
        />
        <Input
            placeholder='Password'
            icon='lock-outline'
            secureTextEntry
        />
        <Button
            title='Create an Account'
        />
        <Text>Already have an account?<a href="/"> Login</a></Text>


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
        flexDirection: 'col'
    }
})
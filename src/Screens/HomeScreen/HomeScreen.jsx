import react from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Button from "../../Components/Button/Button";
import { useNavigation } from "@react-navigation/native";


function HomeScreen () {
    
    const nagivation = useNavigation()
    return(
        <View style={styles.container}>
            <Image
                source={require('../../../assets/imgs/logo.png')}
                
            />
            <Text style={styles.title}>Hello!</Text>
            <Text style={styles.text}>Welcome to BuBo bank. Log in to access your account and analyze your investments</Text>
            <Button
                title='SignIn'
                onPress={() => nagivation.navigate('LoginScreen')}
            />
            <TouchableOpacity onPress={() => nagivation.navigate('RegisterScreen')}>
                <Text style={styles.text}>New Here?</Text>
            </TouchableOpacity>
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#252525',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'col'
    },
    title: {
        fontSize: 60,
        color: 'white',
        fontWeight: 'bold',
    },
    text: {
        color: 'white',
        textAlign: 'center',
        fontSize: 14,
        width: 280,
    },
});
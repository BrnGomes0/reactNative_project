import react from "react";
import { StyleSheet, Text, View, Image} from 'react-native';
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";

function HomeScreen () {
    const btnPressed = () => {
        console.log('BUTTON PRESSED')
    }
    return(
        <View style={styles.container}>
            {/* <Image
                source={require('../../../assets/imgs/logo.png')}
            /> */}
            <img
                src={require('../../../assets/imgs/logo.png')}
                alt='Logo'
                style={styles.logo} 
            />
            <Text style={styles.title}>Hello!</Text>
            <Text style={styles.text}>Welcome to BuBo bank. Log in to access your account and analyze your investments</Text>
            <Button
                title='SignIn'
                onPress={btnPressed}
            />
            <Text style={styles.text}>New Here?<a href="/" style={styles.a}> Create Account</a></Text>
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
        color: '#E4EE00',
        fontWeight: 'bold',
    },
    text: {
        color: 'white',
        textAlign: 'center',
        fontSize: 14,
        width: 280,
    }, 
    logo: {
        padding: 210,
        width: 150, 
        height: 150, 
    },
    a : {
        color: '#E4EE00',
        textDecorationLine: 'none',
    }
});
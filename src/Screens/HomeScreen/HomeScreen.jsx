import react from "react";
import { StyleSheet, Text, View, Image} from 'react-native';
import Button from "../../Components/Button/Button";

function HomeScreen () {
    const btnPressed = () => {
        console.log('BUTTON PRESSED')
    }
    return(
        <View style={styles.container}>
            <Image
                source={require('../../../assets/imgs/logo.png')}
                
            />
            <Text style={styles.title}>Hello!</Text>
            <Text style={styles.text}>Welcome to BuBo bank. Log in to access your account and analyze your investments</Text>
            <Button
                title='SignIn'
                onPress={btnPressed}
            />
            <Text style={styles.text}>New Here?</Text>
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
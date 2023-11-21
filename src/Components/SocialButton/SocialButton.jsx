import react from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { StyleSheet } from "react-native";


function SocialButton (props) {
    return(
       <TouchableOpacity>
        <View style={styles.container}>
            <MaterialCommunityIcons
                name={props.name}
                color='white'
                size={26}
                style={styles.icon}
            />
            <Text style={styles.text}>{props.text}</Text>
        </View>
       </TouchableOpacity>
      
    );
}

export default SocialButton;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: '#d9d9d94d',
        width: 222,
        height: 60,
        borderRadius: 10,
    },
    icon : {
        position: 'absolute',
        left: 16,
        top: 15,
    },
    text: {
        color: 'white',
        alignItems: 'center'
    }
});
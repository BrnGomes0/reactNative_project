import React from 'react'   
import { 
    View, 
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Image,
 } from 'react-native'
 import { MaterialCommunityIcons } from "react-native-vector-icons";
 import { MaterialIcons } from "react-native-vector-icons";
 import { Ionicons } from "react-native-vector-icons";
 import { Fontisto } from "react-native-vector-icons"
 import { useNavigation } from '@react-navigation/native';

export default function Action() {
    const navigation = useNavigation();
  return (
    <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('ValueMoney')}>
            <View style={styles.areaButton}>
               <Image
                source={require('../../../assets/imgs/pix32.png')}
                style={styles.icone}
               />
            </View>
            <Text style={styles.labelButton}>Pix</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
                <Fontisto
                    name='arrow-swap'
                    color='white'
                    size={26}
                />
            </View>
            <Text style={styles.labelButton}>Transfer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
                <MaterialIcons
                    name='attach-money'
                    color='white'
                    size={26}

                />
            </View>
            <Text style={styles.labelButton}>Money</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
                <Ionicons
                    name='card-outline'
                    color='white'
                    size={26}

                />
            </View>
            <Text style={styles.labelButton}>Cards</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
                <MaterialCommunityIcons
                    name='piggy-bank-outline'
                    color='white'
                    size={26}
                />
            </View>
            <Text style={styles.labelButton}>Entradas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
                <MaterialCommunityIcons
                    name='bitcoin'
                    color='white'
                    size={26}
                />
            </View>
            <Text style={styles.labelButton}>Entradas</Text>
        </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        maxHeight: 84,
        marginBottom: 14,
        marginTop: 18, 
        paddingEnd: 14,
        paddingStart: 14,
    },
    actionButton: {
        alignItems: 'center',
        marginRight: 32,
    },
    areaButton: {
        backgroundColor: 'gray',
        height: 60, 
        width: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    labelButton: {
        marginTop: 4,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'gray',
    },
    icone :{
        width: 20, 
        height: 20,
        justifyContent: 'space-evenly'
    },
});
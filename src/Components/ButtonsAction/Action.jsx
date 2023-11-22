import React from 'react'   
import { 
    View, 
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView
 } from 'react-native'
 import { MaterialIcons } from "react-native-vector-icons";


export default function Action() {
  return (
    <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
                <MaterialIcons
                    name='lock'
                    color='white'
                    size={26}

                />
            </View>
            <Text style={styles.labelButton}>Entradas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
                <MaterialIcons
                    name='lock'
                    color='white'
                    size={26}

                />
            </View>
            <Text style={styles.labelButton}>Entradas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
                <MaterialIcons
                    name='lock'
                    color='white'
                    size={26}

                />
            </View>
            <Text style={styles.labelButton}>Entradas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
                <MaterialIcons
                    name='lock'
                    color='white'
                    size={26}

                />
            </View>
            <Text style={styles.labelButton}>Entradas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
                <MaterialIcons
                    name='lock'
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
        fontWeight: 'bold'
    }
});
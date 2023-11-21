import React from 'react'
import { View, Text, Header, Image, StyleSheet } from 'react-native'

function FirstScreen() {
  return (
    <View>
        
        <View>
            <Image
                source={require('../../../assets/imgs/profile.webp')}
                style={styles.profile}
            />
            <Text></Text>
            <Text></Text>
        </View>
    </View>
  )
}

export default FirstScreen;

const styles = StyleSheet.create({
    header: {

    },
    profile: {
        
    }
});
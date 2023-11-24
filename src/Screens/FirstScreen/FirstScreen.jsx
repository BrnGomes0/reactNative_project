import react, { useState } from "react";
import { View, StyleSheet, Image, Text, FlatList, TouchableOpacity } from "react-native";
import { Ionicons } from "react-native-vector-icons";
import Movimentation from "../../Components/Movimentation/Movimentation";
import Action from "../../Components/ButtonsAction/Action";
import { ScrollView } from "react-native";

const list = [
  {
    id:1,
    label: 'Boleto conta luz',
    value: '300,20',
    date: '17/02/2002',
    type: 0 // Despesas
  },
  {
    id:2,
    label: 'Pix Client',
    value: '530,20',
    date: '17/02/2002',
    type: 1 // Entrada
  },
  {
    id:3,
    label: 'Salário Bosch',
    value: '3.211,20',
    date: '17/02/2002',
    type: 1 // Entrada
  },
  
]

function FirstScreen () {
  const [showValue, setShowValue] = useState(false)
  const pressed = () => {
    setShowValue(!showValue);
  }
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../../assets/imgs/thiagoNigro.jpg')}
          style={styles.imageProfile}
        />
        <View style={styles.welcome}>
          <Text style={styles.name}>Welcome, </Text>
          <Text style={styles.text}>Bruno Bosch</Text>
        </View>
        <TouchableOpacity>
        <Ionicons
          name='settings'
          color='gray'
          size={26}
        />
        </TouchableOpacity>
      </View>
        <View style={styles.balance}>
          <Text style={styles.valueAccount}>R$ 9.213,21</Text>
          <Text style={styles.textBalance}>Current Balance</Text>
        </View>
      <Action/>
      <Text style={styles.title}>Last Movimentation</Text>
      <View style={styles.containerList}>
          <FlatList
            style={styles.list}
            data={list}
            keyExtractor={ (item) => String(item.id)}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => <Movimentation data={item}/>}
          />
      </View>
    </View>
  );
}

export default FirstScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252525',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:16,
    marginRight: 16,
    marginBottom: 32,
    marginLeft: 16,
  },
  imageProfile: {
    width: 60, 
    height: 60,
    borderRadius: 30
  },
  name: {
    color: 'gray',
    
  },
  text: {
    color: '#E4EE00',
    fontSize: 16,
    fontWeight: 'bold',
  },
  welcome: {
    flex: 1,
    padding: 14,
  },
  valueAccount: {
    textAlign: 'center',
    color: '#E4EE00',
    fontSize: 36, 
    fontWeight: 'bold',
  },
  textBalance: {
    textAlign: 'center',
    color: 'gray'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 14,
    marginTop: 14,
    marginRight: 14,
    color: '#E4EE00',
    textAlign: 'center',
    paddingTop: 4,
    paddingBottom: 10,
  },
  containerList: {
    padding: 12,
    borderRadius: 20,
  },
  balance: {
    paddingTop: 10, 
    paddingBottom: 20,
  }
});
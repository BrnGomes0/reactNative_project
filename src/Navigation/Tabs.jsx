import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Import the Screens
import HomeScreen from '../Screens/HomeScreen/HomeScreen.jsx'
import LoginScreen from "../Screens/LoginScreen/LoginScreen.jsx";
import RegisterScreen from '../Screens/RegisterScreen/RegisterScreen.jsx'
import FirstScreen from '../Screens/FirstScreen/FirstScreen.jsx'
import { MaterialCommunityIcons } from "react-native-vector-icons";
import {MaterialIcons} from 'react-native-vector-icons'
import ValueMoney from "../Screens/ValueMoney/ValueMoney.jsx";

const Tab = createBottomTabNavigator();

// const screenWidth = Dimensions.get('window').width;

const screenOptions = {
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    headerShown: false,
    tabBarStyle: {
        position: "absolute",
        bottom: 20,
        width: '90%',
        left: 20,
        right: 0,
        elevation: 1,
        height: 70,
        borderRadius: 20,
        backgroundColor: "gray",
        borderWidth: 1,
        borderColor: "#000",
        paddingLeft: 25,
        justifyContent: 'center',
        zIndex: 3,
        paddingLeft: -1

    }
}

function Tabs () {
    return(
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name='First' component={FirstScreen}
            options={{
                tabBarIcon: ({ focused }) => (focused ? <MaterialCommunityIcons name='bank-outline' color="#fff" size={26}/> : <MaterialCommunityIcons name='home-outline' color="#fff"  size={26}/>)
            }} 
            />
            <Tab.Screen name='ValueMoney' component={ValueMoney}
            options={{
                tabBarIcon: ({ focused }) => (focused ? <MaterialIcons name='attach-money' color="#fff" size={26}/> : <MaterialCommunityIcons name='home-outline' color="#fff"  size={26}/>)
            }} 
            />
        </Tab.Navigator>
    );
}

export default Tabs;
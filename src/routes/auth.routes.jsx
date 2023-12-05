import Tabs from '../Navigation/Tabs';
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import LoginScreen from '../Screens/LoginScreen/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen/RegisterScreen';

const AuthStack = createStackNavigator();

const AppRoutes = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen
            name='HomeScreen'
            component={HomeScreen}
            options={{ headerShown: false, animation: 'fade_from_bottom' }}
        />
        <AuthStack.Screen
            name='LoginScreen'
            component={LoginScreen}
            options={{ headerShown: false, animation: 'fade_from_bottom' }}
        />
        <AuthStack.Screen
            name='RegisterScreen'
            component={RegisterScreen}
            options={{ headerShown: false, animation: 'fade_from_bottom' }}
        />

    </AuthStack.Navigator>
)


export default AppRoutes
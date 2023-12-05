import Tabs from '../Navigation/Tabs';
import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from '../Screens/FirstScreen/FirstScreen';
import ValueMoney from '../Screens/ValueMoney/ValueMoney';

const AppStack = createStackNavigator();

const AppRoutes = () => (
    <AppStack.Navigator>
        <AppStack.Screen
            name='Tabs'
            component={Tabs}
            options={{ headerShown: false, animation: 'fade_from_bottom' }}
        />
        <AppStack.Screen
            name='FirstScreen'
            component={FirstScreen}
            options={{ headerShown: false, animation: 'fade_from_bottom' }}
        />
        <AppStack.Screen
            name='ValueMoney'
            component={ValueMoney}
            options={{ headerShown: false, animation: 'fade_from_bottom' }}
        />

    </AppStack.Navigator>
)


export default AppRoutes
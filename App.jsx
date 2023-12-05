import {NavigationContainer} from '@react-navigation/native'
import Tabs from './src/Navigation/Tabs.jsx'
import Routes from './src/routes/index.jsx';
import { Store } from './src/reducer/store.jsx';
import { Provider } from 'react-redux';


const App = () => {
  return(
    <Provider store={Store}>
      <NavigationContainer>
        <Routes/>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
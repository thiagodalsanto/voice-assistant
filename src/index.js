import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import Tabs from './navigation/index';

const App = ( ) => (
  <NavigationContainer>
    <Tabs/>
    <StatusBar style="dark" />
  </NavigationContainer>
);

export default App;
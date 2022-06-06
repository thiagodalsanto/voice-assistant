import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { CommandsProvider } from './context/CommandContext';
import Tabs from './navigation/index';

const App = ( ) => (
  <CommandsProvider>
    <NavigationContainer>
      <Tabs/>
      <StatusBar style="dark" />
    </NavigationContainer>
  </CommandsProvider>
);

export default App;
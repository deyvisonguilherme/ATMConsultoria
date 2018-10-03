import { createStackNavigator } from 'react-navigation';
import HomeScreen from './scene/home';
import ClientScreen from './scene/clients';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Clients: ClientScreen,
  },
  { initialRouteName: 'Home' },
);

export default RootStack;

import { createStackNavigator } from 'react-navigation';
import AuthScreen from './scene/authentication';
import PerfilScreen from './scene/perfil';
import HomeScreen from './scene/home';
import MapScreen from './scene/map';
import QuestionScreen from './scene/questions';
import SigninScreen from './scene/signin';
import SignupScreen from './scene/signup';
import WelcomeScreen from './scene/welcome';

const RootStack = createStackNavigator(
  {
    Auth: AuthScreen,
    Clients: PerfilScreen,
    Home: HomeScreen,
    Map: MapScreen,
    Question: QuestionScreen,
    Signin: SigninScreen,
    Signup: SignupScreen,
    Welcome: WelcomeScreen,
  },
  { initialRouteName: 'Welcome' }
);

export default RootStack;

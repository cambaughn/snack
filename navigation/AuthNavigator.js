import { createStackNavigator } from 'react-navigation';

import LoginScreen from '../screens/Login/LoginScreen';


const AuthStack = createStackNavigator({ Login: LoginScreen });

export default AuthStack;

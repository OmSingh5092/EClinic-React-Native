import * as React from 'react'
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../components/pages/login';
const Stack = createStackNavigator();

const LoginNavigator = ()=>{

  return (
    <Stack.Navigator initialRouteName="Login" headerMode="none">
      <Stack.Screen name = "Login" component={LoginScreen}/>
    </Stack.Navigator>
  )
}

export default LoginNavigator;
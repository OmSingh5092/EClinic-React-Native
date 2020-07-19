import * as React from 'react'
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../components/pages/login';
import SignupPatient from '../components/pages/signup-patient'
import SignupDoctor from '../components/pages/signup-doctor'
const Stack = createStackNavigator();

const LoginNavigator = ()=>{

  return (
    <Stack.Navigator initialRouteName="Login" headerMode="none">
      <Stack.Screen name = "Login" component={LoginScreen}/>
      <Stack.Screen name="SignupPatient" component={SignupPatient}/>
      <Stack.Screen name="SignupDoctor" component={SignupDoctor}/>
    </Stack.Navigator>
  )
}

export default LoginNavigator;
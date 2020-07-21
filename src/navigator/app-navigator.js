import * as React from 'react'
import {Image} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../components/pages/Login';
import SignupPatient from '../components/pages/SignupPatient'
import SignupDoctor from '../components/pages/SignupDoctor'
const Stack = createStackNavigator();

const LoginNavigator = ()=>{

  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name = "Login" component={LoginScreen}
      options={{
        headerShown:false,
      }}/>
      <Stack.Screen name="SignupPatient" component={SignupPatient}
      options={{
        headerTitle:"Patient Signup",
      }}/>
      <Stack.Screen name="SignupDoctor" component={SignupDoctor}
      options={{
        headerTitle:"Doctor Signup",
      }}/>
    </Stack.Navigator>
  )
}

export default LoginNavigator;
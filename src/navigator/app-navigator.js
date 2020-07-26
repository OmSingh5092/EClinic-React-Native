import * as React from 'react'
import {Image} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../components/pages/Login';
import SignupPatient from '../components/pages/SignupPatient'
import SignupDoctor from '../components/pages/SignupDoctor'
import HomeDoctor from '../components/pages/HomeDoctor'
import HomePatient from '../components/pages/HomePatient'

//Navigation Icon
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
      <Stack.Screen name="HomeDoctor" component={HomeDoctor}/>
      <Stack.Screen name="HomePatient" component={HomePatient}/>
    </Stack.Navigator>
  )
}

export default LoginNavigator;
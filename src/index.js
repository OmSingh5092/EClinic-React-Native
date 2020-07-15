import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {View,StyleSheet} from 'react-native'
import AppNavigator from './navigator/app-navigator'

const App = ()=>{

    return (
        <NavigationContainer>
            <AppNavigator/>
        </NavigationContainer>
    )
}

export default App;
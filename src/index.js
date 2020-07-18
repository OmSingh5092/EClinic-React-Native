import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {View,StyleSheet} from 'react-native'
import AppNavigator from './navigator/app-navigator'

import {} from './config/google-signin'

const App = ()=>{

    return (
        <NavigationContainer>
            <AppNavigator/>
        </NavigationContainer>
    )
}

export default App;
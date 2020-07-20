import React from 'react'
import { View,Text,StyleSheet} from 'react-native';

//molecules
import {AppBar} from '../../molecules'
import { FormDoctor } from '../../organism';

//Theme
import {pageTheme} from '../../../styles'

const SignupDoctor = ({navigation})=>{
    return (        
        <View style={pageTheme.lightTheme}>
            <AppBar onNavigateUp={()=>navigation.goBack()} title="Doctor Signup"/>
            <View style={style.formAnchor}>
                <FormDoctor/>
            </View>
        </View>
    )
}

const style=StyleSheet.create({
    formAnchor:{
        margin:20
    }
})

export default SignupDoctor;
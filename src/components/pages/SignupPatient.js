import React from 'react'
import { View,Text,StyleSheet, Image, TouchableNativeFeedback} from 'react-native';

//Molecules
import {FormPatient} from '../organism';

//Theme
import {pageTheme} from '../../styles'

const SignupPatient = ({navigation})=>{

    return (
        <View style={pageTheme.lightTheme}>
            <View style={style.formAnchor}>
                <FormPatient onSubmit={()=>console.log("Signup Successfull")}/>
            </View>
        </View>
    )
}

const style=StyleSheet.create({
    formAnchor:{
        margin:20,
        flexGrow:1
    }
})

export default SignupPatient;
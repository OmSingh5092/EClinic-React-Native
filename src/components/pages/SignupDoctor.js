import React from 'react'
import { View,Text,StyleSheet, Image, TouchableNativeFeedback} from 'react-native';

//molecules
import { FormDoctor } from '../organism';

//Theme
import {pageTheme} from '../../styles'


const SignupDoctor = ({navigation})=>{
    return (        
        <View style={pageTheme.lightTheme}>
            <View style={style.formAnchor}>
                <FormDoctor onSubmit={()=>console.log("Signup Successfull")}/>
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

export default SignupDoctor;
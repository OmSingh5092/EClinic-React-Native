import * as React from 'react'

import {Text, View,StyleSheet,Image} from 'react-native'
import GeneralButton from '../../atoms/button'

//images
import background from '../../../assets/images/Illustration.png'

const Login = ()=>{

    return(
        <View style={{flexDirection:"column", flex:1}}>
            <Text style={style.root}>
                Hellow world
            </Text>

            <View style={{display:"flex", flexDirection:"row", flexGrow:1}}>
                <GeneralButton text="Doctor"/>
                <GeneralButton text="Patient"/>
            </View>
            
            <Image
            source={background}>

            </Image>

        </View>
    )
}

export default Login;

const style = StyleSheet.create({
    root:{
        fontFamily:'Montserrat-Bold',
        fontSize:30,
    }
})
import * as React from 'react'

import {Text, View,StyleSheet,Image} from 'react-native'
import GeneralButton from '../../atoms/button'

//images
import background from '../../../assets/images/Illustration.png'

//theme
import {PageTheme} from '../../../styles'

const Login = ()=>{

    return(
        <View style={PageTheme.lightTheme}>
            <View style={{flexDirection:"column",flex:1, justifyContent:"center"}}>
                <View style={{}}>
                    <Text style={style.header}>
                        Who are you?
                    </Text>
                </View>
                <View style={{flexDirection:"row",
                justifyContent:"center",
                marginTop:20}}>
                    <GeneralButton text="Doctor"/>
                    <GeneralButton text="Patient"/>
                </View>

            </View>
            
            
            <Image source={background}/>

        </View>
    )
}

export default Login;

const style = StyleSheet.create({
    header:{
        fontSize:30,
        fontFamily:"Montserrat-Bold",
        textAlign:"center"
    }
})
import * as React from 'react'

import {Text, View,StyleSheet,Image} from 'react-native'
import GeneralButton from '../../atoms/button'

//images
import background from '../../../assets/images/Illustration.png'

//Google Signin 
import {googleSignin} from '../../../utils/authentication'

//Local Storage
import {session} from '../../../utils/async_storage'

//theme
import {pageTheme} from '../../../styles'

const Login = ()=>{

    const handleGoogleSignin = async (user)=>{
        //Switch pages
        console.log("Clicked")
        try{
            await googleSignin()
        }catch(err){
            console.log(err);
        }
        
    }

    return(
        <View style={pageTheme.lightTheme}>
            <View style={{flexDirection:"column",flex:1, justifyContent:"center"}}>
                <View style={{}}>
                    <Text style={style.header}>
                        Who are you?
                    </Text>
                </View>
                <View style={{flexDirection:"row",
                justifyContent:"center",
                marginTop:20}}>
                    <GeneralButton text="Doctor" onClick={()=>handleGoogleSignin('doctor')}/>
                    <GeneralButton text="Patient" onClick={()=>handleGoogleSignin('patient')}/>
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
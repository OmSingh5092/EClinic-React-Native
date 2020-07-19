import * as React from 'react'

import {Text, View,StyleSheet,Image} from 'react-native'
import GeneralButton from '../../atoms/button'

//Google Button
import {GoogleSigninButton} from '@react-native-community/google-signin'

//images
import background from '../../../assets/images/Illustration.png'

//Google Signin 
import {googleSignin} from '../../../utils/authentication'

//Local Storage
import {session} from '../../../utils/async_storage'

//theme
import {pageTheme} from '../../../styles'

const Login = ()=>{

    const handleGoogleSignin = async ()=>{
        //Switch pages
        console.log("Clicked")
        try{
            await googleSignin()
        }catch(err){
            console.log(err);
        }
        
    }

    const switchPage = async (user)=>{
        if(user =='doctor'){

        }else{
            
        }
    }

    //states
    const [signin, setSignin] = React.useState(false);

    return(
        <View style={pageTheme.lightTheme}>
            <View style={{flexDirection:"column",flex:1, alignContent:"center"}}>
                <View>
                    <Text style={style.header}>
                        Let's get started!
                    </Text>
                    <GoogleSigninButton
                    style={{marginTop:20,}}
                    onPress={handleGoogleSignin}/>
                </View>
                <View style={{marginTop:20}}>
                    <Text style={style.subTitle}>
                        Who are you?
                    </Text>
                </View>
                <View style={{flexDirection:"row",
                justifyContent:"center",
                marginTop:20}}>
                    <GeneralButton text="Doctor" onClick={()=>switchPage('doctor')}/>
                    <GeneralButton text="Patient" onClick={()=>switchPage('patient')}/>
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
    },
    subTitle:{
        fontSize:20,
        fontFamily:"Montserrat-Regular",
        textAlign:"center",
    }

})
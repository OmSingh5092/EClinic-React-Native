import * as React from 'react'

import {Text, View,StyleSheet,Image} from 'react-native'
import {AccentButton} from '../../atoms'

//Google Button
import {GoogleSigninButton} from '@react-native-community/google-signin'

//Api
import {patientSignin,doctorSignin} from '../../../utils/apis/signinCtrl'

//images
import background from '../../../assets/images/Illustration.png'

//Google Signin 
import {googleSignin} from '../../../utils/authentication'

//Local Storage
import {session} from '../../../utils/async_storage'

//theme
import {pageTheme} from '../../../styles'

const Login = ({navigation})=>{

    //states
    const [signin, setSignin] = React.useState(false);

    const handleGoogleSignin = async (user)=>{
        console.log("Clicked")
        try{
            const userInfo = await googleSignin()
            setSignin(true);

            if(user =='doctor'){
                doctorSignin(userInfo.idToken).then((res)=>(res.json()))
                .then((res)=>{
                    console.log(res);
                    navigation.navigate('SignupDoctor');
                })
            }else{
                patientSignin(userInfo.idToken).then((res)=>(res.json()))
                .then((res)=>{
                    console.log(res);
                    navigation.navigate('SignupPatient');
                })
            }
        }catch(err){
            console.log(err);
        }
    }

    return(
        <View style={pageTheme.lightTheme}>
            <View style={{flexDirection:"column",flex:1, alignContent:"center",marginTop:30}}>
                <View>
                    <Text style={style.header}>
                        Let's get started!
                    </Text>
                </View>
                <View style={{marginTop:20}}>
                    <Text style={style.subTitle}>
                        Who are you?
                    </Text>
                </View>
                <View style={{flexDirection:"row",
                justifyContent:"center",
                marginTop:20}}>
                    <AccentButton text="Doctor" onClick={()=>handleGoogleSignin('doctor')}/>
                    <AccentButton text="Patient" onClick={()=>handleGoogleSignin('patient')}/>
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
        marginTop:30,
        fontSize:20,
        fontFamily:"Montserrat-Regular",
        textAlign:"center",
    }
})
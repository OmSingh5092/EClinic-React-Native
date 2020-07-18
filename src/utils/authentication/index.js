import {firebase} from '../../config'

import {GoogleSignin} from '@react-native-community/google-signin'

const googleSignin = async()=>{
    try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();


    } catch (error) {
        console.log(error)
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
        } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (e.g. sign in) is in progress already
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
        } else {
            // some other error happened
        }
    }
}


const googleSignOut = ()=>{

}

export {googleSignin,googleSignOut};
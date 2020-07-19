import {GoogleSignin,statusCodes} from '@react-native-community/google-signin'

const googleSignin = async()=>{
    
    try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();

        console.log(userInfo);


    } catch (error) {
        console.log(error,error.code);
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            console.log("Signin Cancelled");
            // user cancelled the login flow
        } else if (error.code === statusCodes.IN_PROGRESS) {
            console.log("in progress")
            // operation (e.g. sign in) is in progress already
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            console.log("Play Services not available")
            // play services not available or outdated
        } else {
            console.log("Something else happened");
            // some other error happened
        }
    }
}


const googleSignOut = ()=>{

}

export {googleSignin,googleSignOut};
import {GoogleSignin} from '@react-native-community/google-signin'

GoogleSignin.configure({
    //scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
    webClientId: '541374752269-86ein6vehn2elteuea39arj5nnaok92o.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    //androidClientId:'541374752269-dt4cbm0q6t0dff7lsgd2h9a54jkj29ff.apps.googleusercontent.com',
    //hostedDomain: '', // specifies a hosted domain restriction
    //loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
    //forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
    //accountName: '', // [Android] specifies an account name on the device that should be used
    //iosClientId: '', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
})
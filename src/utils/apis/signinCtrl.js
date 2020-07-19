import {signInEndPoint} from './endpoints'

export const patientSignin = (idToken)=>{
    const requestOptions = {
        method:"POST",
        headers:{ 'Content-Type': 'application/json' },
        body:JSON.stringify({idToken:idToken})
    }

    return fetch(signInEndPoint.patient,requestOptions);
}

export const doctorSignin = (idToken)=>{
    const requestOptions = {
        method:"POST",
        headers:{ 'Content-Type': 'application/json' },
        body:JSON.stringify({idToken:idToken})
    }

    return fetch(signInEndPoint.doctor,requestOptions);

}
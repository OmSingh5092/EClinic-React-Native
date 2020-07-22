import {patientProfileEndPoint} from './endpoints'
import {session} from '../async_storage/index'

const updateProfile = async (data)=>{
    const user= await session();
    const requestOptions = {
        method:"POST",
        headers:{ 'Content-Type': 'application/json', 'token':user.getToken()},
        body:JSON.stringify(data)
    }
    console.log("Token",user.getToken());
    return fetch(patientProfileEndPoint.updateProfile,requestOptions);
}

export {updateProfile}
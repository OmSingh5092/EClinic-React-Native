import {request,checkMultiple,requestMultiple,PERMISSIONS,RESULTS} from 'react-native-permissions'

export const storageRead = ()=>{
    return request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE).
    then((result)=>{
        switch(result){
            case RESULTS.UNAVAILABLE:
                console.log(
                'This feature is not available (on this device / in this context)',
                );
                return false;
            case RESULTS.DENIED:
                console.log(
                'The permission has not been requested / is denied but requestable',
                );
                return false;
            case RESULTS.GRANTED:
                console.log('The permission is granted');
                return true;
            case RESULTS.BLOCKED:
                console.log('The permission is denied and not requestable anymore');
                return false;
            }
        });
     
}

export const storageWrite = async ()=>{
    return request(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE).
    then((result)=>{
        switch(result){
            case RESULTS.UNAVAILABLE:
                console.log(
                'This feature is not available (on this device / in this context)',
                );
                return false;
            case RESULTS.DENIED:
                console.log(
                'The permission has not been requested / is denied but requestable',
                );
                return false;
            case RESULTS.GRANTED:
                console.log('The permission is granted');
                return true;
            case RESULTS.BLOCKED:
                console.log('The permission is denied and not requestable anymore');
                return false;
            }
        });
     
}

export const storageReadWrite = async()=>{
    try{
        const statuses = await checkMultiple([PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE, PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE])
        if(statuses[PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE] == RESULTS.GRANTED && 
        statuses[PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE] == RESULTS.GRANTED){
            return true;
        }
        
        const result = await requestMultiple([PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE]);

        if(result === RESULTS.GRANTED){
            return true;
        }else{
            return false;
        }
    }catch(err){
        console.log(err);
    }
    
}
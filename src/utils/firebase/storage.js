import storage from '@react-native-firebase/storage'

export const uploadImage = (uri,path)=>{
    const refrence = storage().ref(path);
    return refrence.putFile(uri);
}

export const downloadImage = ()=>{

}
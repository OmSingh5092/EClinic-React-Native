import {AsyncStorage} from 'react-native'

const session = (async ()=>{
    var data = {
        isNewUser:false,
        isPatient:false,
        email:"",
        name:""
    }

    data.isNewUser = await AsyncStorage.getItem('new_user')
    data.isPatient = await AsyncStorage.getItem('is_patient');
    data.email = await AsyncStorage.getItem('email');
    data.name = await AsyncStorage.getItem('name');

    function getNewUser(){
        return data.isNewUser
    }
    function setNewUser(isNewUser){
        data.isNewUser = isNewUser;
        AsyncStorage.setItem('new_user',isNewUser);
    }

    function getEmail(){
        return data.email;
    }
    function setEmail(email){
        data.email = email;
        AsyncStorage.setItem('email',email)
    }

    function getName(){
        return data.name;
    }
    function setName(name){
        data.name =name;
        AsyncStorage.setItem('name',name);
    }

    function isNewUser(){
        return data.isNewUser;
    }
    function setNewUser(isNewUser){
        data.isNewUser = isNewUser;
        AsyncStorage.setItem('new_user',isNewUser); 
    }

    function isPatient(){
        return data.isPatient;
    }
    function setPatient(isPatient){
        data.isPatient = isPatient;
        AsyncStorage.setItem('is_patient',isPatient);
    }

    return {getNewUser,setNewUser}
})();

export default session;
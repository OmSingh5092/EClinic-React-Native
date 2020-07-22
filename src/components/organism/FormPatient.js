import React from 'react'
import {View,StyleSheet,TextInput, Text,Button,ScrollView, Image} from 'react-native'
import {Picker, Row} from 'native-base'

import RNFS from 'react-native-fs'

//firebase
import {storage} from '../../utils/firebase'

//molecules
import {ImagePicker} from '../molecules'

//styles
import {colors} from '../../styles'

//variables
import {patientVariables} from '../../variables'

//api
import {updateProfile} from '../../utils/apis/patientProfileCtrl'


//images
import AvatarIcon from '../../assets/icons/avatar.png'


const FormPatient = ({data,onSubmit, onFaliure})=>{
    //states
    const[name,setName] = React.useState("");
    const[phone,setPhone]=React.useState("");
    const[blood, setBlood] = React.useState("");
    const [gender, setGender] = React.useState("");
    const [weight,setWeight] = React.useState("");
    const[photo,setPhoto]=React.useState("path");

    const[image,setImage] = React.useState(AvatarIcon);

    //handler
    const submitHandler= ()=>{
        var formData = {
            patient_name:name,
            phone_number:phone,
            blood:blood,
            gender:gender,
            weight:weight,
            photo_path:photo,
        }
        updateProfile(formData).then((res)=>res.json())
        .then((res)=>{
            if(res.success){
                console.log("Profile updated Successfully!");
                onSubmit();
            }else{
                console.log("Update Failed");
                onFaliure();
            }
        })
    }

    const imagePickHandler = (image)=>{
        setImage(image);
        /*storage.uploadImage(image.uri,"/profile/patient/image.jpg")
        .then(()=>{
            console.log("Image uploaded successfully");
        });   */
    }
    const imageRejectHandler = ()=>{

    }

    return (
        <ScrollView style={style.root} >
            <View style={style.imageUpload}>
                <Image style={style.profileImage} 
                    source={image}/>

                <ImagePicker style={style.imagePicker}
                onPicked={imagePickHandler}
                onRejected={imageRejectHandler}/>
            </View> 
            <View style={style.section}>
                <TextInput
                    onChangeText={(value)=>setName(value)}
                    style={style.textInput}
                    placeholder="Name"
                />
            </View>
            <View style={style.section}>
                <Text style={style.sectionTitle}>
                    Contact Details
                </Text>
                <TextInput
                    onChangeText={(value)=>setPhone(value)}
                    style={style.textInput}
                    placeholder="Phone Number"
                    keyboardType="number-pad"
                />
            </View>

            <View style={style.section}>
                <Text style={style.sectionTitle}>
                    Medical Details
                </Text>
                <View style={style.picker}>
                    <Picker
                        mode="dropdown"
                        placeholder="Blood Group"
                        onValueChange={(val)=>setBlood(val)}>
                        {patientVariables.blood.map((item,index)=>(
                            <Picker.Item 
                                label={item} value={item}/>
                        ))}
                    </Picker>
                </View>
                <View style={style.picker}>
                    <Picker
                        mode="dropdown"
                        placeholder="Gender"
                        onValueChange={(val)=>setGender(val)}>
                        {["Male","Female","Others"].map((item,index)=>(
                            <Picker.Item 
                                label={item} value={item}/>
                        ))}
                    </Picker>
                </View>
                <TextInput
                    onChangeText={(value)=>setWeight(value)}
                    style={style.textInput}
                    keyboardType="number-pad"
                    maxLength={3}
                    placeholder="Weight"
                />
            </View>

            <View style={{marginTop:40}}>
                <Button
                onPress={submitHandler}
                color={colors.COLOR_ACCENT}
                style={style.submit}
                title="Submit"/>
            </View>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    root:{
        flex:1
    },
    textInput:{
        margin:10,
        fontSize:20,
        borderColor:"#000000",
        borderWidth:1,
        borderRadius:5,
        padding:10
    },
    picker:{
        margin:10,
        fontSize:20,
        borderColor:"#000000",
        borderWidth:1,
        borderRadius:5,
        padding:10
    },
    sectionTitle:{
        textAlign:"center",
        fontSize:15
    },
    section:{
        marginTop:10
    },
    submit:{
        marginTop:40,
        fontSize:30
    },
    imageUpload:{
        flexDirection:"row",
        alignContent:"center",
    },
    profileImage:{
        height:100,
        width:100
    },
    imagePicker:{
        flex:1,
        marginLeft:20,
        marginRight:20,
        marginTop:"auto",
        marginBottom:"auto"
    }
})

export default FormPatient;
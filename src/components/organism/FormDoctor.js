import React from 'react'

import {View,StyleSheet,TextInput, Text,Button,ScrollView,Image} from 'react-native'
import {Picker} from 'native-base'

//Styles
import {colors} from '../../styles'

//molecules
import {ImagePicker} from '../molecules'

//Variables
import {doctorVariables} from '../../variables'

//Api
import {updateProfile} from '../../utils/apis/doctorProfileCtrl'

//images
import AvatarIcon from '../../assets/icons/avatar.png'


const FormDoctor = ({data,onSubmit, onFaliure})=>{
    //states
    const[category,setCategory] = React.useState("");
    const[name,setName] = React.useState("");
    const[phone,setPhone]=React.useState("");
    const[registraionNo, setRegistrationNo] = React.useState("");
    const [year, setYear] = React.useState("");
    const [council,setCouncil] = React.useState("");
    const[photo,setPhoto]=React.useState("path");

    const[image,setImage] = React.useState(AvatarIcon);

    //handler
    const submitHandler= ()=>{
        var formData = {
            doctor_name:name,
            phone_number:phone,
            registration_number:registraionNo,
            year_of_registration:year,
            state_medical_council:council,
            category:category,
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
                    Registration Details
                </Text>
                <TextInput
                    onChangeText={(value)=>setRegistrationNo(value)}
                    style={style.textInput}
                    placeholder="Resgistration Number"
                />
                <TextInput
                    onChangeText={(value)=>setYear(value)}
                    style={style.textInput}
                    placeholder="Year of registraion"
                    keyboardType="number-pad"
                    maxLength={4}
                />
                <TextInput
                    onChangeText={(value)=>setCouncil(value)}
                    style={style.textInput}
                    placeholder="State Medical Council"
                />
            </View>

            <View style={style.section}>
                <Text style={style.sectionTitle}>
                    Select Specialization
                </Text>
                <View style={style.textInput}>
                    <Picker
                    selectedValue={category}
                    mode="dropdown"
                    placeholder="Category"
                    onValueChange={(val)=>setCategory(val)}>
                        {doctorVariables.categories.map((item,index)=>(
                            <Picker.Item 
                            label={item} value={item}/>
                        ))}
                    </Picker>
                </View>
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

export default FormDoctor;
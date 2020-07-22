import React from 'react'
import {View,StyleSheet,TextInput, Text,Button,ScrollView} from 'react-native'
import {Picker} from 'native-base'

//Styles
import {colors} from '../../styles'

//Variables
import {patientVariables} from '../../variables'

//Api
import {updateProfile} from '../../utils/apis/patientProfileCtrl'

const FormPatient = ({data,onSubmit, onFaliure})=>{
    //states
    const[name,setName] = React.useState("");
    const[phone,setPhone]=React.useState("");
    const[blood, setBlood] = React.useState("");
    const [gender, setGender] = React.useState("");
    const [weight,setWeight] = React.useState("");
    const[photo,setPhoto]=React.useState("path");

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

    return (
        <ScrollView style={style.root} >
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
    }
})

export default FormPatient;
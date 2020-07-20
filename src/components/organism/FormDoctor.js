import React from 'react'

import {View,StyleSheet,TextInput, Text,Button} from 'react-native'

//Styles
import {colors} from '../../styles'

const FormDoctor = ()=>{

    return (
        <View style={style.root}>
            <View style={style.section}>
                <TextInput
                    style={style.textInput}
                    placeholder="Name"
                />
            </View>
            <View style={style.section}>
                <Text style={style.sectionTitle}>
                    Contact Details
                </Text>
                <TextInput
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
                    style={style.textInput}
                    placeholder="Resgistration Number"
                />
                <TextInput
                    style={style.textInput}
                    placeholder="Year of registraion"
                    keyboardType="number-pad"
                    maxLength={4}
                />
                <TextInput
                    style={style.textInput}
                    placeholder="State Medical Council"
                />
            </View>

            <View style={{marginTop:40}}>
                <Button
                color={colors.COLOR_ACCENT}
                style={style.submit}
                title="Submit"/>

            </View>
            

        </View>
    )
}

const style = StyleSheet.create({
    root:{
        
    },
    textInput:{
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

export default FormDoctor;
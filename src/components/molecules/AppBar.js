import React from 'react'
import {StyleSheet, View,Image,Text,TouchableNativeFeedback} from 'react-native'

//Icons
import BackIcon from '../../assets/icons/back.png'

const CustomAppBar = ({title, onNavigateUp })=>{

    return (
        <View style={style.root}>
            <TouchableNativeFeedback onPress={onNavigateUp}>
                <View>
                <Image source={BackIcon} style={style.navigationIcon}/>
                </View>
            </TouchableNativeFeedback>
            
            <Text style={style.titleText}>
                {title}
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    root:{
        flexDirection:"row"
    },
    navigationIcon:{
        height:20,
        width:20,
        margin:20
    },
    titleText:{
        fontSize:40,
        fontFamily:"Montserrat-Bold"
    }
})

export default CustomAppBar;
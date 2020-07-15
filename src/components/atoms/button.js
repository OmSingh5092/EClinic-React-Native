import React from 'react'
import colors from '../../variables/colors'

import {Button, View, StyleSheet} from 'react-native'

const GeneralButton = ({text,onClick})=>{
    return (
        <View style={style.root}>
            <Button 
            color={colors.COLOR_ACCENT}
            title={text}
            onPress={()=>onClick}
            />
        </View>
    )
}

export default GeneralButton;

const style = StyleSheet.create({
    root:{
        margin:20,
        flexWrap:"wrap",
    }
})

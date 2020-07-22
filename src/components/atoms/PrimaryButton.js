import React from 'react'
import colors from '../../styles/colors'

import {Button, View, StyleSheet} from 'react-native'

const AccentButton = ({text,onClick})=>{
    return (
        <View style={style.root}>
            <Button 
            color={colors.COLOR_PRIMARY}
            title={text}
            onPress={onClick}
            />
        </View>
    )
}

export default AccentButton;

const style = StyleSheet.create({
    root:{
        margin:20,
        flexWrap:"wrap",
    }
})

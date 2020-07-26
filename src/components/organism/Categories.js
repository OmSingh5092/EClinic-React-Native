import React from 'react'
import { StyleSheet } from 'react-native'
import { View } from 'native-base'

import {Card} from 'native-base'

import {doctorVariables} from '../../variables'

const Container = ({text})=>{
    
    return(
        <View style={{
            borderRadius:20
        }}>
            <Text> 
                text
            </Text>
        </View>
    )
}

const Categories = ()=>{
    
    return(
        <View style={styles.root}>
            {doctorVariables.categories.map((item,index)=>(
                <Container />
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    root:{

    }
})

export default Categories;
import React from 'react'
import { StyleSheet,Button,View} from 'react-native'
import {} from 'native-base'

import DocumentPicker from 'react-native-document-picker'

import {PrimaryButton} from '../atoms'

//colors
import {colors} from '../../styles'

//permissions
import {storageReadWrite} from '../../utils/permission'

const ImagePicker = ({onPicked, onRejected,style})=>{
    //states
    const[image,setImage] = React.useState();

    //handlers
    const handlePick = async ()=>{
      const permission = await storageReadWrite();
      if(!permission){
        onRejected();
        console.log("Permission Denied");
        return;
      }
      console.log("Permission Granted");
      try {
          const res = await DocumentPicker.pick({
           type: [DocumentPicker.types.images],
          });
          onPicked(res);
        } catch (err) {
          if (DocumentPicker.isCancel(err)) {
            Alert.alert('Canceled');
          } else {
            Alert.alert('Unknown Error: ' + JSON.stringify(err));
            throw err;
          }
        }
    }

    return(
        <View style={style}>
            <Button
                onPress={handlePick}
                color={colors.COLOR_PRIMARY}
                title="Select Image"/>
        </View>
    )
}

export default ImagePicker
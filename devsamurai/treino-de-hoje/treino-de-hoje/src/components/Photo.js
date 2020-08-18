import React from 'react'
import {View, StyleSheet, Text, ImageBackground, TouchableOpacity} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

const Photo = ({photo, onDeletePhoto, onClosePicture}) => {
  return (
    <ImageBackground source={{uri:photo}} style={styles.imagePreview}>
      <View style={styles.actionButtons}>
        <Icon
        name="delete"
        size={50}
        color={"#fff"}
        onPress={()=>{
          onDeletePhoto(null)
        }}/>
      </View>
      <Icon name="check" size={50} color={"#fff"} onPress={onClosePicture} />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  imagePreview:{
    width:"100%",
    height:"100%"
  },
  actionButtons:{
    flexDirection:"row",
    marginLeft:5,
    marginTop:5,
    justifyContent:"space-between"
  }
})

export default Photo;
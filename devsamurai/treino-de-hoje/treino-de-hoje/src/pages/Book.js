import React,{useState, useEffect} from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  AsyncStorage,
  Modal,
  ImageBackground
} from "react-native";

import Icon from 'react-native-vector-icons/MaterialIcons'
import Constants from 'expo-constants'

import Camera from '../components/Camera'
import Photo from '../components/Photo'

const Book = ({navigation}) => {

  const book = navigation.getParam("book",{
    title:'',
    description:'',
    read:false,
    photo:''
  })

  const isEdit = navigation.getParam("isEdit")

  const[books, setBooks] = useState([])
  const[title,setTitle] = useState(book.title)
  const[description,setDescription] = useState(book.description)
  const[read, setRead] = useState(book.read)
  const[photo,setPhoto] = useState(book.photo)
  const[isModalVisible, setIsModalVisible] = useState(false)

  useEffect(() =>{
    
    AsyncStorage.getItem("books").then(data =>{
      const book = JSON.parse(data) || []
      setBooks(book)
    })

  },[])

  const isValid = () => {
    if(title != undefined && title != "" && title.length > 2){
      return true
    }

    return false;
  }

  const onSave = async () => {
    
    if(isValid())
    {
      if(isEdit)
      {
        let newBooks = books;
        newBooks.map(item =>{
          if(item.id === book.id){
            item.title = title;
            item.description = description;
            item.read = read;
            item.photo = photo;
          }
          return item;
        })

        await AsyncStorage.setItem("books",JSON.stringify(newBooks));
        navigation.navigate("Main")

      }else{
        const id = Math.random(5000).toString()
        const data = {
          id,
          title,
          description,
          photo
        }
        await books.push(data)
        await AsyncStorage.setItem("books",JSON.stringify(books));
        navigation.navigate("Main")
      }
    }else{
      alert("Preencha os campos obrigatórios")
    }
  }

  const onCloseModal = (newPhoto) => {
    setIsModalVisible(false)
  }

  const onChangePhoto = (newPhoto) => {
    setPhoto(newPhoto)
  }

  return(
      <View style={styles.container}>
        <Text style={styles.titleTopo}>Inclua um novo exercício</Text>
          <TextInput style={styles.input}
            placeholder="Título"
            value={title}
            onChangeText={(text)=>{
                setTitle(text)
            }}
          />
          <TextInput style={styles.input}
            placeholder="Descrição"
            multiline={true}
            numberOfLines={4}
            value={description}
            onChangeText={(description)=>{
              setDescription(description)
            }}
          />
          <ImageBackground source={{uri:(photo != null) ? photo : ''}} style={styles.imagePreview}>
          </ImageBackground>

          <TouchableOpacity style={styles.cameraButton}
            onPress={()=>{setIsModalVisible(true)}}>
            <Icon name="photo-camera" size={30} color="#fff" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.saveButton}
          onPress={onSave}>
            <Text style={styles.saveButtonText}>Salvar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cancelButton}
          onPress={() => {
              navigation.goBack()
          }}>
            <Text style={styles.cancelButtonText}>Cancelar</Text>
          </TouchableOpacity>

          <Modal
          animationType="slide"
          visible={isModalVisible}>
          {
            photo ? 
            (
              <Photo
              photo={photo}
              onDeletePhoto={onChangePhoto}
              onClosePicture={onCloseModal}/>
            )
          : 
            (
              <Camera onCloseCamera={onCloseModal} onTakePicture={onChangePhoto}/>
            )
          }
          </Modal>
      </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:10,
    backgroundColor:"#2c3e50",
    paddingTop: Constants.statusBarHeight
  },
  titleTopo:{
    marginBottom:55,
    fontSize:22,
    fontWeight:"bold",
    color:"#ecf0f1",
    alignSelf:"center"
  },
  input:{
    fontSize:16,
    borderBottomColor:"#f39c12",
    borderBottomWidth:1,
    marginBottom:10,
    color:"#ecf0f1"
  },
  cameraButton:{
    backgroundColor:"#3498db",
    borderRadius:50,
    width:60,
    height:60,
    justifyContent:"center",
    alignItems:"center",
    alignSelf:"center",
    marginBottom:25
  },
  // saveButtonInvalid:{
  //   opacity:0.5
  // },
  saveButton:{
    backgroundColor:"#f39c12",
    alignSelf:"center",
    borderRadius:8,
    paddingVertical:10,
    paddingHorizontal:20,
    marginBottom:20
  },
  saveButtonText:{
    color:"#fff",
    fontSize:16
  },
  cancelButton:{
    backgroundColor:"#ff0000",
    alignSelf:"center",
    borderRadius:8,
    paddingVertical:10,
    paddingHorizontal:20
  },
  cancelButtonText:{
    color:"#fff",
    fontSize:16
  },
  imagePreview:{
    width:"40%",
    height:"30%",
    marginBottom:25,
    padding:0
  },
})

export default Book;
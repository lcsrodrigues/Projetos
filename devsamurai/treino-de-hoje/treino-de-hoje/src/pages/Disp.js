import React,{useState,useEffect} from 'react'
import {Text, View, AsyncStorage, StyleSheet, TouchableOpacity, ImageBackground, FlatList} from 'react-native'
import Constants from 'expo-constants'

const Disp = ({navigation}) => {

  const book = navigation.getParam("book",{
      title:'',
      description:'',
      read:false,
      photo:''
  })

  const[books, setBooks] = useState([])
  const[cBook, setcBook] = useState(book)
  const[bookId,setId] = useState(book.id)
  const[title,setTitle] = useState(book.title)
  const[description,setDescription] = useState(book.description)
  const[read, setRead] = useState(book.read)
  const[photo,setPhoto] = useState(book.photo)

  useEffect(() =>{
    AsyncStorage.getItem("books").then(data =>{
      let book = JSON.parse(data) || []
      setBooks(book)
    })
  },[])

  const finishExercise = async () => {
    if(cBook.read)
    {
      const newBooks = books.map(item =>{
        if(item.id === bookId){
          item.read = false
        }
        return item
      });

      await AsyncStorage.setItem("books",JSON.stringify(newBooks))
      setBooks(newBooks)
      navigation.navigate("Main")

    }else{
      const newBooks = books.map(item =>{
        if(item.id === bookId){
          item.read = true
        }
        return item
      });

      await AsyncStorage.setItem("books",JSON.stringify(newBooks))
      setBooks(newBooks)
      navigation.navigate("Main")

    }
  }

  return(
    <View style={styles.container}>
      <Text style={styles.titleTopo}>{title}</Text>
      <Text style={styles.titleTopo}>{description}</Text>
        <ImageBackground source={{uri:(photo != null) ? photo : ''}} style={styles.imagePreview}>
        </ImageBackground>
      <View>
       <TouchableOpacity style={styles.saveButton}
        onPress={finishExercise}>
          <Text style={styles.saveButtonText}>{(cBook.read) ? "Reabrir exercício" : "Finalizar exercício"}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cancelButton}
        onPress={() => {navigation.navigate("Main")}}>
          <Text style={styles.cancelButtonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
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
    marginBottom:10,
    fontSize:22,
    fontWeight:"bold",
    color:"#ecf0f1",
    alignSelf:"center"
  },
    saveButton:{
    backgroundColor:"#f39c12",
    alignSelf:"center",
    borderRadius:8,
    paddingVertical:10,
    paddingHorizontal:20
  },
  saveButtonText:{
    color:"#fff",
    fontSize:16
  },
    cancelButton:{
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
    width:"100%",
    height:"70%",
    alignSelf:"center"
  },
})

export default Disp
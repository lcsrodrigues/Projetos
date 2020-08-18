import React, {useEffect,useState} from 'react'
import {Text, View, TouchableOpacity, FlatList, StyleSheet, AsyncStorage} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'
import Constants from 'expo-constants'

const Main = ({navigation}) => {

  const [books, setBooks] = useState([])

  useEffect(() =>{
    
    AsyncStorage.getItem("books").then(data =>{
      const book = JSON.parse(data)
      setBooks(book)
    })

  },[])
  
  const onNewBook = () => {
    navigation.navigate("Book")
  }

  const onBookDisp = (bookId) => {
    const book = books.find(item => item.id === bookId)
    navigation.navigate("Disp",{book:book})
  }

  const onBookEdit = (bookId) => {
    const book = books.find(item => item.id === bookId)
    navigation.navigate("Book",{book:book, isEdit:true})
  }

  const onBookDelete = async (bookId) => {
    const newBooks = books.filter(item => item.id !== bookId);
    await AsyncStorage.setItem("books",JSON.stringify(newBooks));
    setBooks(newBooks)
  }

  const clearList = async () => {
      await AsyncStorage.removeItem("books")
      setBooks([])
      navigation.navigate("Main")
  }

  return(
    <View style={styles.container}>
      <View style={styles.toobox}>
        <TouchableOpacity style={[styles.toolboxButton,styles.btnDelete]}
        onPress={clearList}>
        <Icon name="delete" size={34} color="#fff" />
        </TouchableOpacity>
        
        <Text style={styles.titleTopo}>Treino do dia</Text>
        
        <TouchableOpacity style={styles.toolboxButton}
        onPress={onNewBook}>
        <Icon name="add" size={34} color="#fff" />
        </TouchableOpacity>
      </View>

      <FlatList
      style={styles.flatList}
      data={books}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <View style={styles.itemContainer}>
          <TouchableOpacity style={styles.itemButton}
          onPress={()=>{onBookDisp(item.id)}}>
            <Text style={[styles.itemText, item.read ? styles.itemRead : '']}>{item.title}</Text>
          </TouchableOpacity>

           <TouchableOpacity style={styles.editButton}
              onPress={() => onBookEdit(item.id)}>
              <Icon name="create" size={34} color="#2ecc71" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.deleteButton}
              onPress={() => onBookDelete(item.id)}>
              <Icon name="delete" size={34} color="#ff0000" />
            </TouchableOpacity>
        </View>
      )} />

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:5,
    backgroundColor:"#2c3e50",
    paddingTop: Constants.statusBarHeight
  },
  flatList:{
    textAlign:"justify",
  },
  toobox:{
    flexDirection:"row",
    marginBottom:25,
  },
  titleTopo:{
    flex:1,
    fontSize:22,
    fontWeight:"bold",
    color:"#ecf0f1",
    alignSelf:"center",
    marginLeft:45
  },
  toolboxButton:{
    backgroundColor:"#3498db",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:50,
    width:45,
    height:45,
    marginHorizontal:5
  },
  btnDelete:{
    backgroundColor:"#ff0000",
  },
  itemContainer:{
    flexDirection:"row",
    paddingHorizontal:30
  },
  itemButton:{
    flex:1,
    marginBottom:20
  },
  editButton:{
    fontSize:16,
  },
  deleteButton:{
    fontSize:16,
  },
  itemText:{
    fontSize:16,
    color:"#c3c3c3"
  },
  itemRead:{
    textDecorationLine:"line-through",
    color:"#34495e"
  }
})

export default Main;
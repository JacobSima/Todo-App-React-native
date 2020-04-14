import React, { Component, useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TextInput,
  Button
} from "react-native";

const ModalEdit = props => {

  const{singleTodo,closeModal,modalStatus,editTodoModal} = props
  const [editText, setEditText] = useState(singleTodo.text)

  const textInputHandler = text => {
    setEditText(text)
  }

  const onBtnSubmitEdit = ()=>{
    singleTodo.text = editText
    editTodoModal(singleTodo)
    closeModal()
  }
  
  return (
   
      <Modal
        style={styles.centeredView}
        animationType="slide"
        transparent={true}
        visible={modalStatus}
      >


        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <View style={styles.inputContainer}>
          <TextInput 
            style={styles.inputTodo}
            onChangeText = {text=> textInputHandler(text)}
            value = {editText} 
            />
            <View style={styles.addBtnContainer}>
                <Button title="Edit" onPress={onBtnSubmitEdit}/>
            </View>
              
          </View>
            
          </View>
        </View>
      </Modal>
  );
};



const styles = StyleSheet.create({

  inputTodo:{
    padding:10,
    borderBottomColor:'black',
    borderBottomWidth:1,
    marginBottom:5,
    width:180
  },
  inputContainer:{
    flexDirection:'row',
    justifyContent:'space-around'
  },
  addBtnContainer:{
    width:60,
    paddingTop:10,
  },




  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'rgba(0,54,65,0.5)'
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default ModalEdit;
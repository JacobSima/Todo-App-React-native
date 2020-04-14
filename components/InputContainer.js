import React,{useState} from 'react'
import {View,TextInput,Button,StyleSheet,Keyboard} from 'react-native'

const InputContainer = props => {
 
  const [text, setText] = useState('')
  const textInputHandler = text => setText(text)

  const onBtnSubmit = () => {
  
    
    props.onSubmitText(text)
    //clear Input field
    setText('')

    // Remove keyboard
    Keyboard.dismiss()
  }


  return (
    <View style={styles.inputContainer}>
    <TextInput 
       style={styles.inputTodo}
       placeholder="Enter Todo here"
       onChangeText = {text=> textInputHandler(text)}
       value = {text} 
       />
       <View style={styles.addBtnContainer}>
          <Button title="Add Todo" onPress={onBtnSubmit}/>
       </View>
        
    </View>
  )
}

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
    width:100,
    paddingTop:10,
  }
})

export default InputContainer

import React from 'react'
import {View,Text,Button,StyleSheet,TouchableNativeFeedback} from 'react-native'


const TodoItem = props => {

  const {todo} = props

  return (
      <View style={styles.todoItemContainer}>
        <View>
           <Text style={{fontSize:20}}>{todo.text}</Text>
        </View>
        <View style={styles.todoItemBtnContainer}>
          <TouchableNativeFeedback>
            <View style={styles.btn}>
                <Button title="Delete" 
                        onPress={()=> props.onDeleteTodo(todo)} 
                        color="#841584" />
            </View>
          </TouchableNativeFeedback>

            <TouchableNativeFeedback>
              <View style={styles.btn}>
                  <Button title ="Edit"
                          onPress={()=> props.openModal(todo)}
                          color="rgba(0,43,22,0.8)"
                          
                          />
              </View> 
            </TouchableNativeFeedback> 
        </View>
         
      </View>
  )
}

const styles = StyleSheet.create({

  todoItemContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginVertical:10
  },
  btn:{
    marginHorizontal:5,
    width:70
  },

  todoItemBtnContainer:{
    flexDirection:'row',
    justifyContent:'space-between'
  }
})

export default TodoItem

import React from 'react'
import TodoItem from './TodoItem'
import {View,StyleSheet,ScrollView,TouchableWithoutFeedback,Keyboard} from 'react-native'

const TodoListScroll = props => {

  const onDeleteTodo = todo => props.onDeleteTodo(todo)

  const openModal = todo => props.openModal(todo)

  const {todos} = props
  return (
    <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
    <ScrollView style={styles.todoContainer}>
      {
        todos.map(todo => <TodoItem key={todo.id} todo={todo} 
                                      onDeleteTodo={onDeleteTodo}
                                      openModal ={openModal}
                                      />)
      }
    </ScrollView>
    </TouchableWithoutFeedback>
  )
}
const styles = StyleSheet.create({

  todoContainer:{
    
  }
})


export default TodoListScroll 

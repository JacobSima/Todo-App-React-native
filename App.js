import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,TextInput,Button, ScrollView } from 'react-native';
import Header from './components/layout/Header'
import InputContainer from './components/InputContainer'
import TodoListScroll from './components/TodoListScroll'
import ModalEdit from './components/Modal'

export default function App() {

  const [todos, setTodos] = useState([])
  const [modalStatus, setModalstatus] = useState(false)
  const [singleTodo, setSingleTodo] = useState({})

  const onSubmitText = text => {
   const todo = {
      text,
      id:Math.random()
    }
  
    setTodos(curTodos => [todo,...curTodos])
  }

  const onDeleteTodo = todo => setTodos(curTodos => curTodos.filter(item => item.id !== todo.id ) )

  const openModal = todo => {
    setModalstatus(true)
    setSingleTodo(todo)
  }

  const editTodoModal = todo => setTodos(curTodos => {
    return curTodos.map(item => item.id === todo.id ? todo:item)
  })



  //  Components redener/re-render
  // useEffect(()=>{
  //  console.log(todos)
  // }, [todos])

  let modalCOntent
  modalStatus?(modalCOntent =<ModalEdit  modalStatus={modalStatus}
                                         singleTodo = {singleTodo} 
                                         closeModal = {() => setModalstatus(false)}
                                         editTodoModal={editTodoModal}
                              /> ):('')


  return (
    <View style={styles.body}>
      <Header />
      <View style={styles.container}>
         <InputContainer onSubmitText={onSubmitText} /> 
         <TodoListScroll todos={todos} 
                          onDeleteTodo={onDeleteTodo}
                          openModal={openModal}
                          />
      </View>
      {modalCOntent}
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor:'#f3f3f3',
  },
  container:{
    flex:1,
    padding:10
  },
  
});

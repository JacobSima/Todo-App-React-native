import React from 'react'
import {View,Text,StyleSheet} from 'react-native'


const Header = () => {
  return (
    <View style={styles.headerContainer}>
        <Text style={styles.title}>Manage Todo List</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  headerContainer:{
    backgroundColor:'#4630EB',
    padding:10,
    alignItems:'center',
    justifyContent:'center',
    height:100
  },
  title:{
    color:'#fff',
    fontSize:20,
    fontWeight:'bold'
  }
})

export default Header

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native'
import { Redirect, router } from 'expo-router'

const CustomButton = () => {
  return (
    <TouchableOpacity style={styles.button} onPress={()=> router.push('/signin')}>
      <Text style={{color: 'rgb(254, 192, 192)', fontSize: 15, fontWeight:'400'}}>GO TO SIGN IN</Text>
      
    </TouchableOpacity>
  )
}

const index = () => {
  return (
      <View style={styles.container}>
        <Text style={styles.header}>Welcome to Amal's (AWESOME) DEV Task!!</Text>
        <View style={styles.TextView}>
          <Text style={styles.subheader}>To See More, Go to Sign In:</Text>
          <CustomButton />
        </View>
      </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    backgroundColor : 'lightyellow',
    display: 'flex',
    flex: 1,
},
  button: {
    backgroundColor: 'maroon',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200, 
    height: 50,
    },
  header: {
    color: 'black',
    fontWeight: 'bold', 
    fontSize: 25,
    marginBottom: 100,
    marginTop: 100,
    marginLeft: 20
  },
  subheader: {
    color: 'black',
    fontWeight: 'bold', 
    fontSize: 20,
    marginBottom: 50
  },
  TextView: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Redirect, router } from 'expo-router'
import { TouchableOpacity } from 'react-native'

const CustomButton = () => {
  return (
    <TouchableOpacity style={styles.button} onPress={()=> router.push('/Home')}>
      <Text>SignIn</Text>
      
    </TouchableOpacity>
  )
}

const signin = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>signin</Text>
      <Link href="/signup" style={{color: 'blue'}}>
      <Text>Go to sign up</Text>
      </Link>
      <CustomButton />
    </SafeAreaView>
  )
}

export default signin

const styles = StyleSheet.create({
  container: {
    backgroundColor : 'rgba(240, 128, 128, 0.4)',
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
},
button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
},
})
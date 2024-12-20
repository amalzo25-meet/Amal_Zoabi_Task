import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Redirect, router } from 'expo-router'
import { TouchableOpacity } from 'react-native'

const CustomButton = () => {
  return (
    <TouchableOpacity style={styles.button} onPress={()=> router.push('/Home')}>
      <Text>SignUp</Text>
      
    </TouchableOpacity>
  )
}

const signup = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>signup</Text>
      <Link href="/signin" style={{color: 'blue'}}>
      <Text>go to sign in</Text>
      </Link>
      <CustomButton />
    </SafeAreaView>
  )
}

export default signup

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
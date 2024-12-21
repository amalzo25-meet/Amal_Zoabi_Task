import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native'
import { Redirect, router } from 'expo-router'

const CustomButton = () => {
  return (
    <TouchableOpacity style={styles.button} onPress={()=> router.push('/signin')}>
      <Text>GO TO SIGN IN</Text>
      
    </TouchableOpacity>
  )
}

const index = () => {
  return (
      <View style={styles.container}>
      <Text>index</Text>
      <CustomButton />
      </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    backgroundColor : 'rgb(254, 192, 192)',
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
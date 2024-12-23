import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Stack, Slot } from 'expo-router'

const MainLayout = () => {
  return (
    <View style={styles.container}>
      <Stack options={{headershown:false}}>
        <Stack.Screen name="index" options={{headerShown:false}} />
        <Stack.Screen name="(auth)" options={{headerShown:false}}/>
        <Stack.Screen name="(Tabs)" options={{headerShown:false}}/>
      </Stack>
    </View>
  )
}

export default MainLayout

const styles = StyleSheet.create({
  container: {
    backgroundColor : 'lightyellow',
    display: 'flex',
    flex: 1,
},
})
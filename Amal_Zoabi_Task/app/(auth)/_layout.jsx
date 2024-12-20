import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const authlayout = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Stack>
        <Stack.Screen name="signin" options={{headerShown:false}}/>
        <Stack.Screen name="signup"  options={{headerShown:false}}/>
        <Stack.Screen name="(Tabs)" options={{headerShown:false}} />
        </Stack>
    </SafeAreaView>
  )
}

export default authlayout

const styles = StyleSheet.create({
  container: {
    backgroundColor : 'rgba(240, 128, 128, 0.4)',
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
}
})
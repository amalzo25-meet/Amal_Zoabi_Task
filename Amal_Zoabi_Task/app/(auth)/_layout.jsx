import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const authlayout = () => {
  return (
    <View style={styles.container}>
        <Stack>
        <Stack.Screen name="signin" options={{headerShown:false}}/>
        <Stack.Screen name="signup"  options={{headerShown:false}}/>
        </Stack>
    </View>
  )
}

export default authlayout

const styles = StyleSheet.create({
  container: {
    backgroundColor : 'lightyellow',
    display: 'flex',
    flex: 1,
}
})
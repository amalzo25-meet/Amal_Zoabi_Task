import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Stack } from 'expo-router'

const MainLayout = () => {
  return (
    <SafeAreaView>
      <Stack>
        <Stack.Screen name="index" />
      </Stack>
    </SafeAreaView>
  )
}

export default MainLayout

const styles = StyleSheet.create({})
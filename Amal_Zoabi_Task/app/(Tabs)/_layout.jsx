import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Slot , Stack} from 'expo-router';
import { Tabs } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context'


const TabsLayout = () => {
  return (
    <View style={styles.container}>
    <Tabs>
      <Tabs.Screen name="Home" 
       options = 
        {{
          title: "Home", 
          headerShown: false, 
          tabBarIcon : ()=> null,
          tabBarLabelStyle: {
             fontSize: 16,
             fontWeight: 'bold',
             textAlign: 'center',
             marginTop: -5,
          },
          tabBarItemStyle: {
            justifyContent: 'center',
          }}} />

      <Tabs.Screen name="TaskPage"
      options = 
        {{
          title: "Tasks", 
          headerShown: false,
          tabBarIcon : ()=> null,
          tabBarLabelStyle: {
             fontSize: 16,
             fontWeight: 'bold',
             textAlign: 'center',
             marginTop: -5,
          },
          tabBarItemStyle: {
            justifyContent: 'center',
        }}} />
    </Tabs>
    </View>
  )
}


export default TabsLayout


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
    }
})
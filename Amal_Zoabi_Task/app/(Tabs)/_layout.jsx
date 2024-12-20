import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Slot , Stack} from 'expo-router';
import { Tabs, Redirect } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context'


const TabsLayout = () => {
  return (
    // <View style={styles.container}>
    // <Stack>
    //     <Stack.Screen name="index"  options={{headerShown:false}}/>
    //     <Stack.Screen name="WeatherPage" options={{headerShown:false}}/>
    //     </Stack>
    // </View>
    <SafeAreaView>
    <Text>Main Layout</Text>
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

      <Tabs.Screen name="WeatherPage"options = 
        {{
          title: "Weather", 
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
    </SafeAreaView>
  )
}


export default TabsLayout


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
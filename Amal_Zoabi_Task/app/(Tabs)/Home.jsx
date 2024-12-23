import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context'


const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>This is The Home Page.</Text>
      <View style={styles.TextView}>
      <Text style={styles.subheader}>Do You Have a lot of Tasks To Do and No Way To Manage Them🤔?</Text>
      <Text style={styles.subheader}>This is The BEST Solution You Will Ever Get!</Text>
      <StatusBar style="auto" />
      <Button style={styles.button} onPress={() => navigation.navigate('TaskPage')}>
        <Text style={{color: 'rgb(254, 192, 192)', fontSize: 17, fontWeight:'400'}}>Task Manager</Text>
      </Button>
      </View>
    </View>
  )
}

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
    marginTop: 20,
    width: 200, 
    height: 50,
    },
  header: {
    color: 'rgb(81, 80, 80)',
    fontWeight: 'bold', 
    fontSize: 25,
    marginBottom: 50,
    marginTop: 100,
    marginLeft: 20
  },
  subheader: {
    color: 'black',
    fontWeight: 'bold', 
    fontSize: 20,
    margin: 20
  },
  TextView: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Home
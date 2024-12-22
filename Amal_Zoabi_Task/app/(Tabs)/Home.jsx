import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context'



const MyAppText = ({children}) => {
  return (
      <Text style={{fontSize: 20, color: 'blue'}}>{children}</Text>
  );
}

const MyAppHeaderText = ({children}) => {
  return (
    <MyAppText>
      <Text style={{fontSize: 50, color: 'red'}}>{children}</Text>
    </MyAppText>
  );
};

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <MyAppHeaderText>
        Hello!
      </MyAppHeaderText>
      <MyAppText> Welcome to Amal's DEV TASK </MyAppText>
      <StatusBar style="auto" />
      <Button style={styles.button} onPress={() => navigation.navigate('TaskPage')}>
        <Text style={{color:'white'}}>Go to Task Manager</Text>
      </Button>
    </View>
  )
}

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

export default Home
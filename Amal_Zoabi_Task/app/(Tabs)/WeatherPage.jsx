import { StyleSheet, Text, View, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';
import React, {useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';



const WeatherPage = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <Text>Weather</Text>
            <Text>Current weather:</Text>
            <Button style={styles.button} onPress={() => navigation.navigate('Home')}>
                <Text style={{color:'white'}}>Go to Home Page</Text>
            </Button>
        </SafeAreaView>
    )  
}
export default WeatherPage


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
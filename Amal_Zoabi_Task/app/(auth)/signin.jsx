import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
import { useState } from 'react'

import show from '../../assets/images/eyeshow.png';
import hide from '../../assets/images/eyehide.png';

const FormX = ({title, value, placeholder, handleChangeText, ...props}) => {
  const [showpassword, setshowpassword] = useState(false)
  return (
    <View>
      <Text>{title}</Text>
      <View>
        <TextInput style={styles.input} 
        value={value} title={title} onChangeText={handleChangeText}
        placeholder={placeholder} placeholderTextColor={'grey'}
        secureTextEntry={title === 'Password:' && !showpassword} />
        {title === 'Password:' &&(
        <TouchableOpacity style={styles.iconContainer}
        onPress={() => {setshowpassword(!showpassword)}}>
        <Text style={{fontSize:10, fontWeight:'bold'}}>{!showpassword ? "SHOW" : "HIDE"}</Text>
        </TouchableOpacity>)}
      </View>
    </View>
  )
}


const CustomButton = () => {
  return (
    <TouchableOpacity style={styles.button} onPress={()=> router.push('/Home')}>
      <Text>SignIn</Text>
   
    </TouchableOpacity>
  )
}

const signin = () => {
  const [form, setform] = useState({
    username: '',
    password: ''
  });
  return (
    <View style={styles.container}>
      <Text>signin</Text>
      <FormX title="Username:" placeholder="Enter Your Username Here" 
      value={form.username} handleChangeText={(e)=> {setform({...form, username: e})}} />
      <FormX title="Password:" placeholder="Enter Your Password Here"
      value={form.password} handleChangeText={(e)=> {setform({...form, password: e})}} />
      <Link href="/signup" style={{color: 'blue'}}>
      <Text>Go to sign up</Text>
      </Link>
      <CustomButton />
    </View>
  )
}

export default signin

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
  input: {
    backgroundColor: 'white',
    height: 40,
    margin: 12,
    borderWidth: 1,
    paddingVertical: 10,
    paddingLeft: 10,
    paddingRight: 30
    },
  iconContainer: {
    position: 'absolute', // Position the icon inside the TextInput container
    right: 18, // Place the icon 10px from the right edge
    top: 35, // Vertically center the icon
    transform: [{ translateY: -10 }],  
  },
})
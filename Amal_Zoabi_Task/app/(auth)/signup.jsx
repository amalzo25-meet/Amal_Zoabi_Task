import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
import { useState } from 'react'

import show from '../../assets/images/eyeshow.png';
import hide from '../../assets/images/eyehide.png';

const FormX = ({title, value, placeholder, handleChangeText, ...props}) => {
  const [showpassword, setshowpassword] = useState(false)
  return (
    <View style={{position: 'relative'}}>
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
      <Text style={{color: 'rgb(254, 192, 192)', fontSize: 17, fontWeight:'400'}}>Signup</Text>
   
    </TouchableOpacity>
  )
}

const signup = () => {
  const [form, setform] = useState({
    username: '',
    password: ''
  });
  return (

    <View style={styles.container}>
      <Text style={styles.header}>Sign Up Here:</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.subheader}>Username:</Text>
        <FormX placeholder="Enter Your Username Here" 
        value={form.username} handleChangeText={(e)=> {setform({...form, username: e})}} />
        <Text style={styles.subheader}>Password:</Text>
        <FormX title="Password:" placeholder="Enter Your Password Here"
        value={form.password} handleChangeText={(e)=> {setform({...form, password: e})}} />
      </View>
      <View style={styles.TextView}>
        <Text style={{marginTop: 20,fontSize: 15, fontWeight: 500}}>Already have an Account?</Text>
        <Link href="/signin" style={{color: 'blue', marginBottom: 20,fontSize: 15, fontWeight: 500}}>
        <Text>Sign In Here!</Text>
        </Link>
        <CustomButton />
        <Text style={{marginTop: 40}}>**This is a Dummy Sign Up Page</Text>
      </View>
    </View>
  )
}

export default signup

const styles = StyleSheet.create({
  container: {
    backgroundColor : 'lightyellow',
    display: 'flex',
    flex: 1,
},
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  inputContainer: {
    alignSelf: 'center',
    width: 300, 
  },
  input: {
    backgroundColor: 'white',
    height: 40,
    marginBottom: 12,
    borderWidth: 1,
    height: 48,
    maxHeight: 48,
    width: 300,
    maxWidth: 300,
    paddingVertical: 10,
    paddingLeft: 10,
    paddingRight: 30,
    borderRadius: 5
    },
    iconContainer: {
      position: 'absolute',
      right: 18, 
      top: 30, 
      transform: [{ translateY: -10 }],  
      zIndex: 1,
    },
  button: {
    backgroundColor: 'maroon',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200, 
    height: 50,
    },
  header: {
    color: 'black',
    fontWeight: 'bold', 
    fontSize: 25,
    marginBottom: 70,
    marginTop: 100,
    marginLeft: 20
  },
  subheader: {
    color: 'black',
    fontWeight: 'bold', 
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10
  },
  TextView: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})
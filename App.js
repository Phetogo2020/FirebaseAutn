import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity ,Button} from 'react-native';
import { authentication } from './firebase-config';
import { getAuth } from "firebase/auth";

import{ creatUserWithEmailAndPassword} from "firebase/auth"





export default class App extends React.Component {

  
   state={
    email:"",
    password:"",
    isSingedIn,

  
  } 
  
  render()
  
  
  { const registerUser =()=>
    {
      creatUserWithEmailAndPassword(authentication,email,password)
      .then((re)=>{
        console.log(re);
      })
     .catch((re)=>{
        console.Console.log(re);
      })
    }
   
    
    return (
      <View style={styles.container}>
  
         
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#80ced6"
            onChangeText={text => this.setState({email:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#80ced6"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>

  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#80ced6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:'#80ced6',
    marginBottom:40
    },
  inputView:{
    width:"80%",
    backgroundColor:"#FFFFFF",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"black"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"50%",
    backgroundColor:"#FFFFFF",
    borderRadius:55,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:30,
    marginBottom:10
  },
  loginText:{
    color:"003f5c"
  }
});

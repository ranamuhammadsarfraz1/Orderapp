import { useNavigation } from '@react-navigation/native';
import { NAVIGATION_ROUTES } from '../Utils/Navigation/NaviagtionRoutes';
import React, { useState } from 'react';
import { Text, StyleSheet, View, ActivityIndicator, Image, TextInput, TouchableOpacity } from 'react-native';

const Signin = () => {

  const navigation = useNavigation();
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState("");
  const [userpassword, setUserpassword] = useState("");

  const displayLoader = () => {
    setShow(true);

    setTimeout(() => {
      setShow(false)
    }, 1000);
  }

  const handleFacebookPress = () => {
  };
  const handleGooglePress = () => {
  };
  const handleApplePress = () => {
  };
  const handlepresssignup = () => {
    navigation.navigate(NAVIGATION_ROUTES.SIGNUP);
  };

  return (

    <View>
      <View style={styles.container}>
        <Image
          source={require('../Utils/images/foodi.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.containertext}>
        <Text style={[styles.text, styles.boldText]}>Sign In</Text>
      </View>
      <View style={styles.container1}>
        <TextInput style={styles.textInput}
          placeholder='Contact #'
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
      </View>
      <View style={styles.container1}>
        <TextInput style={styles.textInput}
          placeholder='User Password'
          secureTextEntry={true}
          onChangeText={(text) => setUserpassword(text)}
          value={userpassword}
        />
      </View>
      <View style={styles.btncontainer}>
        <ActivityIndicator style={styles.loaderstyle} animating={show} color="#f0662b" />
        <TouchableOpacity style={styles.button}
          onPress={displayLoader}  >
          <Text style={styles.textcolor}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containertext2}>
        <Text style={[styles.text1, styles.boldText]}>-OR-</Text>
      </View>
      <View style={styles.containertext3}>
        <Text style={[styles.text2, styles.boldText]}>Sign In With</Text>
      </View>
      <View style={styles.containericon}>
        <TouchableOpacity style={styles.iconContainer} onPress={handleFacebookPress}>
          <Image source={require('../Utils/images/fb.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer} onPress={handleGooglePress}>
          <Image source={require('../Utils/images/google.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer} onPress={handleApplePress}>
          <Image source={require('../Utils/images/apple.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.containertext4}>
        <Text style={[styles.text4, styles.boldText]}> You Don't have an account? </Text>
        <TouchableOpacity onPress={() => handlepresssignup()}>
          <Text style={[styles.text4, styles.boldText,]}> SignUp</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containertext5}>
        <Text style={[styles.text4, styles.boldText]}>Forget Password</Text>
      </View>
    </View>
  )

};


const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginTop: '85%',
    width: '50%',
    height: 200,
    resizeMode: 'contain',
  },

  containerIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image2: {
    height: 50,
    width: 200,
    marginTop: 60,
    resizeMode: 'contain',

  },
  containertext: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '65%',
    textAlign: 'center',

  },

  containertext2: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  containertext3: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },

  containertext4: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
    flexDirection: 'row'
  },

  containertext5: {
    justifyContent: 'center',
    alignItems: 'center',

  },

  containerIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    marginHorizontal: 10,
  },

  textcolor: {
    color: 'white',
    fontWeight: 'bold',
  },

  text: {
    color: '#f0662b',
    fontSize: 20,
    marginBottom: '3%',
  },

  text1: {
    color: '#f0662b',
    fontSize: 20,
  },

  text2: {
    color: '#f0662b',
  },
  text4: {
    color: '#f0662b',

  },

  boldText: {
    fontWeight: 'bold',

  },

  container1: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },

  container1: {
    marginLeft: '10%',
    marginRight: '10%',
  },

  textInput: {

    color: 'black',
    borderWidth: 1,
    borderColor: '#a9a1a1',
    borderRadius: 20,
    paddingHorizontal: 15,
    margin: '2%',

  },

  btncontainer: {

    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  button: {
    marginTop: '5%',
    marginLeft: '15%',
    marginRight: '15%',
    alignItems: 'center',
    backgroundColor: '#f0662b',
    borderRadius: 20,
    padding: '3%',
  },

  loaderstyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },

  containericon: {

    marginTop: '3%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    height: '20%',
    marginHorizontal: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },


});


export default Signin;

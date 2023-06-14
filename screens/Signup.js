import React, { useState } from 'react';
import { Text, StyleSheet, View, Image, TextInput, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { NAVIGATION_ROUTES } from '../Utils/Navigation/NaviagtionRoutes';



const SignUp = () => {

    const navigation = useNavigation();
    const [show,] = useState(false);
    const [username, setUsername] = useState("");
    const [userpassword, setUserpassword] = useState("");
    const [email, setEmail] = useState("");
    const [conformpassword, setConformpassword] = useState("");

    const handlesignin = () => {
        navigation.navigate(NAVIGATION_ROUTES.SIGNIN);
    }

    return (

        <View>
            <View style={styles.container}>
                <Image
                    source={require('../Utils/images/foodi.png')}
                    style={styles.image}
                />
            </View>
            <View style={styles.containertext}>
                <Text style={[styles.text, styles.boldText]}>Sign Up</Text>
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
                    placeholder='Enter Your Email'
                    onChangeText={(text) => setEmail(text)}
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
            <View style={styles.container1}>
                <TextInput style={styles.textInput}
                    placeholder='Conform Password'
                    secureTextEntry={true}
                    onChangeText={(text) => setConformpassword(text)}
                    value={userpassword}
                />
            </View>

            <View style={styles.btncontainer}>
                <ActivityIndicator style={styles.loaderstyle} animating={show} color="orange" />
                <TouchableOpacity style={styles.button}
                    onPress={() => pops.navigation.navigate("Dashboard")}  >
                    <Text style={styles.text1}>REGISTER</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.containertext4}>
                <Text style={[styles.text4, styles.boldText]}> You have an account? </Text>
                <TouchableOpacity onPress={() => handlesignin()}>
                    <Text style={[styles.text4, styles.boldText,]}> Sign-In</Text>
                </TouchableOpacity>

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

    containertext4: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%',
        flexDirection: 'row'
    },

    containerIcon: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconContainer: {
        marginHorizontal: 10,
    },
    text1:{
        color: 'white',
        fontWeight: 'bold',
    },
    text: {

        color: '#f0662b',
        fontSize: 20,
        marginBottom: '3%',
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

    containericon: {

        marginTop: '3%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
});


export default SignUp;

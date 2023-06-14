import { useNavigation } from "@react-navigation/native";
import { NAVIGATION_ROUTES } from '../Utils/Navigation/NaviagtionRoutes';
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";

const WelcomeScreen = () => {

    const navigation = useNavigation();

    const handleonpresssingin = () => {
        navigation.navigate(NAVIGATION_ROUTES.SIGNIN)
       
    };
    const handleonpresssingup = () => {
        navigation.navigate(NAVIGATION_ROUTES.SIGNUP)
    };

    return (
        <View style={styles.wholescreen}>
            <View style={styles.imgview} >
                <Image style={styles.bannerimage} source={require('../Utils/images/welcomefood.png')} />
                <Text style={styles.headingtext}>
                    Food App - Get you taste
                </Text>
                <Text style={styles.Descriptiontext}>
                    A Quick Brown Fox Jumps over a lazy dog. A Quick Brown Fox Jumps over a lazy dog
                    A Quick Brown Fox Jumps over a lazy dog. A Quick Brown Fox Jumps over a lazy dog
                </Text>
                <Text style={{marginBottom:'30%'}}></Text>
            </View>
            <View style={styles.endcontainer} >
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.buttonsSignin} onPress={()=> handleonpresssingin()} >
                        <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold', margin: 15 }}>SignIn</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonsSignup} onPress={()=> handleonpresssingup()}>
                        <Text style={{ color: '#f0662b', fontSize: 17, fontWeight: 'bold', margin: 15 }}>SignUp</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

};

const styles = StyleSheet.create({
    wholescreen: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
    },
    imgview: {
        flex: 6,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    bannerimage: {
        height: '50%',
        width: '100%',
    },
    headingtext: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginTop:'1%',
    },
    Descriptiontext: {
        fontSize: 16,
        marginTop:'2%',
        marginLeft: '20%',
        marginRight: '20%',
    },
    endcontainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#f0662b',
    },
    buttonsSignin: {
        borderWidth: 1,
        borderColor: 'white',
        paddingLeft: 35,
        paddingRight: 35,
        borderRadius: 25,
        marginLeft: '8%',
    },
    buttonsSignup: {
        backgroundColor: 'white',
        paddingLeft: 35,
        paddingRight: 35,
        borderRadius: 25,
        marginLeft: '9%',
    }
});

export default WelcomeScreen;

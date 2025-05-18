import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';

export default function Welcome(){
    const navigation = useNavigation();
    return(
        <View style={styles.conatiner}>
            <View style={styles.conatinerLogo}>
                <Animatable.Image 
                    animation={"flipInY"}
                    source={require("../../assets/logo.png")}
                    style={{width: "100%"}}
                    resizeMode='contain'
                />
            </View>

            <Animatable.View delay={600} animation={"fadeInUp"} style={styles.conatinerForm}>
                <Text style={styles.title}>Monitore, organize seus gastos de qualquer lugar!</Text>
                <Text style={styles.text}>Faça o login para começar</Text>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Signin')}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View> 
    );
}

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        backgroundColor: "#38a69d",

    }, conatinerLogo: {
        flex:2,
        justifyContent: "center",
        alignItems: "center",
    }, conatinerForm: {
        flex: 1,
        backgroundColor: "#FFF",
        borderTopLeftRadius: 25, 
        borderTopRightRadius: 25, 
        padding: "5%",  
    }, title: {
        fontSize: 24, 
        fontWeight: "bold",
        marginBottom: 18,
    }, text: {
        color: "#a1a1a1",
    }, button: {
        position: "absolute",
        backgroundColor: "#38a69d",
        borderRadius: 50,
        paddingVertical: 8,
        width: "60%",
        alignSelf: "center",
        bottom: "15%",
        alignItems: "center",
        justifyContent: "center",
    }, buttonText:{
        fontSize: 18,
        fontWeight: "bold",
        color: "#FFF",

    }
})
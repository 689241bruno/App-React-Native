import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

import * as Animatable from 'react-native-animatable';

export default function Signin(){
    return(
        <View style={styles.container}>
            <Animatable.View animation={"fadeInLeft"} delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Entrar</Text>
            </Animatable.View>

            <Animatable.View animation={"fadeInUp"} style={styles.containerForm}>
                <Text style={styles.title}>Email</Text>
                <TextInput style={styles.input} placeholder='Digite seu email...'/>
                <Text style={styles.title}>Senha</Text>
                <TextInput style={styles.input} placeholder='Digite sua senha...'/>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister}>
                    <Text style={styles.register}>Não possui uma conta? Cadastra-se</Text>
                </TouchableOpacity>

            </Animatable.View>
        </View> 
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1179E8',
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
    }, 
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF', 
    }, 
    containerForm: {
        backgroundColor: '#FFF',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    }, 
    title: {
        fontSize: 20,
        marginTop: 28,
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#1179E8',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
        
    }, 
    buttonText: {
        fontSize: 18, 
        color: '#FFF',
        fontWeight: 'bold',
    }, 
    buttonRegister: {
        alignSelf: 'center',
        marginTop: 14,
    }, 
    register: {
        color: '#a1a1a1',
    }
})
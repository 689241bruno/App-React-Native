import {View, StyleSheet, Text,TouchableOpacity} from "react-native";
import React from "react";
export default function MenuBar(){
    return (
        <View style={styles.tela}>
            <View style={styles.container}>
                <View style={styles.nav}>
                    <View style={styles.section}>
                        <TouchableOpacity style={styles.botao}>

                        </TouchableOpacity>

                        <TouchableOpacity style={styles.botao}>

                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.sectionMeio}>
                        <TouchableOpacity style={styles.botaoMeio}>

                        </TouchableOpacity>
                    </View>

                   

                    <View style={styles.section}>
                        <TouchableOpacity style={styles.botao}>

                        </TouchableOpacity>

                        <TouchableOpacity style={styles.botao}>

                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    tela:{
        height: "100%",
        width: "100%",
    },
    container: {
        height: 90,
        width: "100%",
        backgroundColor: "red",
        position: "absolute",
        bottom: 0,
    },

    nav:{
        height: "100%",
        width: "100%",
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    section: {
        height: "100%",
        width: "33%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        gap: 20

    },
    sectionMeio:{
        height: "120%",
        width: "30%",
        position: "absolue",
        marginBottom: 30,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    botao:{
        height: 50,
        width: 50,
        backgroundColor: "black",
        borderRadius: "50%",
    },
    botaoMeio:{
        height: 70,
        width: 70,
        backgroundColor: "black",
        borderRadius: "50%",
    }
});
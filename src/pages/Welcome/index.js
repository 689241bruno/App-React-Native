import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";

import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
  const navigation = useNavigation();
  return (
    <View style={styles.conatiner}>
      <View style={styles.conatinerLogo}>
        <Animatable.Image
          animation={"flipInY"}
          source={require("../../assets/Aracore.png")}
          style={{ width: "65%" }}
          resizeMode="contain"
        />
      </View>

      <Animatable.View
        delay={600}
        animation={"fadeInUp"}
        style={styles.conatinerForm}
      >
        <Text style={styles.title}>Seja bem vindo ao Aracore!</Text>
        <Text style={styles.text}>
          Aqui, estudar para o ENEM é leve, divertido e do seu jeito! Nosso
          objetivo é te ajudar a mandar bem nas provas com conteúdos dinâmicos,
          desafios e muito incentivo
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Signin")}
        >
          <Text style={styles.buttonText}>Entra</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Cadastro")}
        >
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: "#1179E8",
  },
  conatinerLogo: {
    flex: 1.3,
    justifyContent: "center",
    alignItems: "center",
  },
  conatinerForm: {
    flex: 1,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
    alignContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 18,
    alignSelf: "center",
  },
  text: {
    color: "dark-gray",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#1179E8",
    borderRadius: 30,
    paddingVertical: 8,
    width: "70%",
    alignSelf: "center",
    marginTop: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
  },
});

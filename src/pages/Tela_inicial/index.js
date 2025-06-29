import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
  Dimensions,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import Cloud from "../../components/Nuvem.js";

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <LinearGradient colors={["#67A4FF", "#E2EDFF"]} style={styles.conatiner}>
      <Cloud
        top={130}
        size={200}
        duration={20000}
        source={require("../../assets/nuvem-1.png")}
        direction="right"
        delay={0}
      />

      <Cloud
        top={200}
        size={200}
        duration={23000}
        delay={0}
        source={require("../../assets/nuvem-2.png")}
        direction="left"
      />

      <Cloud
        top={50}
        size={170}
        duration={30000}
        source={require("../../assets/nuvem-3.png")}
        direction="right"
        delay={0}
      />

      <View style={styles.conatinerLogo}>
        <Animatable.Image
          delay={600}
          animation={"fadeInUp"}
          source={require("../../assets/macawdemy-logo-asa-levantada.png")}
          style={{
            position: "absolute",
            top: 0,
            height: 300,
            backgroundColor: "transparent",
          }}
          resizeMode="contain"
        />
      </View>

      <Animatable.View
        delay={600}
        animation={"fadeInUp"}
        style={styles.conatinerForm}
      >
        <Text style={styles.title}>Seja bem vindo ao Macawdemy!</Text>
        <Text style={styles.text}>
          Aqui, estudar é leve, divertido e do seu jeito! Nosso objetivo é te
          ajudar a mandar bem nas provas com conteúdos dinâmicos, desafios e
          muito incentivo
        </Text>

        <TouchableOpacity
          style={styles.botaoEntrar}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botaoCadastrar}
          onPress={() => navigation.navigate("Cadastro")}
        >
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
  nuvem: {
    height: 120,
    width: 200,
    position: "absolute",
    backgroundColor: "transparent",
    marginTop: 150,
  },
  conatinerLogo: {
    height: 265,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 250,
  },
  conatinerForm: {
    height: 500,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    padding: 30,
    alignContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 0,
    alignSelf: "center",
  },
  text: {
    fontSize: 14,
    color: "dark-gray",
    textAlign: "left",
    margin: 10,
  },
  botaoEntrar: {
    backgroundColor: "#FFC31C",
    borderRadius: 30,
    paddingVertical: 8,
    width: "70%",
    height: 50,
    alignSelf: "center",
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
  },
  botaoCadastrar: {
    backgroundColor: "#1179E8",
    borderRadius: 30,
    paddingVertical: 8,
    width: "70%",
    height: 50,
    alignSelf: "center",
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});

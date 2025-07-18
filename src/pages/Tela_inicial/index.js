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
import { BlurView } from "expo-blur";
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

      <View style={styles.containerLogo}>
        <Animatable.Image
          delay={600}
          animation={"fadeInUp"}
          source={require("../../assets/macawdemy-logo-asa-levantada.png")}
          style={{
            position: "absolute",
            bottom: 0,
            height: 300,
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
        <View style={styles.botoes}>
          <TouchableOpacity
            style={styles.botaoEntrar}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.buttonTextEntrar}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.botaoCadastrar}
            onPress={() => navigation.navigate("Cadastro")}
          >
            <Text style={styles.buttonTextCadastrar}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
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
  containerLogo: {
    height: "60%",
    width: "100%",
    alignItems: "center",
  },
  conatinerForm: {
    height: "40%",
    backgroundColor: "#ffffffb6",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    padding: 30,
    alignContent: "center",
    position: "absolute",
    justifyContent: "flex-start",
    bottom: 0,
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
  botoes: {
    height: "50%",
    justifyContent: "space-around",
  },
  botaoEntrar: {
    height: 50,
    width: "80%",
    backgroundColor: "#013D7A",
    borderRadius: 10,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTextEntrar: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
  },
  botaoCadastrar: {
    height: 50,
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#013D7A",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTextCadastrar: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#013D7A",
  },
});

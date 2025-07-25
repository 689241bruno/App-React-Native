import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

import axios from "axios";

export default function Signin() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    const emailLimpo = email.trim().toLowerCase();

    if (!emailLimpo) {
      alert("Não deixe o campo vazio!");
      return;
    }

    if (!emailLimpo.includes("@") || !emailLimpo.includes(".")) {
      alert("Email inválido.");
      return;
    } else {
      alert("Código enviado!");
      navigation.navigate("CodigoVerificacao");
      return;
    }
  };

  return (
    <Animatable.View
      animation={"fadeInUp"}
      delay={300}
      style={styles.container}
    >
      <Animatable.View
        animation={"fadeInLeft"}
        delay={100}
        style={styles.header}
      >
        <TouchableOpacity
          style={styles.botaoVoltar}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={{ textAlign: "center" }}>
            <MaterialIcons name="arrow-back" size={40} color="black" />
          </Text>
        </TouchableOpacity>
      </Animatable.View>
      <View style={styles.h1}>
        <Image
          source={require("../../../assets/Macawdemy_Letreiro.png")}
          resizeMode="contain"
          style={{ height: "100%" }}
        ></Image>
      </View>
      <View
        style={{
          height: "60%",
          width: "100%",
          alignSelf: "center",
          justifyContent: "flex-start",
          gap: 40,
        }}
      >
        <View style={styles.containerInput}>
          <View style={styles.mensagem}>
            <Text style={styles.mensagemText}>
              Digite seu email corretamente para receber o código de
              verificação.
            </Text>
          </View>
          <TextInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            mode="outlined"
            autoCapitalize="none"
            error={!email.includes("@") && email !== ""}
            activeOutlineColor="#0c4499ff"
          />
        </View>
        <TouchableOpacity onPress={handleSubmit}>
          <LinearGradient
            colors={["#0c4499ff", "#51bcd6ff", "#239fbeff"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.btnAcessar}
          >
            <Text style={styles.btnTextAcessar} onPress={handleSubmit}>
              Enviar
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 40,
  },

  header: {
    width: "100%",
    height: 50,
    position: "absolute",
    top: 20,
    fontSize: 28,
    fontWeight: "bold",
  },
  h1: {
    height: 110,
    width: "65%",
    alignItems: "center",
    justifyContent: "center",
  },

  botaoVoltar: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    backgroundColor: "white",
    justifyContent: "center",
    position: "absolute",
    top: 10,
    left: 0,
  },

  containerInput: {
    justifyContent: "center",
    height: "40%",
    width: "100%",
  },

  mensagem: {
    height: 80,
    width: "100%",
    justifyContent: "center",
    alignSelf: "center",
  },

  mensagemText: {
    fontSize: 16,
    textAlign: "left",
    color: "#444444ff",
  },

  title: {
    fontSize: 17,
  },

  input: {
    borderBottomWidth: 1,
  },

  btnAcessar: {
    height: 50,
    width: "100%",
    backgroundColor: "#013D7A",
    borderRadius: 10,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },

  btnTextAcessar: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

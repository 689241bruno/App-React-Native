import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { BlurView } from "expo-blur";

import axios from "axios";

export default function Signin() {
  const [oculto, setOculto] = React.useState(true);
  const navigation = useNavigation();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const cadastrarUsuario = () => {
    const emailLimpo = email.trim().toLowerCase();
    const senhaLimpa = senha.trim();
    const nomeLimpo = nome.trim();

    if (!emailLimpo || !senhaLimpa || !nomeLimpo) {
      alert("Preencha todos os campos corretamente.");
      return;
    }

    if (!emailLimpo.includes("@") || !emailLimpo.includes(".")) {
      alert("Email inválido.");
      return;
    }
    axios
      // API publicada no Railway - Banco de dados do Neon
      .post("https://api-postgre-lk9v.onrender.com/usuarios", {
        nome: nomeLimpo,
        email: emailLimpo,
        senha: senhaLimpa,
      })
      .then((response) => {
        console.log(response.data);
        setNome("");
        setEmail("");
        setSenha("");
        alert("Usuário Cadastrado!");
        navigation.navigate("Login");
      })
      .catch((error) => {
        console.error("Erro na API:", error);
        alert("Algo deu erado!");
      });
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
          onPress={() => navigation.navigate("Inicial")}
        >
          <Text style={{ textAlign: "center" }}>
            <MaterialIcons name="arrow-back" size={40} color="black" />
          </Text>
        </TouchableOpacity>
      </Animatable.View>
      <View style={styles.h1}>
        <Image
          source={require("../../assets/Macawdemy_Letreiro.png")}
          resizeMode="contain"
          style={{ height: "100%" }}
        ></Image>
      </View>
      <View
        style={{
          height: "50%",
          width: "100%",
          alignSelf: "center",
          justifyContent: "space-around",
        }}
      >
        <View style={styles.containerInput}>
          <TextInput
            label="Nome"
            value={nome}
            onChangeText={setNome}
            mode="outlined"
            activeOutlineColor="#0c4499ff"
          />
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
          <TextInput
            label="Senha"
            value={senha}
            onChangeText={setSenha}
            mode="outlined"
            autoCapitalize="none"
            secureTextEntry={oculto}
            right={
              <TextInput.Icon
                icon={oculto ? "eye-off" : "eye"}
                onPress={() => setOculto(!oculto)}
              />
            }
            activeOutlineColor="#0c4499ff"
          />
        </View>
        <TouchableOpacity onPress={cadastrarUsuario}>
          <LinearGradient
            colors={["#0c4499ff", "#51bcd6ff", "#239fbeff"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.btnAcessar}
          >
            <Text style={styles.btnTextAcessar}>Cadastrar</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <View style={styles.naoTemConta}>
        <Text style={{ fontSize: 15 }}>
          Já tem uma conta?
          <Text
            style={styles.link}
            onPress={() => navigation.navigate("Login")}
          >
            Entrar
          </Text>
        </Text>
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
    justifyContent: "space-evenly",
    height: "70%",
    width: "100%",
  },

  title: {
    fontSize: 17,
  },

  input: {
    borderBottomWidth: 1,
  },

  containerInputOutrasOpcoes: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  lembrarDeMim: {
    flexDirection: "row",
    alignItems: "center",
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

  link: {
    fontSize: 15,
    color: "#0c4499ff",
    textAlign: "center",
  },
  separacao: {
    height: 80,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  linha: {
    height: 3,
    width: "45%",
    backgroundColor: "gray",
  },
  opcoesLogin: {
    height: 80,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  botoesLogin: {
    height: 80,
    width: "30%",
    backgroundColor: "white",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "gray",
    elevation: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  imageLogin: {
    height: 40,
    width: 40,
  },
});

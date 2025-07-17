import React, { useState } from "react";
import { TextInput, Button } from "react-native-paper";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

import axios from "axios";

export default function Signin() {
  const [oculto, setOculto] = React.useState(true);
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = () => {
    const emailLimpo = email.trim().toLowerCase();
    const senhaLimpa = senha.trim();

    if (!emailLimpo || !senhaLimpa) {
      alert("Preencha todos os campos corretamente.");
      return;
    }

    if (!emailLimpo.includes("@") || !emailLimpo.includes(".")) {
      alert("Email inválido.");
      return;
    }
    axios
      // API publicada no Railway - Banco de dados do Neon
      .post("https://apirailway-production-07cc.up.railway.app/login", {
        email: emailLimpo,
        senha: senhaLimpa,
      })
      .then((response) => {
        console.log(response.data);
        setEmail("");
        setSenha("");
        alert("Usuário logado!");
        navigation.navigate("Principal");
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
      <Animatable.View animation={"fadeInUp"} delay={100} style={styles.header}>
        <Button>
          <Text>seta</Text>
        </Button>
        <Text style={styles.header}>Faça o login para ter acesso </Text>
      </Animatable.View>

      <View style={styles.containerInput}>
        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          mode="outlined"
          autoCapitalize="none"
          error={!email.includes("@") && email !== ""}
          activeOutlineColor="black"
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
          activeOutlineColor="black"
        />
        <TouchableOpacity onPress={() => navigation.navigate("#")}>
          <Text style={styles.link}>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.btnAcessar} onPress={handleSubmit}>
        <Text style={styles.btnTextAcessar}>Acessar</Text>
      </TouchableOpacity>
      <View style={styles.outrasOpcoes}>
        <View
          style={{
            width: "100%",
          }}
        >
          <View
            style={{
              height: 2,
              width: "100%",
              backgroundColor: "gray",
            }}
          />
          <Text
            style={{
              position: "absolute",
              alignSelf: "center",
              top: -10,
              paddingLeft: 5,
              paddingRight: 5,
              backgroundColor: "white",
            }}
          >
            ou
          </Text>
        </View>
        <View
          style={{
            height: 50,
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <Image
            source={require("../../assets/Google_icone.png")}
            style={{ width: 35, height: 35, borderColor: "gray" }}
          />
          <Image
            source={require("../../assets/Facebook_icone.png")}
            style={{ width: 40, height: 40 }}
          />
          <Image
            source={require("../../assets/Microsoft_icone.png")}
            style={{ width: 30, height: 30 }}
          />
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
        <Text style={styles.link}>Não tenho uma conta</Text>
      </TouchableOpacity>
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 30,
  },

  header: {
    width: "100%",
    height: 50,
    backgroundColor: "red",
    position: "absolute",
    top: 20,
    fontSize: 28,
    color: "dark-gray",
    fontWeight: "bold",
  },

  containerInput: {
    justifyContent: "space-between",
    height: 200,
    width: "100%",
    backgroundColor: "red",
  },

  title: {
    fontSize: 17,
  },

  input: {
    borderBottomWidth: 1,
  },

  btnAcessar: {
    backgroundColor: "#1179E8",
    height: 40,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },

  btnTextAcessar: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },

  link: {
    fontSize: 15,
    color: "blue",
    textAlign: "center",
  },
  outrasOpcoes: {
    height: 250,
    justifyContent: "space-around",
  },
});

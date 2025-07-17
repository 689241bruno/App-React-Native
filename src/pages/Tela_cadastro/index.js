import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { TextInput, Button } from "react-native-paper";

import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

import axios from "axios";

export default function Signin() {
  const [oculto, setOculto] = React.useState(true);
  const navigation = useNavigation();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = () => {
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
      .post("https://apirailway-production-07cc.up.railway.app/usuarios", {
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
    <View style={styles.container}>
      <Animatable.View animation={"fadeInUp"} delay={100} style={styles.header}>
        <Text style={styles.header}>Cadastro</Text>
      </Animatable.View>

      <Animatable.View
        style={styles.containerForm}
        animation={"fadeInUp"}
        delay={300}
      >
        <View style={styles.containerInput}>
          <TextInput
            label="Nome"
            value={nome}
            onChangeText={setNome}
            mode="outlined"
            left={<TextInput.Icon icon="account" />}
            activeOutlineColor="black"
          />
          <TextInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            mode="outlined"
            autoCapitalize="none"
            left={<TextInput.Icon icon="email" />}
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
            left={<TextInput.Icon icon="lock" />}
            activeOutlineColor="black"
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.link}>Já tenho uma conta </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnAcessar} onPress={handleSubmit}>
          <Text style={styles.btnTextAcessar}>Confirmar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1179E8",
    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    position: "absolute",
    top: 20,
    alignSelf: "center",
    fontSize: 28,
    color: "white",
    fontWeight: "bold",
  },

  containerForm: {
    backgroundColor: "white",
    width: "80%",
    height: 550,
    padding: 30,
    borderRadius: 25,
    elevation: 5,
    justifyContent: "space-around",
  },

  containerInput: {
    justifyContent: "space-between",
    height: 250,
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
});

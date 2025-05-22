import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

import axios from "axios";

export default function Signin() {
  const navigation = useNavigation();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = () => {
    axios
      .post("http://192.168.0.182:3000/usuarios", {
        nome: nome,
        email: email,
        senha: senha,
      })
      .then((response) => {
        console.log(response.data);
        console.log("funcionou");
        setNome("");
        setEmail("");
        setSenha("");
      })
      .catch((error) => {
        console.error("Erro na API:", error);
        console.log("n foi");
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
          <Text style={styles.title}>Nome</Text>
          <TextInput
            style={styles.input}
            placeholder="username"
            value={nome}
            onChangeText={setNome}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.title}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="yourname@emai.com"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.containerInput}>
          <Text style={styles.title}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="password"
            value={senha}
            onChangeText={setSenha}
          />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
          <Text style={styles.link}>Já possui uma conta? Entrar</Text>
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
    height: 600,
    padding: 30,
    borderRadius: 15,
    elevation: 5,
    justifyContent: "space-around",
  },

  containerInput: {
    justifyContent: "space-between",
    height: 80,
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

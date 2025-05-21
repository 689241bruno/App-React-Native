import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

export default function Signin() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Animatable.View animation={"fadeInUp"} delay={100} style={styles.header}>
        <Text style={styles.header}>Entrar</Text>
      </Animatable.View>

      <Animatable.View
        style={styles.containerForm}
        animation={"fadeInUp"}
        delay={300}
      >
        <View style={styles.containerInput}>
          <Text style={styles.title}>Email</Text>
          <TextInput style={styles.input} placeholder="yourname@emai.com" />
        </View>

        <View style={styles.containerInput}>
          <Text style={styles.title}>Senha</Text>
          <TextInput style={styles.input} placeholder="password" />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
          <Text style={styles.link}>Não possui uma conta? Cadastra-se</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnAcessar}>
          <Text style={styles.btnTextAcessar}>Acessar</Text>
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
    height: 500,
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

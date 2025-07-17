import React, { useState } from "react";
import { TextInput, Button, Checkbox } from "react-native-paper";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

import axios from "axios";

export default function Signin() {
  const [checked, setChecked] = React.useState(false);
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
        <TouchableOpacity
          style={styles.botaoVoltar}
          onPress={() => navigation.navigate("Inicial")}
        >
          <Text>
            <MaterialIcons name="chevron_left" size={20} color="white" />
          </Text>
        </TouchableOpacity>
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
        <View style={styles.containerInputOutrasOpcoes}>
          <View style={styles.lembrarDeMim}>
            <Checkbox
              color="#0c4499ff"
              status={checked ? "checked" : "unchecked"}
              onPress={() => setChecked(!checked)}
            />
            <Text>Lembrar de mim</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("#")}>
            <Text style={styles.link}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={handleSubmit}>
          <LinearGradient
            colors={["#0c4499ff", "#51bcd6ff", "#239fbeff"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.btnAcessar}
          >
            <Text style={styles.btnTextAcessar}>Acessar</Text>
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
    justifyContent: "space-around",
    padding: 30,
  },

  header: {
    width: "100%",
    height: 50,
    position: "absolute",
    top: 20,
    fontSize: 28,
    color: "dark-gray",
    fontWeight: "bold",
  },

  botaoVoltar: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    elevation: 10,
    backgroundColor: "black",
  },

  containerInput: {
    justifyContent: "space-between",
    height: 300,
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
  outrasOpcoes: {
    height: 250,
    justifyContent: "space-around",
  },
});

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";

import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

import axios from "axios";

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    buscarUsuarios();
  }, []);

  const buscarUsuarios = async () => {
    try {
      const resposta = await axios.get(
        "https://apipostgresql-production.up.railway.app/"
      );

      setUsuarios(resposta.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <View style={styles.containe}>
      <View>
        <Text style={styles.title}>Usuarios cadastrados</Text>
      </View>
      <ScrollView style={styles.lista}>
        <View style={styles.row}>
          <Text style={(styles.cell, styles.header)}>Nome</Text>
          <Text style={(styles.cell, styles.header)}>Email</Text>
        </View>
        {usuarios.map((usuario) => (
          <View key={usuario.id} style={styles.row}>
            <Text style={styles.cell}>{usuario.nome}</Text>
            <Text style={styles.cell}>{usuario.email}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  containe: {
    flex: 1,
    backgroundColor: "#1179E8",
    alignItems: "center",
    justifyContent: "center",
  },
  lista: {
    marginTop: 50,
    width: "90%",
  },
  row: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  cell: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    textAlign: "left",
    backgroundColor: "white",
    fontSize: 11,
  },
  header: {
    backgroundColor: "#eee", // Cor de fundo do cabeçalho
    fontWeight: "bold", // Texto em negrito
    width: "50%",
    padding: 10,
    borderWidth: 1,
  },
  title: {
    fontSize: 20,
    marginTop: 40,
    fontWeight: "bold",
    color: "white",
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

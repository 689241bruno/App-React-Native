import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
export default function MenuBar() {
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <View style={styles.section}>
          <TouchableOpacity style={styles.botao}></TouchableOpacity>

          <TouchableOpacity style={styles.botao}></TouchableOpacity>
        </View>

        <View style={styles.sectionMeio}>
          <TouchableOpacity style={styles.botaoMeio}></TouchableOpacity>
        </View>

        <View style={styles.section}>
          <TouchableOpacity style={styles.botao}></TouchableOpacity>

          <TouchableOpacity style={styles.botao}></TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 90,
    width: "100%",
    backgroundColor: "#FFF",
    position: "absolute",
    bottom: 0,
    elevation: 5,
  },

  nav: {
    height: "100%",
    width: "100%",
    padding: 10,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  section: {
    height: "100%",
    width: "33%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 20,
  },
  sectionMeio: {
    height: 90,
    width: 90,
    borderRadius: "50%",
    marginBottom: 30,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#FFF",
  },
  botao: {
    height: 55,
    width: 55,
    backgroundColor: "#d1d1d1",
    borderRadius: "50%",
    elevation: 5,
  },
  botaoMeio: {
    height: 70,
    width: 70,
    backgroundColor: "#d1d1d1",
    borderRadius: "50%",
    elevation: 5,
  },
});

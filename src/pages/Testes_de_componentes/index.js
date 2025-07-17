import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function TestesComponentes() {
  return (
    <View>
      <View>
        <TouchableOpacity
          style={{
            height: 50,
            width: "80%",
            backgroundColor: "#013D7A",
            borderRadius: 10,
            alignSelf: "center",
            marginTop: 100,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontFamily: "sans-serif",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Entrar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 50,
            width: "80%",
            backgroundColor: "white",
            borderRadius: 10,
            borderWidth: 2,
            borderColor: "#013D7A",
            alignSelf: "center",
            marginTop: 100,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontFamily: "sans-serif",
              fontWeight: "bold",
              color: "#013D7A",
            }}
          >
            Cadastrar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

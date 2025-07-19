import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  Button,
  ImageBackground,
  StyleSheet,
} from "react-native";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Button title="Abrir Modal" onPress={() => setModalVisible(true)} />

      <Modal visible={modalVisible} transparent animationType="fade">
        <ImageBackground
          source={require("../../assets/tela_login_fundo.png")} // imagem de fundo qualquer
          blurRadius={10}
          style={styles.modalBackground}
          resizeMode="contain"
        >
          <View style={styles.modalContent}>
            <Text style={{ color: "#fff", fontSize: 18 }}>
              Isso é um modal com blur!
            </Text>
            <Button title="Fechar" onPress={() => setModalVisible(false)} />
          </View>
        </ImageBackground>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: 20,
    borderRadius: 10,
  },
});

import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";

import * as Progress from "react-native-progress";
import ContainerMateria from "../../components/conatinerMateria";
import { useNavigation } from "@react-navigation/native";

import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;


export default function Home() {
  const navigation = useNavigation();
  return (
    
    <View style={styles.conatiner}>
      <View style={styles.header}>
        <Pressable style={styles.botao}>
          <Image
            source={require("../../assets/trophy.png")}
            style={{ height: "80%", width: "80%" }}
          />
        </Pressable>

        <View style={styles.section}>
          <Pressable style={styles.botao}>
            <Image
              source={require("../../assets/star.png")}
              style={{ height: "70%", width: "70%" }}
            />
            <Text
              style={{
                position: "absolute",
                fontWeight: "bold",
                color: "#FFF",
                fontSize: 10,
                top: 15,
              }}
            >
              12
            </Text>
          </Pressable>
          <Pressable style={styles.botao} onPress={() => navigation.navigate("Perfil")}>
            <Image
              source={require("../../assets/user.png")}
              style={{ height: "100%", width: "100%" }}
            />
          </Pressable>
        </View>
      </View>

      <ScrollView style={styles.main}>
        <ContainerMateria
          titulo="Linguagens"
          progress={0.7}
          nomeImage="Linguagens"
        />
        <ContainerMateria
          titulo="Matemática"
          progress={0.5}
          nomeImage="Matemática"
        />
        <ContainerMateria
          titulo="Ciências da Natureza"
          progress={0.1}
          nomeImage="CiênciasdaNatureza"
        />
        <ContainerMateria
          titulo="Ciências Humanas"
          progress={0.8}
          nomeImage="CiênciasHumanas"
        />
        <ContainerMateria titulo="Redação" progress={0.4} nomeImage="Redação" />
        <View style={styles.footer}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    paddingBottom: 30,
    backgroundColor: "#338BE5",
  },
  header: {
    marginTop: statusBarHeight,
    width: "100%",
    height: 50,
    backgroundColor: "#FFF",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  botao: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  section: {
    width: 100,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  main: {
    padding: 30,
    display: "flex",
    flexDirection: "column",
  },

  containerMateria: {
    height: 210,
    width: "100%",
    alignSelf: "center",
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "gray",
    marginBottom: 30,
    display: "flex",
    flexDirection: "column",
  },
  tituloMateria: {
    fontSize: 24,
    fontWeight: "bold",
  },
  secaoPrincipal: {
    width: "100%",
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    height: "65%",
    borderBottomWidth: 2,
    borderColor: "gray",
    padding: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  secaoUm: {
    width: "70%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    padding: 10,
  },
  secaoDois: {
    width: "30%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  imageMateria: {
    height: "80%",
    width: "80%",
    backgroundColor: "#696969",
    borderRadius: 14,
  },
  descricaoMateria: {
    marginTop: 10,
    color: "#696969",
  },
  secaoSecundaria: {
    height: "35%",
    width: "100%",
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 15,
    paddingLeft: 15,
  },
  botaoTreinar: {
    height: "50%",
    width: "25%",
    backgroundColor: "gray",
    borderRadius: 15,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  footer: {
    height: 40,
  },
});

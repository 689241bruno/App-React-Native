import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

import * as Progress from "react-native-progress";
import ContainerMateria from "../../components/containerMateria";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import MenuBar from "../../components/MenuBar";

import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;

export default function Home() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.conatiner}>
      <Animatable.View
        delay={300}
        animation={"fadeInDown"}
        style={styles.header}
      >
        <Pressable style={styles.botao}>
          <Image
            source={require("../../assets/trophy.png")}
            style={{ height: "80%", width: "80%" }}
          />
        </Pressable>
        <Pressable
          style={styles.botao}
          onPress={() => navigation.navigate("Perfil")}
        >
          <Image
            source={require("../../assets/user.png")}
            style={{ height: "100%", width: "100%" }}
          />
          <View
            style={{
              position: "absolute",
              height: 20,
              width: 20,
              bottom: 0,
              left: 0,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../assets/star.png")}
              style={{ height: 20, width: 20 }}
            />
            <Text
              style={{
                position: "absolute",
                fontWeight: "bold",
                color: "#FFF",
                alignSelf: "center",
                fontSize: 8,
                top: 5,
              }}
            >
              12
            </Text>
          </View>
        </Pressable>
      </Animatable.View>

      <ScrollView style={styles.main}>
        <ContainerMateria
          titulo="Linguagens"
          progress={0.7}
          nomeImage="Linguagens"
          delayanim={400}
        />
        <ContainerMateria
          titulo="Matemática"
          progress={0.5}
          nomeImage="Matemática"
          delayanim={480}
        />
        <ContainerMateria
          titulo="Ciências da Natureza"
          progress={0.1}
          nomeImage="CiênciasdaNatureza"
          delayanim={560}
        />
        <ContainerMateria
          titulo="Ciências Humanas"
          progress={0.8}
          nomeImage="CiênciasHumanas"
          delayanim={640}
        />
        <ContainerMateria titulo="Redação" progress={0.4} nomeImage="Redação" />
        <View style={styles.footer}></View>
      </ScrollView>
      <MenuBar></MenuBar>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: "#338BE5",
  },
  header: {
    width: "100%",
    marginTop: 10,
    height: 60,
    backgroundColor: "#FFF",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    elevation: 5,
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
    backgroundColor: "red",
  },
  main: {
    padding: 30,
    paddingTop: 60,
    marginBottom: 60,
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
    height: 90,
  },
});

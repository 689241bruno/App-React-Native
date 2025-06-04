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

export default function Home() {
  function MateriaBox(props) {
    return (
      <View style={props.estilo} backgroundColor={props.color}>
        <View style={props.estiloSecaoPrincipal}>
          <View style={props.estiloSecaoUm}>
            <Text style={props.tituloEstilo}>{props.titulo}</Text>
            <Text style={props.descricaoEstilo}>{props.descricao}</Text>
          </View>
          <View style={props.estiloSecaoDois}>
            <Image style={props.estiloImage}></Image>
          </View>
        </View>
        <View style={props.estiloSecaoSecundaria}>
          <Text style={{ fontSize: 15, fontWeight: "bold", color: "gray" }}>
            {props.progressoText}
          </Text>
          <Progress.Bar
            progress={props.progresso}
            height={15}
            color="gray"
            style={{ borderColor: "gray", width: "55%" }}
          />
          <TouchableOpacity style={props.estiloBotaoTreinar}>
            <Text style={{ color: "white", fontWeight: "bold" }}>Treinar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

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
          <Pressable style={styles.botao}>
            <Image
              source={require("../../assets/user.png")}
              style={{ height: "100%", width: "100%" }}
            />
          </Pressable>
        </View>
      </View>
      <ScrollView style={styles.main}>
        <MateriaBox
          estilo={styles.containerMateria}
          color="#FFF"
          titulo="Linguagens"
          tituloEstilo={styles.tituloMateria}
          descricao="Lingua Portuguesa e Estrangeira, Arte e  Educação física."
          descricaoEstilo={styles.descricaoMateria}
          estiloSecaoPrincipal={styles.secaoPrincipal}
          estiloSecaoUm={styles.secaoUm}
          estiloSecaoDois={styles.secaoDois}
          estiloImage={styles.imageMateria}
          estiloSecaoSecundaria={styles.secaoSecundaria}
          estiloBotaoTreinar={styles.botaoTreinar}
          progresso={0.5}
          progressoText="50%"
        />
        <MateriaBox
          estilo={styles.containerMateria}
          color="#FFF"
          titulo="Matemática"
          tituloEstilo={styles.tituloMateria}
          descricao="Matemática aplicada à realidade."
          descricaoEstilo={styles.descricaoMateria}
          estiloSecaoPrincipal={styles.secaoPrincipal}
          estiloSecaoUm={styles.secaoUm}
          estiloSecaoDois={styles.secaoDois}
          estiloImage={styles.imageMateria}
          estiloSecaoSecundaria={styles.secaoSecundaria}
          estiloBotaoTreinar={styles.botaoTreinar}
          progresso={0.7}
          progressoText="70%"
        />
        <MateriaBox
          estilo={styles.containerMateria}
          color="#FFF"
          titulo="Ciências Humanas"
          tituloEstilo={styles.tituloMateria}
          descricao="Filosofia, Geografia, História e Sociologia."
          descricaoEstilo={styles.descricaoMateria}
          estiloSecaoPrincipal={styles.secaoPrincipal}
          estiloSecaoUm={styles.secaoUm}
          estiloSecaoDois={styles.secaoDois}
          estiloImage={styles.imageMateria}
          estiloSecaoSecundaria={styles.secaoSecundaria}
          estiloBotaoTreinar={styles.botaoTreinar}
          progresso={0.3}
          progressoText="30%"
        />
        <MateriaBox
          estilo={styles.containerMateria}
          color="#FFF"
          titulo="Ciências da Natureza"
          tituloEstilo={styles.tituloMateria}
          descricao="Biologia Física e Química."
          descricaoEstilo={styles.descricaoMateria}
          estiloSecaoPrincipal={styles.secaoPrincipal}
          estiloSecaoUm={styles.secaoUm}
          estiloSecaoDois={styles.secaoDois}
          estiloImage={styles.imageMateria}
          estiloSecaoSecundaria={styles.secaoSecundaria}
          estiloBotaoTreinar={styles.botaoTreinar}
          progresso={0.4}
          progressoText="40%"
        />
        <View style={styles.footer}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    paddingBottom: 30,
  },
  header: {
    marginTop: 15,
    width: "100%",
    height: "12%",
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

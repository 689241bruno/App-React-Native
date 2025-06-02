import React from "react";
import { Text, View, StyleSheet, ScrollView, Pressable, Image } from "react-native";

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
            <Image style={props.estiloImage}>

            </Image>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.conatiner}>
      <View style={styles.header}>
        <Pressable style={styles.botao}></Pressable>

        <View style={styles.section}>
          <Pressable style={styles.botao}></Pressable>
          <Pressable style={styles.botao}></Pressable>
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

        />
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
        />
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
        />
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
        />
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
        />
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
    width: "100%",
    height: 80,
    backgroundColor: "#FFF",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  botao: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    backgroundColor: "gray",
  },
  section: {
    width: 150,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
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
    backgroundColor: "#FFF",
    alignSelf: "center",
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "gray",
    marginBottom: 30,
    display: "flex",
    flexDirection: "row",
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
  footer: {
    height: 40,
  },
});

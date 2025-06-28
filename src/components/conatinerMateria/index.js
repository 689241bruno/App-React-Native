import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import * as Progress from "react-native-progress";
import * as Animatable from "react-native-animatable";

const imagens = {
  Linguagens: require("../../assets/pilha-de-livros.png"),
  Matemática: require("../../assets/matematica.png"),
  CiênciasdaNatureza: require("../../assets/ambiental.png"),
  CiênciasHumanas: require("../../assets/livro-de-historia.png"),
  Redação: require("../../assets/redacao.png"),
};

export default function ContainerMateria(props) {
  const progresso = props.progress * 100;

  return (
    <Animatable.View
      delay={props.delayanim}
      animation={"fadeInUp"}
      style={styles.containerMateria}
    >
      <View style={styles.secaoPrincipal}>
        <View style={styles.secaoUm}>
          <Text style={styles.tituloMateria}>{props.titulo}</Text>
          <Text style={styles.descricaoMateria}>
            {props.descricao}
          </Text>
        </View>
        <View style={styles.secaoDois}>
          <Image
            style={styles.imageMateria}
            source={imagens[props.nomeImage]}
            resizeMode="contain"
          ></Image>
        </View>
      </View>
      <View style={styles.secaoSecundaria}>
        <Text>{progresso}%</Text>
        <Progress.Bar
          progress={props.progress}
          height={15}
          color="green"
          style={{ borderColor: "gray", width: 150 }}
        />
      </View>
    </Animatable.View>
  );
}
const styles = StyleSheet.create({
  containerMateria: {
    height: 210,
    width: "100%",
    alignSelf: "center",
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "white",
    marginBottom: 30,
    display: "flex",
    flexDirection: "column",
    elevation: 5,
    backgroundColor: "white",
  },
  tituloMateria: {
    fontSize: 21,
    fontWeight: "bold",
  },
  secaoPrincipal: {
    width: "100%",
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    height: "70%",
    borderBottomWidth: 2,
    backgroundColor: "white",
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
    borderRadius: 14,
  },
  descricaoMateria: {
    marginTop: 10,
    color: "#696969",
  },
  secaoSecundaria: {
    alignSelf: "center",
    height: "30%",
    width: "100%",
    borderRadius: 14,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingRight: 15,
    paddingLeft: 15,
    backgroundColor: "white",
  },
});

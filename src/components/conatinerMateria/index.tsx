import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import * as Progress from "react-native-progress";

export default function ContainerMateria() {
  return (
    <View style={styles.containerMateria}>
      <View style={styles.secaoPrincipal}>
        <View style={styles.secaoUm}>
          <Text style={styles.tituloMateria}>Matemática</Text>
          <Text style={styles.descricaoMateria}>
            Complete os exercícios e ganhe pontos!
          </Text>
        </View>
        <View style={styles.secaoDois}>
          <Image style={styles.imageMateria}></Image>
        </View>
      </View>
      <View style={styles.secaoSecundaria}>
        <Text>70%</Text>
        <Progress.Bar
          progress={70}
          height={15}
          color="gray"
          style={{ borderColor: "gray", width: "55%" }}
        />
        <TouchableOpacity style={styles.botaoTreinar}>
          <Text style={{ color: "white", fontWeight: "bold" }}>Treinar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
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
});

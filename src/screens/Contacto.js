import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text, Dimensions } from "react-native";
import YaguareteHeader from "../components/YaguareteHeader";
import FormContacto from "../components/FormContacto";
import InfoContactoCard from "../components/InfoContactoCard";
import Footer from "../components/Footer";

function Contacto(props) {
  return (
    <View style={styles.container}>
      <View style={styles.margenSeguridad}></View>
      <View style={styles.scrollArea}>
        <ScrollView
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <View style={styles.header}>
            <YaguareteHeader
              style={styles.yaguareteHeader}
              navigation={props.navigation}
            ></YaguareteHeader>
          </View>
          <View style={styles.tittleContent}>
            <Text style={styles.contacto}>CONTACTO</Text>
          </View>
          <FormContacto style={styles.contactoCard}></FormContacto>

          <InfoContactoCard style={styles.infoContactoCard}></InfoContactoCard>
          <Footer></Footer>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)",
  },
  scrollArea: {
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("window").width,
    marginTop: 0,
  },
  scrollArea_contentContainerStyle: {
    width: Dimensions.get("window").width,
    justifyContent: "center",
    alignItems: "center",
  },
  tittleContent: {
    padding: 15,
    flex: 1,
  },
  contacto: {
    fontFamily: "open-sans-700",
    fontSize: 24,
    color: "#c60021",
    paddingBottom: 12,
    textAlign: "center",
  },
  margenSeguridad: {
    height: "3%",
    backgroundColor: "rgba(255,255,255,1)",
  },
  header: {
    width: Dimensions.get("window").width,
    height: 100,
    backgroundColor: "#c60021",
  },
  yaguareteHeader: {
    height: 100,
    width: Dimensions.get("window").width,
    backgroundColor: "#c60021",
  },
  contactoCard: {
    width: Dimensions.get("window").width,
    backgroundColor: "rgba(255,255,255,1)",
  },
  infoContactoCard: {
    width: Dimensions.get("window").width,
    backgroundColor: "rgba(255,255,255,1)",
  },
});

export default Contacto;

import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text, Dimensions } from "react-native";
import YaguareteHeader from "../components/YaguareteHeader";
import FormContacto from "../components/FormContacto";
import InfoContactoCard from "../components/InfoContactoCard";

function Contacto(props) {
  return (
    <View style={styles.container}>
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
    color: "rgba(54,62,63,1)",
    paddingBottom: 12,
    textAlign: "center",
  },
  header: {
    width: Dimensions.get("window").width,
    height: 115,
    backgroundColor: "rgba(193,193,193,1)",
  },
  yaguareteHeader: {
    height: 115,
    width: Dimensions.get("window").width,
    backgroundColor: "rgba(193,193,193,1)",
  },
  contactoCard: {
    width: Dimensions.get("window").width,
    backgroundColor: "rgba(193,193,193,1)",
  },
  infoContactoCard: {
    width: Dimensions.get("window").width,
    backgroundColor: "rgba(193,193,193,1)",
  },
});

export default Contacto;

import React, { Component, useEffect, useState } from "react";
import { StyleSheet, View, Image, Text, Dimensions } from "react-native";

function ResultadoSimulador(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.contRes}>
        <Image
          source={require("../assets/images/res-agua1.png")}
          resizeMode="contain"
          style={styles.imageRes}
        ></Image>
        <Text style={styles.labelRes}>
          {props.litrosAgua} litros de agua ahorrados
        </Text>
      </View>
      <View style={styles.contRes}>
        <Image
          source={require("../assets/images/res-co21.png")}
          resizeMode="contain"
          style={styles.imageRes}
        ></Image>
        <Text style={styles.labelRes}>{props.co2} kg. de CO2 no emitidos</Text>
      </View>
      <View style={styles.contRes}>
        <Image
          source={require("../assets/images/res-relleno1.png")}
          resizeMode="contain"
          style={styles.imageRes}
        ></Image>
        <Text style={styles.labelRes}>
          {props.vertederos} metros cúbicos ahorrados en vertederos
        </Text>
      </View>
      <View style={styles.contRes}>
        <Image
          source={require("../assets/images/res-arboles1.png")}
          resizeMode="contain"
          style={styles.imageRes}
        ></Image>
        <Text style={styles.labelRes}>
          {props.arboles} árboles salvados de ser talados
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#c60021",
    overflow: "hidden",
    flex: 1,
    borderWidth: 2,
    borderRadius: 2,
    borderColor: "#c60021",
    shadowColor: "#000",
    shadowOffset: {
      width: 4,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 3,
  },
  contRes: {
    width: Dimensions.get("window").width,
    height: 40,
    padding: 15,
  },
  imageRes: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  labelRes: {
    marginLeft: 60,
    marginTop: 30,
    position: "absolute",
    fontFamily: "open-sans-regular",
    color: "#FFF",
    width: Dimensions.get("window").width - 40,
    height: 40,
    fontSize: 14,
  },
});

export default ResultadoSimulador;

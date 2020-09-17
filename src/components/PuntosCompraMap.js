import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

function PuntosCompraMap(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={require("../assets/images/map_prueba.png")}
        style={styles.cardItemImagePlace}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 2,
    flexWrap: "nowrap",
    backgroundColor: "rgba(193,193,193,1)",
    overflow: "hidden",
  },
  cardItemImagePlace: {
    backgroundColor: "rgba(193,193,193,1)",

    minHeight: 210,
    height: 350,
    width: Dimensions.get("window").width - 40,
  },
});

export default PuntosCompraMap;

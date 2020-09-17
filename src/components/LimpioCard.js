import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

function LimpioCard(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.bodyContent}>
        <Text style={styles.limpio}>Limpio</Text>
        <Text style={styles.subtitleHere}>
          Gral. Elizardo Aquino km 23, Ruta 3.
        </Text>
      </View>
      <Image
        source={require("../assets/images/marker4.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#CCC",
    flexWrap: "nowrap",
    backgroundColor: "rgba(193,193,193,1)",
    shadowColor: "#000",
    shadowOffset: {
      width: -2,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
    overflow: "hidden"
  },
  bodyContent: {
    padding: 16,
    paddingTop: 24,
    justifyContent: "center",
    height: 90,
    width: 333
  },
  limpio: {
    fontFamily: "roboto-700",
    fontSize: 24,
    color: "rgba(255,255,255,1)",
    paddingBottom: 12,
    marginLeft: 45
  },
  subtitleHere: {
    fontFamily: "open-sans-regular",
    fontSize: 14,
    color: "rgba(255,255,255,1)",
    lineHeight: 16
  },
  image: {
    top: -1,
    left: 17,
    width: 34,
    height: 69,
    position: "absolute"
  }
});

export default LimpioCard;

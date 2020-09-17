import React, { Component } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";

function NosotrosTitulo(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.bodyContent}>
        <Text style={styles.quienesSomos}>QUIENES SOMOS</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 2,
    flexWrap: "nowrap",
    backgroundColor: "rgba(255,255,255,1)",
    overflow: "hidden",
  },
  bodyContent: {
    padding: 16,
    paddingTop: 24,
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,1)",
    width: 375,
    height: 90,
  },
  quienesSomos: {
    fontFamily: "open-sans-700",
    fontSize: 24,
    color: "rgba(54,62,63,1)",
    paddingBottom: 12,
  },
});

export default NosotrosTitulo;

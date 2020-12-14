import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function BtnCambiar(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.enviar}>ENVIAR</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16,
  },
  enviar: {
    color: "#c60021",
    fontSize: 14,
    fontFamily: "open-sans-700",
  },
});

export default BtnCambiar;

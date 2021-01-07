import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function BtnIngresar(props) {
  return (
    <TouchableOpacity
      style={[styles.containerIngresar, props.style]}
      onPress={props.ingresar}
    >
      <Text style={styles.ingresar}>INGRESAR</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  containerIngresar: {
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
  ingresar: {
    color: "#c60021",
    fontSize: 14,
    fontFamily: "open-sans-700",
  },
});

export default BtnIngresar;

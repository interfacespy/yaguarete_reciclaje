import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function BtnRegistro(props) {
  return (
    <TouchableOpacity
      style={[styles.container, props.style]}
      onPress={() => {
        props.navigation.navigate("Registrate");
      }}
    >
      <Text style={styles.caption}>¿Aún no tienes cuenta? Regístrate</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16,
  },
  caption: {
    color: "#FFF",
    fontSize: 14,
    fontFamily: "open-sans-regular",
    alignSelf: "flex-start",
  },
});

export default BtnRegistro;

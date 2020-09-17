import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

function TxtMensajeContacto(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.mensaje}>Mensaje</Text>
      <TextInput style={styles.inputStyle}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    backgroundColor: "transparent",
    flexDirection: "row",
    paddingLeft: 10,
  },
  mensaje: {
    fontSize: 16,
    lineHeight: 16,
    paddingTop: 15,
    paddingBottom: 10,
    color: "#000",
    opacity: 0.5,
    alignSelf: "flex-start",
  },
  inputStyle: {
    color: "#000",
    paddingRight: 5,
    fontSize: 16,
    alignSelf: "stretch",
    flex: 1,
    lineHeight: 16,
    paddingTop: 15,
    paddingBottom: 10,
    paddingLeft: 30,
  },
});

export default TxtMensajeContacto;

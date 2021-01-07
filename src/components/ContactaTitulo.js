import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function ContactaTitulo(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.bodyContent}>
        <Text style={styles.quienesSomos}>CONTACTÁ CON NOSOTROS</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 2,
    flexWrap: "nowrap",
    backgroundColor: "#FFF",
    overflow: "hidden",
  },
  bodyContent: {
    padding: 16,
    paddingTop: 24,
    justifyContent: "center",
  },
  quienesSomos: {
    fontFamily: "open-sans-700",
    fontSize: 24,
    color: "rgba(54,62,63,1)",
    paddingBottom: 12,
  },
});

export default ContactaTitulo;

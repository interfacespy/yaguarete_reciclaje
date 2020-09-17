import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import FormContacto from "./FormContacto";

function ContactoCard(props) {
  return (
    <View style={[styles.container, props.style]}>
      <FormContacto style={styles.materialCardWithoutImage5}></FormContacto>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 2,
    flexWrap: "nowrap",
    backgroundColor: "#FFF",
    overflow: "hidden"
  },
  materialCardWithoutImage5: {
    height: 516,
    width: 359
  }
});

export default ContactoCard;

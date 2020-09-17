import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";

function UsuarioLabel(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TextInput placeholder="Usuario" style={styles.inputStyle}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center"
  },
  inputStyle: {
    color: "#000",
    paddingRight: 16,
    fontSize: 16,
    alignSelf: "stretch",
    flex: 1,
    lineHeight: 16,
    paddingTop: 14,
    paddingBottom: 8,
    backgroundColor: "rgba(255,255,255,1)",
    marginLeft: 20,
    paddingLeft: 20
  }
});

export default UsuarioLabel;

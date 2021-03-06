import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";

function TxtUser(props) {
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
    paddingLeft: 16
  },
  inputStyle: {
    color: "#000",
    paddingRight: 5,
    fontFamily: "open-sans-regular",
    fontSize: 16,
    alignSelf: "stretch",
    flex: 1,
    lineHeight: 16,
    paddingTop: 14,
    paddingBottom: 8,
    paddingLeft: 30
  }
});

export default TxtUser;

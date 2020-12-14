import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";

function TxtName(props) {
  return (
    <View style={[styles.containerInput, props.style]}>
      <TextInput style={styles.inputStyle}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  containerInput: {
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
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
    marginLeft: 15,
  },
});

export default TxtName;

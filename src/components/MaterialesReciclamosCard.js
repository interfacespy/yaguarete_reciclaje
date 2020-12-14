import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function MaterialesReciclamosCard(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.bodyContent}>
        <Text style={styles.titleStyle}>MATERIALES QUE RECICLAMOS</Text>
        <Text style={styles.subtitleStyle}></Text>
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
    height: 90,
  },
  titleStyle: {
    fontFamily: "open-sans-700",
    fontSize: 24,
    color: "rgba(54,62,63,1)",
    paddingBottom: 12,
    alignSelf: "center",
  },
  subtitleStyle: {
    fontSize: 14,
    color: "#000",
    lineHeight: 16,
    opacity: 0.5,
  },
});

export default MaterialesReciclamosCard;

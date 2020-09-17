import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function ImpactoSocialCard(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.bodyContent}>
        <Text style={styles.impactoSocial}>IMPACTO SOCIAL</Text>
        <Text style={styles.subtitleStyle}>
          Nuestro compromiso social con el medio ambiente
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 2,
    flexWrap: "nowrap",
    backgroundColor: "rgba(255,255,255,1)",
    overflow: "hidden"
  },
  bodyContent: {
    padding: 16,
    paddingTop: 24,
    justifyContent: "center",
    height: 90
  },
  impactoSocial: {
    fontFamily: "open-sans-700",
    fontSize: 24,
    color: "rgba(54,62,63,1)",
    paddingBottom: 12
  },
  subtitleStyle: {
    fontFamily: "open-sans-regular",
    fontSize: 14,
    color: "rgba(54,62,63,1)",
    lineHeight: 16
  }
});

export default ImpactoSocialCard;

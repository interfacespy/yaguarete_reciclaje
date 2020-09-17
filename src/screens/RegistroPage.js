import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Dimensions } from "react-native";

import Signin from "../components/Signin";

function RegistroPage(props) {
  return (
    <View style={styles.container}>
      <View style={styles.scrollArea}>
        <ScrollView
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <Signin style={styles.signin}></Signin>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(193,193,193,1)",
  },
  scrollArea: {
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("window").width,
    marginTop: 0,
  },
  scrollArea_contentContainerStyle: {
    width: Dimensions.get("window").width,
    justifyContent: "center",
    alignItems: "center",
  },
  signin: {
    width: Dimensions.get("window").width,
  },
});

export default RegistroPage;

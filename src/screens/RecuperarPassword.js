import React, { Component } from "react";
import { StyleSheet, View, Dimensions, ScrollView } from "react-native";
import CambiarPassword from "../components/CambiarPassword";
import Footer from "../components/Footer";

function RecuperarPassword(props) {
  return (
    <View style={styles.container}>
      <View style={styles.margenSeguridad}></View>
      <View style={styles.scrollArea}>
        <ScrollView
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <CambiarPassword
            style={styles.cambiarPassword}
            navigation={props.navigation}
          ></CambiarPassword>
          <Footer></Footer>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c60021",
  },
  scrollArea: {
    width: Dimensions.get("window").width,
    marginTop: 0,
  },
  scrollArea_contentContainerStyle: {
    width: Dimensions.get("window").width,
  },
  cambiarPassword: {
    width: Dimensions.get("window").width,
  },
});

export default RecuperarPassword;

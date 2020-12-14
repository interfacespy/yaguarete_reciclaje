import React, { Component } from "react";
import { StyleSheet, View, Dimensions, ScrollView } from "react-native";
import Login from "../components/Login";
import Footer from "../components/Footer";

function LoginPage(props) {
  return (
    <View style={styles.container}>
      <View style={styles.scrollArea}>
        <ScrollView
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <Login style={styles.login} navigation={props.navigation}></Login>
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
  login: {
    width: Dimensions.get("window").width,
  },
});

export default LoginPage;

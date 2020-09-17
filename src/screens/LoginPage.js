import React, { Component } from "react";
import { StyleSheet, View, Dimensions, ScrollView } from "react-native";
import Login from "../components/Login";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function LoginPage(props) {
  return (
    <View style={styles.container}>
      <View style={styles.scrollArea}>
        <ScrollView
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <Login style={styles.login} navigation={props.navigation}></Login>
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
  login: {
    width: Dimensions.get("window").width,
  },
});

export default LoginPage;

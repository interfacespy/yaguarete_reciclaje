import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Dimensions,
  Text,
} from "react-native";

function Footer(props) {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>© 2020 Yaguarete Reciclaje </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#c60021",
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("window").width,
    height: 60,
  },
  footerText: {
    color: "rgba(255,255,255,1)",
  },
});

export default Footer;

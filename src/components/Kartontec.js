import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";

function Kartontec(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={require("../assets/images/Screenshot_from_2020-09-11_21-43-59.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  image: {
    width: 106,
    height: 116
  }
});

export default Kartontec;

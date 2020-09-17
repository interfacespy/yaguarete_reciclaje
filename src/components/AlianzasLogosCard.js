import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";

function AlianzasLogosCard(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={require("../assets/images/deg.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <Image
        source={require("../assets/images/fp.png")}
        resizeMode="contain"
        style={styles.image2}
      ></Image>
      <Image
        source={require("../assets/images/giz.gif")}
        resizeMode="contain"
        style={styles.image3}
      ></Image>
      <Image
        source={require("../assets/images/mades.png")}
        resizeMode="contain"
        style={styles.image4}
      ></Image>
      <Image
        source={require("../assets/images/wwf.png")}
        resizeMode="contain"
        style={styles.image5}
      ></Image>
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
  image: {
    width: 200,
    height: 100,
    marginTop: 50,
    alignSelf: "center"
  },
  image2: {
    width: 200,
    height: 100,
    alignSelf: "center"
  },
  image3: {
    width: 200,
    height: 100,
    alignSelf: "center"
  },
  image4: {
    width: 200,
    height: 100,
    alignSelf: "center"
  },
  image5: {
    width: 200,
    height: 200,
    alignSelf: "center"
  }
});

export default AlianzasLogosCard;

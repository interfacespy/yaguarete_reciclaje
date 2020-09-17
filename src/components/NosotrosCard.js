import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import Svg, { Ellipse } from "react-native-svg";

function NosotrosCard(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={require("../assets/images/1_1-Acerca-de-Nosotros.jpg")}
        style={styles.cardItemImagePlace}
      ></Image>
      <View style={styles.body}>
        <Text style={styles.bodyText}>
          BuilderX is a screen design tool which codes React Native for you.
        </Text>
      </View>
      <Svg viewBox="0 0 100 100" style={styles.ellipse}>
        <Ellipse
          stroke="rgba(230, 230, 230,1)"
          strokeWidth={0}
          fill="rgba(230, 230, 230,1)"
          cx={50}
          cy={50}
          rx={50}
          ry={50}
        ></Ellipse>
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 2,
    flexWrap: "nowrap",
    shadowColor: "#000",
    shadowOffset: {
      width: -2,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
    overflow: "hidden"
  },
  cardItemImagePlace: {
    minHeight: 210,
    flex: 1
  },
  body: {
    padding: 16,
    left: 0,
    width: 359,
    top: 229,
    height: 202
  },
  bodyText: {
    lineHeight: 20,
    fontSize: 24,
    color: "rgba(208,2,27,1)",
    fontFamily: "open-sans-regular"
  },
  ellipse: {
    top: 257,
    left: 265,
    width: 100,
    height: 100,
    position: "absolute"
  }
});

export default NosotrosCard;

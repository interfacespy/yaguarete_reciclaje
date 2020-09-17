import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Svg, { Ellipse } from "react-native-svg";

function ArtigasCard(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.cardBody}>
        <View style={styles.bodyContent}>
          <Text style={styles.artigas}>Artigas</Text>
          <Text style={styles.subtitleHere}>
            Teniente Moreno c/ 8 de Junio,  Barrio Virgen de Fatima.
          </Text>
        </View>
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
      <Image
        source={require("../assets/images/marker2.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#CCC",
    flexWrap: "nowrap",
    backgroundColor: "rgba(193,193,193,1)",
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
  cardBody: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  bodyContent: {
    padding: 16,
    paddingTop: 24,
    flex: 1
  },
  artigas: {
    fontFamily: "roboto-700",
    fontSize: 24,
    color: "rgba(255,255,255,1)",
    paddingBottom: 12,
    marginLeft: 45,
    alignSelf: "stretch"
  },
  subtitleHere: {
    fontFamily: "open-sans-regular",
    fontSize: 12,
    color: "rgba(255,255,255,1)",
    lineHeight: 16
  },
  ellipse: {
    top: 174,
    left: 777,
    width: 100,
    height: 100,
    position: "absolute"
  },
  image: {
    top: -1,
    left: 16,
    width: 34,
    height: 74,
    position: "absolute"
  }
});

export default ArtigasCard;

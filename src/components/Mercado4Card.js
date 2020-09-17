import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

function Mercado4Card(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View
        style={[
          styles.cardBody,
          {
            backgroundColor: props.cardBody || undefined
          }
        ]}
      >
        <View
          style={[
            styles.bodyContent,
            {
              backgroundColor: props.bodyContent || "rgba(193,193,193,1)"
            }
          ]}
        >
          <Text style={styles.mercado4}>Mercado 4</Text>
          <Text style={styles.subtitleHere}>
            Lomas Valentinas c/ Pa&#39;i Pérez, Barrio Silvio Petirrosi.
          </Text>
        </View>
      </View>
      <Image
        source={require("../assets/images/marker1.png")}
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
    backgroundColor: "#FFF",
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
  mercado4: {
    fontFamily: "roboto-700",
    fontSize: 24,
    color: "rgba(255,255,255,1)",
    paddingBottom: 12,
    marginLeft: 45
  },
  subtitleHere: {
    fontFamily: "roboto-regular",
    fontSize: 12,
    color: "rgba(255,255,255,1)",
    lineHeight: 16
  },
  image: {
    top: 0,
    left: 17,
    width: 34,
    height: 74,
    position: "absolute"
  }
});

export default Mercado4Card;

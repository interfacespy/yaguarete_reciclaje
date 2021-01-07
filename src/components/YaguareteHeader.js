import React, { Component } from "react";
import { render } from "react-dom";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Ionicons } from "@expo/vector-icons";

const YaguareteHeader = (props) => {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.leftIconButton}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Home");
          }}
        >
          <Icon name="arrow-left" style={styles.icon} size={32}></Icon>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          width: "90%",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Home");
          }}
        >
          <Image
            source={require("../assets/images/logo-blanco.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#c60021",
    flexDirection: "row",
    alignItems: "center",
    padding: 4,
    justifyContent: "space-between",
    shadowColor: "#111",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    elevation: 3,
  },
  icon: {
    color: "#FFF",
  },
  leftIconButton: {
    width: "10%",
    //backgroundColor: "rgba(255,255,255,1)",
    height: 50,
    marginLeft: 20,
    marginTop: 20,
  },
  image: {
    width: 200,
    height: 60,
    marginTop: 5,
    marginLeft: "-20%",
  },
});

export default YaguareteHeader;

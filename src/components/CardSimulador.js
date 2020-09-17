import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function CardSimulador(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.calculadora}>
        <View style={styles.containerInput}>
          <TextInput
            placeholder=""
            keyboardType="numeric"
            style={styles.textInput}
          ></TextInput>
        </View>
        <View style={styles.primeraLinea}>
          <TouchableOpacity style={styles.containerButton}>
            <Icon name="numeric-1" style={styles.caption}></Icon>
          </TouchableOpacity>
          <TouchableOpacity style={styles.leftDiez}>
            <Icon name="numeric-2" style={styles.caption}></Icon>
          </TouchableOpacity>
          <TouchableOpacity style={styles.leftDiez}>
            <Icon name="numeric-3" style={styles.caption}></Icon>
          </TouchableOpacity>
        </View>
        <View style={styles.segundaLinea}>
          <TouchableOpacity style={styles.containerButton}>
            <Icon name="numeric-4" style={styles.caption}></Icon>
          </TouchableOpacity>
          <TouchableOpacity style={styles.leftDiez}>
            <Icon name="numeric-5" style={styles.caption}></Icon>
          </TouchableOpacity>
          <TouchableOpacity style={styles.leftDiez}>
            <Icon name="numeric-6" style={styles.caption}></Icon>
          </TouchableOpacity>
        </View>
        <View style={styles.terceraLinea}>
          <TouchableOpacity style={styles.containerButton}>
            <Icon name="numeric-7" style={styles.caption}></Icon>
          </TouchableOpacity>
          <TouchableOpacity style={styles.leftDiez}>
            <Icon name="numeric-8" style={styles.caption}></Icon>
          </TouchableOpacity>
          <TouchableOpacity style={styles.leftDiez}>
            <Icon name="numeric-9" style={styles.caption}></Icon>
          </TouchableOpacity>
        </View>
        <View style={styles.cuartaLinea}>
          <TouchableOpacity style={styles.containerCero}>
            <Text style={styles.caption}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.leftDiez}>
            <Icon name="close" style={styles.caption}></Icon>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerButton: {
    height: 35,
    width: 55,
    backgroundColor: "rgba(198,0,33,1)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
  },
  leftDiez: {
    height: 35,
    width: 55,
    backgroundColor: "rgba(198,0,33,1)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    marginLeft: 10,
  },
  caption: {
    color: "#fff",
    fontSize: 24,
  },
  container: {
    backgroundColor: "rgba(255,255,255,1)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  calculadora: {
    width: 225,
    height: 260,
    position: "absolute",
    backgroundColor: "rgba(54,62,63,1)",
  },
  kilosInput: {
    marginTop: 20,
    height: 40,
    width: 185,
    backgroundColor: "#fff",
    alignSelf: "center",
  },

  primeraLinea: {
    height: 35,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },

  segundaLinea: {
    height: 35,
    flexDirection: "row",
    marginTop: 9,
    marginLeft: 21,
    marginRight: 20,
  },

  terceraLinea: {
    height: 35,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  containerCero: {
    height: 35,
    width: 120,
    backgroundColor: "rgba(198,0,33,1)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
  },
  cuartaLinea: {
    height: 35,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  containerInput: {
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    flexDirection: "row",
    paddingLeft: 16,
    marginTop: 20,
    height: 40,
    width: 185,
    backgroundColor: "#fff",
    alignSelf: "center",
  },
  textInput: {
    fontSize: 16,
    lineHeight: 16,
    paddingTop: 16,
    paddingBottom: 8,
    color: "rgba(54,62,63,1)",
    alignSelf: "flex-start",
    width: 0,
    height: 24,
    margin: 10,
  },
});

export default CardSimulador;

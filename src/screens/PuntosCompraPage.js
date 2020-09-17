import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import PuntosCompraCard from "../components/PuntosCompraCard";
import YaguareteHeader from "../components/YaguareteHeader";
import { Dimensions } from "react-native";

function PuntosCompraPage(props) {
  return (
    <View style={styles.container}>
      <View style={styles.scrollArea}>
        <ScrollView
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <View style={styles.header}>
            <YaguareteHeader
              style={styles.yaguareteHeader}
              navigation={props.navigation}
            ></YaguareteHeader>
          </View>
          <PuntosCompraCard style={styles.puntosCompraCard}></PuntosCompraCard>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)",
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
  puntosCompraCard: {
    height: 1206,
    width: Dimensions.get("window").width,
    top: 0,
  },
  header: {
    width: Dimensions.get("window").width,
    height: 115,
    backgroundColor: "rgba(193,193,193,1)",
    marginTop: 0,
  },
  yaguareteHeader: {
    height: 115,
    width: Dimensions.get("window").width,
    backgroundColor: "rgba(193,193,193,1)",
  },
});

export default PuntosCompraPage;

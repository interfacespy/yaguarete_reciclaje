import React, { Component, useRef } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import PuntosCompraCard from "../components/PuntosCompraCard";
import YaguareteHeader from "../components/YaguareteHeader";
import { Dimensions } from "react-native";
import Footer from "../components/Footer";

function PuntosCompraPage(props) {
  var scrollRef = useRef(<ScrollView></ScrollView>);

  const onFabPress = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.margenSeguridad}></View>
      <View style={styles.scrollArea}>
        <ScrollView
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
          ref={scrollRef}
        >
          <View style={styles.header}>
            <YaguareteHeader
              style={styles.yaguareteHeader}
              navigation={props.navigation}
            ></YaguareteHeader>
          </View>
          <PuntosCompraCard
            style={styles.puntosCompraCard}
            onPress={onFabPress}
          ></PuntosCompraCard>
          <Footer></Footer>
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
    width: Dimensions.get("window").width,
    marginBottom: 10,
  },
  margenSeguridad: {
    height: "3%",
    backgroundColor: "rgba(255,255,255,1)",
  },
  header: {
    width: Dimensions.get("window").width,
    height: 100,
    backgroundColor: "#c60021",
  },
  yaguareteHeader: {
    height: 100,
    width: Dimensions.get("window").width,
    backgroundColor: "#c60021",
  },
});

export default PuntosCompraPage;

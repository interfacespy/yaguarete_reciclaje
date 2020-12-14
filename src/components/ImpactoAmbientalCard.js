import React, { Component } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";

function ImpactoAmbientalCard(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.tittleContent}>
        <Text style={styles.tittleStyle}>
          Total recolectado en el año 2019: 82.500 toneladas.
        </Text>
        <Text style={styles.subtitleStyle}>
          A través de la gestión de Yaguarete Reciclaje, en el año 2019 se evitó
          la tala de 1.155.000 árboles, un ahorro de más 1.650 millones de
          litros de agua y se evitó la emisión de más 74 millones de kilos de
          CO2 y la utilización de 165.000 m³ en vertederos.
        </Text>
        <Text style={styles.tittleStyle}>
          Total recolectado en el año 2018: 69.072 toneladas.
        </Text>
        <Text style={styles.subtitleStyle}>
          A través de la gestión de Yaguarete Reciclaje, en el año 2018 se evitó
          la tala de 967.008 árboles, un ahorro de más 1.381 millones de litros
          de agua y se evitó la emisión de más 62 millones de kilos de CO2 y la
          utilización de 138.144 m³ en vertederos.
        </Text>
        <Text style={styles.tittleStyle}>
          Total recolectado en el año 2017: 66.028 toneladas.
        </Text>
        <Text style={styles.subtitleStyle}>
          A través de la gestión de Yaguarete Reciclaje, en el año 2017 se evitó
          la tala de 924.392 árboles, un ahorro de más 1.320 millones de litros
          de agua y se evitó la emisión de más 59 millones de kilos de CO2 y la
          utilización de 132.056 m³ en vertederos.
        </Text>
        <Text style={styles.tittleStyle}>
          Total recolectado en el año 2016: 49.108 toneladas.
        </Text>
        <Text style={styles.subtitleStyle}>
          A través de la gestión de Yaguarete Reciclaje, en el año 2016 se evitó
          la tala de 687.512 árboles, un ahorro de más 982 millones de litros de
          agua y se evitó la emisión de más 44 millones de kilos de CO2 y la
          utilización de 98.216 m³ en vertederos.
        </Text>
        <Text style={styles.tittleStyle}>
          Total recolectado en el año 2015: 51.277 toneladas.
        </Text>
        <Text style={styles.subtitleStyle}>
          A través de la gestión de Yaguarete Reciclaje, en el año 2015 se evitó
          la tala de 717.878 árboles, un ahorro de más 1.025 millones de litros
          de agua y se evitó la emisión de más 46 millones de kilos de CO2 y la
          utilización de 102.554 m³ en vertederos.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#c60021",
    overflow: "hidden",
    flex: 1,
  },
  tittleContent: {
    padding: 15,
    flex: 1,
  },
  tittleStyle: {
    fontFamily: "open-sans-700",
    fontSize: 14,
    color: "#FFF",
    paddingBottom: 12,
  },
  subtitleStyle: {
    fontFamily: "open-sans-regular",
    fontSize: 14,
    color: "#FFF",
    lineHeight: 16,
    width: Dimensions.get("window").width - 40,
    textAlign: "justify",
  },
});

export default ImpactoAmbientalCard;

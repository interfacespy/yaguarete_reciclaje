import React, { Component } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";

function ImpactoSocialCard2(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.tittleContent}>
        <Text style={styles.subtitleStyle}>
          Además a través de alianzas estratégicas con entes públicos y empresas
          privadas, la empresa apoya la generación de negocios inclusivos, a
          través del trabajo con las Asociaciones de Recicladores, donación de
          motocarros a pequeños recicladores, créditos para capital operativo,
          además de ayudarlos en su proceso de formalización.{"\n"}
          {"\n"}Aún queda un largo camino por recorrer en el campo de la
          concientización y educación sobre la importancia del reciclaje y el
          impacto en el medio Ambiente, tarea que Yaguarete Reciclaje la encara
          a través de sus programas de responsabilidad social.
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
  subtitleStyle: {
    fontFamily: "open-sans-regular",
    fontSize: 14,
    color: "#FFF",
    lineHeight: 16,
    width: Dimensions.get("window").width - 40,
    textAlign: "justify",
  },
});

export default ImpactoSocialCard2;

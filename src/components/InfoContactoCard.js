import React, { Component } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";

function InfoContactoCard(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.tittleContent}>
        <Text style={styles.titleStyle}>Línea Gratuita: 0800 110 801</Text>
        <Text style={styles.oficinaAdministrativa}>Oficina Administrativa</Text>
        <Text style={styles.subtitleStyle}>
          Asunción: Avda. España N°303 c/ Sacramento.
        </Text>
        <Text style={styles.subtitleStyle}>Tel.: +595 21 659 9000</Text>
        <Text style={styles.subtitleStyle}>Teléfono: +595 21 229 776</Text>
        <Text style={styles.subTitulos}>rse@cysa.com.py</Text>
        <Text style={styles.subtitleStyle}>
          Contacta con nosotros para acceder los programas de Responsabilidad
          Social y Ambiental de Yaguarete Reciclaje.
        </Text>
        <Text style={styles.subTitulos}>busquedas@cysa.com.py</Text>
        <Text style={styles.subtitleStyle}>
          Si deseas formar parte de la empresa, envíanos tu CV actualizado.
        </Text>
        <Text style={styles.subTitulos}>sugerenciasyreclamos@cysa.com.py</Text>

        <Text style={styles.subtitleStyle}>
          Cartones Yaguarete y sus empresas Asociadas, en el proceso de la
          mejora continua y de brindar un mejor servicio, pone a disposición el
          Sistema de &quot;SUGERENCIAS Y RECLAMOS&quot;.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(193,193,193,1)",
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
    color: "rgba(54,62,63,1)",
    lineHeight: 16,
    width: Dimensions.get("window").width - 40,
    textAlign: "justify",
  },
  titleStyle: {
    fontFamily: "open-sans-700",
    fontSize: 22,
    color: "rgba(198,0,33,1)",
    paddingBottom: 12,
  },
  oficinaAdministrativa: {
    fontFamily: "open-sans-700",
    color: "rgba(54,62,63,1)",
    lineHeight: 16,
    width: Dimensions.get("window").width - 40,
    textAlign: "justify",
  },
  subTitulos: {
    fontFamily: "open-sans-700",
    color: "rgba(198,0,33,1)",
    lineHeight: 16,
    width: Dimensions.get("window").width - 40,
    textAlign: "justify",
    paddingTop: 15,
  },
});

export default InfoContactoCard;

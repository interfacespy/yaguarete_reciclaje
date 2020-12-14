import React, { Component } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import TxtNombreContacto from "./TxtNombreContacto";
import TxtEmpresaContacto from "./TxtEmpresaContacto";
import TxtEmailContacto from "./TxtEmailContacto";
import TxtTelefonoContacto from "./TxtTelefonoContacto";
import TxtMensajeContacto from "./TxtMensajeContacto";
import BtnEnviar from "./BtnEnviar";

function FormContacto(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TxtNombreContacto style={styles.txtInput}></TxtNombreContacto>
      <TxtEmpresaContacto style={styles.txtInput}></TxtEmpresaContacto>
      <TxtEmailContacto style={styles.txtInput}></TxtEmailContacto>
      <TxtTelefonoContacto style={styles.txtInput}></TxtTelefonoContacto>
      <TxtMensajeContacto style={styles.txtMensaje}></TxtMensajeContacto>
      <BtnEnviar style={styles.btnEnviar}></BtnEnviar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,1)",
    overflow: "hidden",
    flex: 1,
    borderRadius: 2,
  },
  txtInput: {
    height: 40,
    width: Dimensions.get("window").width - 40,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#c60021",
    marginTop: 20,
    alignSelf: "center",
  },
  txtMensaje: {
    height: 120,
    width: Dimensions.get("window").width - 40,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#c60021",
    marginTop: 20,
    alignSelf: "center",
  },
  btnEnviar: {
    height: 40,
    width: 100,
    marginTop: 40,
    alignSelf: "center",
  },
});

export default FormContacto;

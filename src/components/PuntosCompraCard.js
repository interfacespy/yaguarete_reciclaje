import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
} from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import configData from "../../config.json";

const Asuncion = {
  latitude: -25.2819,
  longitude: -57.6352516,
  latitudeDelta: 0.8,
  longitudeDelta: 0.8,
};

function PuntosCompraCard(props) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    var url = configData.SERVER_URL + "/backend_api/get_res_partners";
    console.log(url);
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const [region, setRegion] = useState(Asuncion);

  var _onPressRegion = (x) => {
    setRegion(x);
    props.onPress();
  };
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.tittleContent}>
        <Text style={styles.puntosDeCompra}>PUNTOS DE COMPRAS</Text>
        <Text style={styles.subtitleStyle}>
          Yaguarete Reciclaje cuenta con una red de puntos de compra de papel y
          cartón a nivel nacional. Acércate a nuestros Centros de Acopio, donde
          compramos tus papeles y cartones en desuso!!!
        </Text>
      </View>
      <View style={styles.bodyContent1}>
        <View style={styles.puntosCompraMap}>
          <MapView style={styles.puntosCompraMap} region={region}>
            {data.map((val, index) => {
              return (
                <MapView.Marker
                  coordinate={{
                    latitude: val.latitud,
                    longitude: val.longitud,
                  }}
                  key={val.id}
                  title={val.name}
                />
              );
            })}
          </MapView>
        </View>
        <View style={{ flex: 1, padding: 24 }}>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <View>
              {data.map((val, index) => {
                return (
                  <TouchableOpacity
                    key={val.id}
                    style={styles.card}
                    onPress={() =>
                      _onPressRegion({
                        latitude: val.latitud,
                        longitude: val.longitud,
                        latitudeDelta: 0.02,
                        longitudeDelta: 0.02,
                      })
                    }
                  >
                    <View style={styles.bodyContent}>
                      <Text style={styles.tittle}>{val.name}</Text>
                      <Text style={styles.subtitleHere}>{val.street}</Text>
                    </View>
                    <Image
                      source={require("../assets/images/marker-white.png")}
                      resizeMode="contain"
                      style={styles.image}
                    ></Image>
                  </TouchableOpacity>
                );
              })}
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    overflow: "hidden",
    flex: 1,
  },
  tittleContent: {
    padding: 15,
    flex: 1,
  },
  bodyContent1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  puntosDeCompra: {
    fontFamily: "open-sans-700",
    fontSize: 24,
    color: "#c60021",
    paddingBottom: 12,
    textAlign: "center",
    alignItems: "center",
  },
  subtitleStyle: {
    fontFamily: "open-sans-regular",
    fontSize: 14,
    color: "rgba(54,62,63,1)",
    lineHeight: 16,
    width: Dimensions.get("window").width - 40,
    textAlign: "justify",
  },
  puntosCompraMap: {
    width: Dimensions.get("window").width - 40,
    height: 300,
  },
  card: {
    width: Dimensions.get("window").width - 40,
    margin: 10,
    marginBottom: 0,
  },
  bodyContent: {
    padding: 16,
    paddingTop: 24,
    justifyContent: "center",
    backgroundColor: "#c60021",
  },
  tittle: {
    fontFamily: "open-sans-700",
    fontSize: 22,
    color: "rgba(255,255,255,1)",
    paddingBottom: 12,
    marginLeft: 45,
  },
  subtitleHere: {
    fontFamily: "open-sans-regular",
    fontSize: 14,
    color: "rgba(255,255,255,1)",
    lineHeight: 16,
  },
  image: {
    top: -1,
    left: 17,
    width: 34,
    height: 74,
    position: "absolute",
  },
});

export default PuntosCompraCard;

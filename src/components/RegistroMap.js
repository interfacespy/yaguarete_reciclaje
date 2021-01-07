import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

export default class RegistroMap extends React.Component {
  constructor(props) {
    super(props);
  }

  gotToMyLocation() {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        if (this.map) {
          this.props.setLatitude(coords.latitude);
          this.props.setLongitude(coords.longitude);
          this.map.animateToRegion({
            latitude: coords.latitude,
            longitude: coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          });
        }
      },
      (error) => alert("Error: Está la ubicación activada?"),
      { enableHighAccuracy: true }
    );
  }

  render() {
    return (
      <View style={styles.containerMap}>
        <View style={styles.puntosCompraMap}>
          <MapView
            ref={(map) => {
              this.map = map;
            }}
            showsUserLocation={true}
            showsMyLocationButton={true}
            style={{ flex: 1 }}
            provider={PROVIDER_GOOGLE}
            showsUserLocation
            initialRegion={{
              latitude: -25.2819,
              longitude: -57.5202516,
              latitudeDelta: 0.2,
              longitudeDelta: 0.2,
            }}
          />
        </View>
        <View style={{ borderRadius: 10 }}>
          <TouchableOpacity
            onPress={this.gotToMyLocation.bind(this)}
            style={{
              height: 40,
              width: Dimensions.get("window").width - 40,
              backgroundColor: "#FFF",
              borderRadius: 10,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.35,
              shadowRadius: 5,
            }}
          >
            <Text style={styles.inputStyle}>
              Pulsame para obtener tu ubicacion
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  puntosCompraMap: {
    width: Dimensions.get("window").width - 40,
    height: 300,
  },
  containerMap: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    top: 10,
    marginBottom: 20,
  },
  inputStyle: {
    color: "#c60021",
    paddingRight: 5,
    fontSize: 16,
    alignSelf: "stretch",
    flex: 1,
    lineHeight: 16,
    paddingTop: 14,
    paddingBottom: 8,
    paddingLeft: 30,
  },
});

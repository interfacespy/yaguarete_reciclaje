import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

export default class App extends React.Component {
  gotToMyLocation() {
    console.log("gotToMyLocation is called");
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        console.log("curent location: ", coords);
        console.log(this.map);
        if (this.map) {
          console.log("curent location: ", coords);
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
      <View style={styles.container}>
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
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
        </View>
        <TouchableOpacity
          onPress={this.gotToMyLocation.bind(this)}
          style={{
            height: 40,
            width: Dimensions.get("window").width - 40,
            backgroundColor: "#c60021",
          }}
        >
          <Text style={styles.inputStyle}>Pulsame para saber tu ubicacion</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  puntosCompraMap: {
    width: Dimensions.get("window").width - 40,
    height: 300,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputStyle: {
    color: "#FFF",
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

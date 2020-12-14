import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Linking,
  TouchableOpacity,
} from "react-native";

function GrupoYaguareteCard(props) {
  var _handleKartontec = () => {
    Linking.openURL("/http://www.kartotec.com.py/es/");
  };
  var _handleYaguarete = () => {
    Linking.openURL("http://www.cysa.com.py/");
  };
  var _handleWeig = () => {
    Linking.openURL("https://www.weig-group.de/en/");
  };
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.imageRow}>
        <View>
          <TouchableOpacity onPress={_handleKartontec}>
            <Image
              source={require("../assets/images/Screenshot_from_2020-09-11_21-43-591.png")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
            <Image
              source={require("../assets/images/kartotec1.png")}
              resizeMode="contain"
              style={styles.kartotec}
            ></Image>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={_handleYaguarete}>
            <Image
              source={require("../assets/images/Screenshot_from_2020-09-11_21-46-381.png")}
              resizeMode="contain"
              style={styles.image2}
            ></Image>
            <Image
              source={require("../assets/images/yaguarete4.png")}
              resizeMode="contain"
              style={styles.yaguarete}
            ></Image>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={_handleWeig}>
            <Image
              source={require("../assets/images/Screenshot_from_2020-09-11_21-47-371.png")}
              resizeMode="contain"
              style={styles.image3}
            ></Image>
            <Image
              source={require("../assets/images/weig1.png")}
              resizeMode="contain"
              style={styles.weig}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 2,
    flexWrap: "nowrap",
    backgroundColor: "#FFF",
    overflow: "hidden",
    flexDirection: "row",
    flex: 1,
  },
  image: {
    width: 100,
    height: 100,
  },
  image2: {
    width: 100,
    height: 100,
    marginLeft: 10,
  },
  image3: {
    width: 100,
    height: 100,
    marginLeft: 10,
  },
  imageRow: {
    height: 100,
    flexDirection: "row",
    paddingTop: 40,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("window").width - 40,
  },
  kartotec: {
    top: 90,
    width: 75,
    height: 50,
    position: "absolute",
  },
  yaguarete: {
    top: 90,
    width: 70,
    height: 50,
    position: "absolute",
  },
  weig: {
    top: 90,
    width: 75,
    height: 50,
    position: "absolute",
  },
});

export default GrupoYaguareteCard;

import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

function VisionCard(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.bodyContent}>
        <Text style={styles.titleGoesHere}>Title goes here</Text>
        <Text style={styles.subtitleStyle}>Subtitle here</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.bodyText}>
          BuilderX is a screen design tool which codes React Native for you
          which design without boundaries, the code is generated simultaneously.
          Save your designed components as symbol and then simply add it to your
          design next time.Live preview works on real device. Shout out to the
          Expo team to make it happen.
        </Text>
      </View>
      <View style={styles.actionBody}>
        <TouchableOpacity style={styles.actionButton1}>
          <Text style={styles.actionText1}>ACTION 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton2}>
          <Text style={styles.actionText2}>ACTION 2</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,1)",
    overflow: "hidden",
    flex: 1,
  },
  tittleContent: {
    padding: 15,
    flex: 1,
  },
  historia: {
    fontFamily: "open-sans-700",
    fontSize: 24,
    color: "rgba(198,0,33,1)",
    paddingBottom: 12,
    textAlign: "center",
    alignSelf: "center",
  },
  subtitleStyle: {
    fontFamily: "open-sans-regular",
    fontSize: 14,
    color: "rgba(54,62,63,1)",
    lineHeight: 16,
    width: Dimensions.get("window").width - 40,
    textAlign: "justify",
  },

  image: {
    top: 250,
    left: 0,
    width: Dimensions.get("window").width,
    height: 255,
    position: "absolute",
    backgroundColor: "rgba(193,193,193,1)",
  },
});

export default VisionCard;

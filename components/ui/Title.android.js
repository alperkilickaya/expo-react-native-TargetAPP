import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import Colors from "../../constants/colors";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontFamily: "open-sans-bold",
    color: "white",
    textAlign: "center",
    //borderWidth: Platform.OS === "android" ? 2 : 0,
    //borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 8,
    maxWidth: "80%",
    width: 300,
    alignSelf: "center",
  },
});

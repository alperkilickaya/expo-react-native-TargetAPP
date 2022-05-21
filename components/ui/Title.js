import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontFamily: "open-sans-bold",
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 8,
    maxWidth: "80%",
    width: 300,
    alignSelf: "center",
  },
});

export default Title;

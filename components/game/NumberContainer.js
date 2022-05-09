import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 8,
    borderRadius: 10,
    margin: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontSize: 32,
    fontFamily: "open-sans-bold",
    fontWeight: "bold",
  },
});

export default NumberContainer;

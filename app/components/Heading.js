import React from "react";
import { Text, StyleSheet } from "react-native";

function Heading({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    fontWeight: "700",
    color: "#000",
    textTransform: "capitalize",
    textAlign: "center",
    lineHeight: 50,
  },
});

export default Heading;

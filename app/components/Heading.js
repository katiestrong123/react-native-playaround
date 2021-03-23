import React from "react";
import { Text, StyleSheet } from "react-native";

function Heading({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontStyle: "italic",
    fontWeight: "600",
    color: "pink",
    textTransform: "capitalize",
    textAlign: "center",
    lineHeight: 30,
  },
});

export default Heading;

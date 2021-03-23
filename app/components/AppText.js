import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
import colors from "../config/colors";

function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: colors.secondary,
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontWeight: 600,
        fontFamily: "Avenir",
      },
      android: {
        fontSize: 18,
        fontWeight: 600,
        fontFamily: "Roboto",
      },
    }),
  },
});

export default AppText;
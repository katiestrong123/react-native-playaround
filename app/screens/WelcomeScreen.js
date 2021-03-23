import React from "react";
import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";

// import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import Heading from "../components/Heading";

function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.bground}
      source={require("../assets/bground.jpeg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Heading>Sell what you don't need</Heading>
      </View>

      <View style={styles.login}>Login</View>
      <View style={styles.register}>Register</View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  bground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    height: 80,
    width: 80,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  login: {
    width: "80%",
    height: 40,
    backgroundColor: colors.primary,
    textAlign: "center",
    color: colors.white,
    borderRadius: "25px",
    marginBottom: 15,
    paddingTop: 10,
    textTransform: "uppercase",
    fontFamily: "Avenir",
    fontWeight: 600,
  },
  register: {
    width: "80%",
    height: 40,
    backgroundColor: colors.secondary,
    textAlign: "center",
    color: colors.white,
    borderRadius: "25px",
    marginBottom: 25,
    paddingTop: 10,
    textTransform: "uppercase",
    fontFamily: "Avenir",
    fontWeight: 600,
  },
});

export default WelcomeScreen;

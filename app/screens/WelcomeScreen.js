import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  Button,
} from "react-native";

function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.bground}
      source={require("../assets/bground.jpeg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.jpeg")} />
        <Text>Sell what you don't need</Text>
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
    height: 100,
    width: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  login: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  register: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
});

export default WelcomeScreen;

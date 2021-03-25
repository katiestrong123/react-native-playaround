import React from "react";
import { View, Image, StyleSheet, TouchableHighlight } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

function UserHeader(onPress) {
  return (
    <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={require("../assets/cass.png")} />
        <View style={styles.textContainer}>
          <AppText style={styles.title}>Cassia Briscoe</AppText>
          <AppText style={styles.subTitle}>cassia@gmail.com</AppText>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.white,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
    margin: 10,
  },
  title: {
    fontWeight: 600,
  },
  textContainer: {
    justifyContent: "center",
    marginLeft: 10,
  },
  subTitle: {
    color: colors.medium,
    fontWeight: 500,
  },
});
export default UserHeader;

import React from "react";
import { View, StyleSheet, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import AppText from "../components/AppText";

function LogOut(onPress) {
  return (
    <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="logout"
          size={32}
          color={colors.white}
          style={styles.icon}
        />
        <View>
          <AppText style={styles.title}>Log Out </AppText>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flexDirection: "row",
    padding: 10,
  },
  title: {
    marginLeft: 10,
    fontWeight: 600,
    marginTop: 10,
  },
  icon: {
    backgroundColor: colors.yellow,
    width: 40,
    padding: 4,
    paddingLeft: 2,
    justifyContent: "center",
    borderRadius: 22,
  },
});
export default LogOut;

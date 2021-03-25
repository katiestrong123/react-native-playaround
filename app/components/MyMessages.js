import React from "react";
import { View, StyleSheet, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import AppText from "../components/AppText";

function MyMessages(onPress) {
  return (
    <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="email"
          size={30}
          color={colors.white}
          style={styles.icon}
        />

        <View>
          <AppText style={styles.title}>My Messages</AppText>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
  },
  icon: {
    backgroundColor: colors.danger,
    width: 40,
    padding: 4,
    paddingLeft: 2,
    justifyContent: "center",
    borderRadius: 22,
  },
  title: {
    marginLeft: 10,
    fontWeight: 600,
    marginTop: 10,
  },
});

export default MyMessages;

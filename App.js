import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ItemScreen from "./app/screens/ItemScreen";
import AppText from "./app/components/AppText";
import Heading from "./app/components/Heading";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Heading>
        I love React Native. This is my first app, wudduya think?
      </Heading>

      <AppText>This is the app text</AppText>

      <View style={styles.icons}>
        <MaterialCommunityIcons
          style={styles.email}
          name="email"
          size={60}
          color="hotpink"
        />
        <MaterialCommunityIcons
          style={styles.insta}
          name="instagram"
          size={60}
          color="hotpink"
        />
        <MaterialCommunityIcons
          style={styles.twitter}
          name="twitter"
          size={60}
          color="hotpink"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  email: {
    position: "absolute",
    top: 10,
    left: 40,
  },
  insta: {
    position: "absolute",
    top: 10,
    left: -40,
  },
  twitter: {
    position: "absolute",
    top: 10,
    right: 50,
  },
});

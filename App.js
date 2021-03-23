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

      <MaterialCommunityIcons name="email" size={60} color="hotpink" />
      <MaterialCommunityIcons name="instagram" size={60} color="hotpink" />
      <MaterialCommunityIcons name="twitter" size={60} color="hotpink" />
    </View>
  );
}

import React from "react";
import { View, Text } from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ItemScreen from "./app/screens/ItemScreen";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontStyle: "italic",
          fontWeight: "600",
          color: "pink",
          textTransform: "capitalize",
          textAlign: "center",
          lineHeight: 30,
        }}
      >
        I love React Native. This is my first app, wudduya think?
      </Text>
    </View>
  );
}

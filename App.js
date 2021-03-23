import React from "react";
import { View } from "react-native";

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
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
          borderWidth: 10,
          borderColor: "pink",
          borderRadius: 50,
          shadowColor: "grey",
          shadowOffset: { width: 10, height: 10 },
          shadowOpacity: 1,
          shadowRadius: 10,
          padding: 25,
        }}
      >
        <View
          style={{
            backgroundColor: "gold",
            width: 30,
            height: 30,
          }}
        ></View>
      </View>
      <View>
        
      </View>
    </View>
  );
}

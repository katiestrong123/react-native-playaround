import React, { useState } from "react";
import { Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import AppTextInput from "./app/components/AppTextInput";

import Screen from "./app/components/Screen";

export default function App() {
  const [firstName, setFirstName] = useState("");

  return (
    <Screen>
      <Text>{firstName}</Text>
      <AppTextInput placeholder="Username" icon="email" />
    </Screen>
  );
}

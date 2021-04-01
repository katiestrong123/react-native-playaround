import React, { useState } from "react";
import { Text, Switch } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";

import Screen from "./app/components/Screen";

export default function App() {
  const [isNew, setIsNew] = useState(false);

  return (
    <Screen>
      <Switch value={isNew} onValueChange={(newValue) => setIsNew} />
      <AppPicker icon="apps" placeholder="Catergory" />
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>
  );
}

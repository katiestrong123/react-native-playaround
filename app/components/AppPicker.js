import React, { useState } from "react";
import { View, StyleSheet, Modal, Button } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import defaultStyles from "../config/styles";
import AppText from "./AppText";
import Screen from "./Screen";

function AppPicker({ icon, placeholder, ...otherProps }) {
  const [modalVisable, setModalVisable] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisable(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              sie={20}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>{placeholder}</AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            sie={20}
            color={defaultStyles.colors.medium}
            style={styles.icon}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visable={modalVisable} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisable(false)} />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    marginVertical: 10,
    padding: 15,
    width: "100%",
  },
  icon: {
    margin: 5,
  },
  text: {
    flex: 1,
  },
});

export default AppPicker;

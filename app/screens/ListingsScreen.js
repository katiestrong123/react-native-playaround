import React from "react";
import { View, StyleSheet } from "react-native";

import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
function ListingsScreen(title, subTitle, itemImage) {
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.listItem}>
          <Card
            title="Red jacket for sale!"
            subTitle="£100"
            itemImage={require("../assets/redJacket.jpeg")}
          />
        </View>
        <View style={styles.listItem}>
          <Card
            title="Graphic basball cap"
            subTitle="£15"
            itemImage={require("../assets/hat.jpeg")}
          />
        </View>
        <View style={styles.listItem}>
          <Card
            title="Black bomber jacket"
            subTitle="£45"
            itemImage={require("../assets/bomber.jpeg")}
          />
        </View>
        {/* This will render all the list items */}
        {/* it will be with a screen view */}
        {/* The list items will be touchable components */}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    flex: 1,
  },
  listItem: {
    // margin: 10,
    borderRadius: 30,
    overflow: "hidden",
    backgroundColor: colors.white,
  },
});

export default ListingsScreen;

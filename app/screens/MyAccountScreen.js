import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import UserHeader from "../components/UserHeader";
import colors from "../config/colors";
import AppText from "../components/AppText";
import LogOut from "../components/LogOut";
import MyListings from "../components/MyListings";
import MyMessages from "../components/MyMessages";
import ListItemSeprator from "../components/ListItemSeprator";

function MyAccountScreen(props) {
  return (
    <Screen style={styles.container}>
      <View>
        <UserHeader />

        <MyListings />
        <ListItemSeprator />
        <MyMessages />
        {/* A button that directs the user to my listings  */}
        {/* <ListItemSeprator /> */}
        {/* There will be a button that directs the user to my messages  */}

        <LogOut />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    flex: 1,
  },
});

export default MyAccountScreen;

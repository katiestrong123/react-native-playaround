import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import Screen from "../components/Screen";
import colors from "../config/colors";
import AppText from "../components/AppText";
import ListItemSeprator from "../components/ListItemSeprator";
import ListItem from "../components/ListItem";
import Icon from "../components/Icon";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

function MyAccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Katie Strong"
          subTitle="katiestrong123@gmail.com"
          image={require("../assets/me.jpg")}
        />
      </View>

      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItems) => menuItems.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              ImageComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />

        <View>
          <ListItem
            title="Log Out"
            ImageComponent={<Icon name="logout" backgroundColor="#90a5a9" />}
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginVertical: 20,
    flex: 1,
  },
  screen: {
    backgroundColor: colors.light,
  },
});

export default MyAccountScreen;

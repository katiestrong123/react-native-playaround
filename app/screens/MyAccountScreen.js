import React from "react";
import { View } from "react-native";

import Screen from "../components/Screen";
import UserHeader from "../components/UserHeader";

function MyAccountScreen(props) {
  return (
    <Screen>
      <View>
        <UserHeader />

        {/* there will be a banner at the top on of the screen with user information inc icon, name and email */}
        {/* There will be a button that directs the user to my listings  */}
        {/* <ListItemSeprator /> */}
        {/* There will be a button that directs the user to my messages  */}
        {/* There will be a log out button  */}
        {/* this will all be within a grey screen view */}
      </View>
    </Screen>
  );
}

export default MyAccountScreen;

import React from "react";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ItemScreen from "./app/screens/ItemScreen";
import AppText from "./app/components/AppText";
// import AppText from "./app/components/AppText";
// import Heading from "./app/components/Heading";
import Card from "./app/components/Card";
import AppButton from "./app/components/AppButton";

export default function App() {
  return (
    // <WelcomeScreen />
    // <ItemScreen />
    <Card
      title={"Red Jacket for sale!"}
      subTitle={"£100"}
      userName={"Cassia Briscoe"}
      numberOfListings={5}
      itemImage={require("./app/assets/redJacket.jpeg")}
    />
  );
}

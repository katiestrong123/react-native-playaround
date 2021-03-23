import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

function Card({ children }) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <Image
            style={styles.image}
            source={require("../assets/redJacket.jpeg")}
          />
          <View style={styles.text}>
            <Text>Red Jacket for sale!</Text>
            <AppText>$100</AppText>
          </View>
        </View>
      </View>

      <View style={styles.user}>
        <Image
          style={styles.userImage}
          source={require("../assets/cass.png")}
        />
        <Text style={styles.userName}>Cassia Briscoe</Text>
        <Text style={styles.userListings}>5 Listings</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f4f4",
  },
  cardContainer: {
    borderRadius: "15px",
    backgroundColor: colors.white,
    margin: 20,
  },
  image: {
    borderRadius: "15px",
    height: 300,
    weight: 600,
  },
  text: {
    margin: 20,
  },
  user: {
    margin: 20,
  },
  userImage: {
    height: 50,
    width: 50,
    borderRadius: "90%",
  },
  userListings: {
    fontSize: 12,
    color: "grey",
    fontWeight: 300,
  },
  userName: {
    fontSize: 15,
    fontWeight: 600,
  },
});

export default Card;

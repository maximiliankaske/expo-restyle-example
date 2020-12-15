import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Card from "./src/components/Card";

export default function App() {
  return (
    <View style={styles.container}>
      <Card
        title={"mxkaske"}
        subtitle={"my very first blog post"}
        date={"15. December 2020"}
        imgSrc={require("./assets/max-profile.jpg")}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

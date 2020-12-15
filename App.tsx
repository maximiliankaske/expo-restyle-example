import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import Card from "./src/components/Card";
import { Box, ThemeProvider } from "./src/components/Theme";

export default function App() {
  return (
    <ThemeProvider>
      <Box
        flex={1}
        backgroundColor="mainBackground"
        alignItems="center"
        justifyContent="center"
      >
        <Card
          title={"mxkaske"}
          subtitle={"my very first blog post"}
          date={"15. December 2020"}
          imgSrc={require("./assets/max-profile.jpg")}
        />
        <StatusBar style="auto" />
      </Box>
    </ThemeProvider>
  );
}

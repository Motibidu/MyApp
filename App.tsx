import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import TitleBar from "./TitleBar";
import Screen from "./Screen";
import Keyboard from "./Keyboard";

export default function App() {
  // const [isLoading, setState] = useState(true);

  return (
    <View style={styles.container}>
      <StatusBar />
      <TitleBar />
      <Screen />
      <Keyboard />
      {/* <StatusBar hidden={false} backgroundColor="white" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginTop: getStatusBarHeight() + 15,
    backgroundColor: "#bdc3c7",
  },
});

import React from "react";
import { View, Image, StyleSheet } from "react-native";

export default function Loading() {
  return (
    <View style={StyleSheet.container}>
      <Image source={require("./imgs/Loading.jpg")}></Image>
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

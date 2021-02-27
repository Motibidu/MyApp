import React from "react";
import { StyleSheet, Text, View } from "react-native";

// console.log("상태바 높이", getStatusBarHeight());

export default function TitleBar() {
  return (
    <View style={styles.TitleBar}>
      <Text style={styles.TitleBarText}>일반 계산기</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  TitleBar: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#34495e",
    width: "100%",
  },
  TitleBarText: {
    textAlign: "right",
    color: "white",
  },
});

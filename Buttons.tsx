import React from "react";
import { Text, View, StyleSheet } from "react-native";
//C, (), % ÷, 7, 8, 9, x, 4,5,6, -, 1, 2, 3, + , 0, 00, . =
export default function Buttons() {
  return (
    <View style={styles.Buttons}>
      <Text>Buttons</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  Buttons: {
    flex: 9,
    alignItems: "center",
    justifyContent: "center",
  },
});

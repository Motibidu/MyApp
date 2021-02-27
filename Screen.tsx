import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Screen() {
  return (
    <View style={styles.Screen}>
      <TextInput style={styles.ScreenText} showSoftInputOnFocus={false}>
        None
      </TextInput>
      <TextInput style={styles.ResultText} showSoftInputOnFocus={false}>
        Results
      </TextInput>
      <View style={styles.WindowBelow}>
        <TouchableOpacity style={styles.Button} onPress={() => {}}>
          <Text style={styles.ButtonText}>⋯ </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Button} onPress={() => {}}>
          <Text style={styles.ButtonText}>^ </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Button} onPress={() => {}}>
          <Text style={styles.ButtonText}> </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Button} onPress={() => {}}>
          <Text style={styles.ButtonText}>(</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Screen: {
    flex: 5,
    backgroundColor: "white",
    width: "98%",
    marginTop: 5,
  },
  ScreenText: {
    flex: 4,
    textAlign: "right",
    fontSize: 60,
    marginRight: 10,
    marginTop: 8,
  },
  ResultText: {
    flex: 2,
    textAlign: "right",
    fontSize: 28,
    color: "#bdc3c7",
    marginRight: 10,
    marginTop: 8,
  },
  WindowBelow: {
    flex: 2,
    flexDirection: "row",
  },
  Button: {
    backgroundColor: "white",
    flex: 2,
    justifyContent: "space-around",
    margin: 2,
  },
  ButtonText: {
    fontSize: 28,
    color: "#3742fa",
    fontWeight: "900",
    textAlign: "center",
  },
});

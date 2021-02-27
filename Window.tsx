import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import FlatButton from "./FlatButton";

export default function Window() {
  return (
    <View style={styles.Window}>
      <TextInput style={styles.WindowText} showSoftInputOnFocus={false}>
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
  Window: {
    flex: 5,
    backgroundColor: "white",
    width: "98%",
    marginTop: 5,
  },
  WindowText: {
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

import React from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  FlatList,
  Text,
} from "react-native";
//C, (), % ÷, 7, 8, 9, x, 4,5,6, -, 1, 2, 3, + , 0, 00, . =

const dataList: any[] = [
  { key: "C" },
  { key: "()" },
  { key: "%" },
  { key: "÷" },
  { key: "7" },
  { key: "8" },
  { key: "9" },
  { key: "x" },
  { key: "4" },
  { key: "5" },
  { key: "6" },
  { key: "-" },
  { key: "1" },
  { key: "2" },
  { key: "3" },
  { key: "+" },
  { key: "0" },
  { key: "00" },
  { key: "." },
  { key: "=" },
];

type Props = {
  item: any;
  text: string;
};

export default function Keyboard() {
  const numColumns = 4;

  return (
    <View style={styles.Keyboard}>
      <FlatList
        data={dataList}
        horizontal={false}
        keyExtractor={(_, text) => text.toString()}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.Key}>
              <Text style={styles.KeyText}>{item.key}</Text>
            </TouchableOpacity>
          );
        }}
        numColumns={numColumns}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  Keyboard: {
    flex: 9,
    width: "98%",
    margin: 5,
  },
  Key: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    margin: 2,
    height: 70,
  },
  KeyText: {
    fontSize: 28,
    color: "#3742fa",
    fontWeight: "900",
    textAlign: "center",
  },
});

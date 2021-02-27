import React from "react";
import { Button } from "react-native";

type buttonProps = {
  text: string;
  onPress: () => void;
};

export default function FlatButton({ text, onPress }: buttonProps) {
  return <Button title={text} onPress={() => onPress} />;
}

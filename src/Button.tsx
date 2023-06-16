import React from "react";
import { TouchableOpacity, Text } from "react-native";

type ButtonProps = {
  label: string;
  onClick: () => void;
};

export default function Button(props: ButtonProps) {
  return (
    <TouchableOpacity onPress={props.onClick}>
      <Text>{props.label}</Text>
    </TouchableOpacity>
  );
}

import React from "react";
import { View, Text } from "react-native";

// Define the type for the props that the component receives
type DisplayLapProps = {
  laps: number[];
};

export default function DisplayLap(props: DisplayLapProps) {
  return (
    <View>
      {/* Map through the laps array and render each lap time */}
      {props.laps.map((lap, index) => (
        <Text key={index}>{lap / 1000} seconds</Text>
      ))}
    </View>
  );
}

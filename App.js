import { useState } from "react";
import { View } from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        alignContent: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          right: 20,
          top: 20,
          position: "relative",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
        }}
      />
    </View>
  );
}

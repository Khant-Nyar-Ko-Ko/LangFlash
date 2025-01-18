import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GameScore = ({ score }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Score</Text>
      <Text style={styles.score}>{score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    color: "#888",
  },
  score: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#4caf50",
  },
});

export default GameScore;

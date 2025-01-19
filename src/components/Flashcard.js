import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // For the mic icon

const Flashcard = ({ word, translation, onFlip }) => {
  const [flipped, setFlipped] = useState(false);

  const handleMicPress = () => {
    // Placeholder function for microphone functionality
    console.log("Mic button pressed! Start speech recognition here.");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.card}
        onPress={() => {
          setFlipped(!flipped);
          onFlip && onFlip();
        }}
      >
        <Text style={styles.text}>{flipped ? translation : word}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.micButton} onPress={handleMicPress}>
        <Ionicons name="mic" size={24} color="#fff" />
        <Text style={styles.micText}>Speak</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#A82028",
    borderRadius: 15,
    padding: 25,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
    height: 220,
    marginVertical: 15,
  },
  text: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    fontFamily: "Roboto",
  },
  micButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4CAF50", // Green button color
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  micText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Flashcard;

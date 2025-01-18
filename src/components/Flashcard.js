import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Flashcard = ({ word, translation, onFlip }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        setFlipped(!flipped);
        onFlip && onFlip();
      }}
    >
      <Text style={styles.text}>{flipped ? translation : word}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    card: {
      backgroundColor: "#A82028", // Vibrant yellow background
      borderRadius: 15, // Rounded corners
      padding: 25,
      shadowColor: "#000",
      shadowOpacity: 0.2,
      shadowRadius: 10,
      elevation: 5,
      alignItems: "center",
      justifyContent: "center",
      height: 220, // Increased card height for better visibility
      marginVertical: 15,
    },
    text: {
      fontSize: 28, // Slightly larger text for better readability
      fontWeight: "bold",
      color: "#fff", // Darker text color for contrast
      textAlign: "center",
      fontFamily: "Roboto", // Smooth font choice
    },
  });

export default Flashcard;

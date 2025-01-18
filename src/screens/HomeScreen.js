import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>LangFlash</Text>
        <Text style={styles.subtitle}>
          Master languages with flashcards and fun!
        </Text>
        <TouchableOpacity
          style={[styles.button, styles.startButton]}
          onPress={() => navigation.navigate("FlashcardScreen")}
        >
          <Text style={styles.buttonText}>Start Learning</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.leaderboardButton]}
          onPress={() => navigation.navigate("LeaderboardScreen")}
        >
          <Text style={styles.buttonText}>View Leaderboard</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#C89768", // Bright yellow background
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#FFEB3B", // Green text for contrast
    marginBottom: 10,
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  subtitle: {
    fontSize: 18,
    color: "#444", // Darker text for readability
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    width: "80%",
  },
  startButton: {
    backgroundColor: "#4caf50",
  },
  leaderboardButton: {
    backgroundColor: "#2196f3",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default HomeScreen;

import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";

// Dummy data for leaderboard
const leaderboardData = [
  { id: "1", name: "Alice", score: 1200, avatar: "https://i.pravatar.cc/150?img=1" },
  { id: "2", name: "Bob", score: 1100, avatar: "https://i.pravatar.cc/150?img=2" },
  { id: "3", name: "Charlie", score: 950, avatar: "https://i.pravatar.cc/150?img=3" },
  { id: "4", name: "Diana", score: 800, avatar: "https://i.pravatar.cc/150?img=4" },
  { id: "5", name: "Eve", score: 750, avatar: "https://i.pravatar.cc/150?img=5" },
];

const LeaderboardScreen = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  // Fetch leaderboard data (replace with API call in real app)
  useEffect(() => {
    setLeaderboard(leaderboardData);
  }, []);

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.row}>
        <Text style={[styles.rank, index === 0 && styles.rankFirst]}>
          {index + 1}
        </Text>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        <View style={styles.details}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.score}>Score: {item.score}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leaderboard</Text>
      <FlatList
        data={leaderboard}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C89768", // Light grey background for modern feel
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 30,
    fontFamily: "Arial", // Clean font choice
  },
  list: {
    paddingBottom: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
    marginBottom: 15,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 5,
    borderLeftWidth: 5,
    borderLeftColor: "#FF9800", // Highlighted left border for visual appeal
  },
  rank: {
    fontSize: 22,
    fontWeight: "bold",
    marginRight: 15,
    color: "#4caf50", // Green for rank number
  },
  rankFirst: {
    color: "#FFD700", // Gold color for the first place
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 27.5, // Perfect circle
    marginRight: 20,
  },
  details: {
    flex: 1
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  score: {
    fontSize: 15,
    color: "#777", // Lighter grey color for score text
  },
});

export default LeaderboardScreen;

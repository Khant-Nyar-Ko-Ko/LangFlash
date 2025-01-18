import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import FlashcardScreen from "./src/screens/FlashcardScreen";
import LeaderboardScreen from "./src/screens/LeaderboardScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#2D4159",  // Set the desired color here
          },
          headerTintColor: "#fff",  // Text color of the header
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="FlashcardScreen" component={FlashcardScreen} />
        <Stack.Screen name="LeaderboardScreen" component={LeaderboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

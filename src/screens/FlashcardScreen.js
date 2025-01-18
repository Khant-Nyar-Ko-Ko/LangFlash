import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Flashcard from "../components/Flashcard";
import ProgressBar from "../components/ProgressBar";
import GameScore from "../components/GameScore";

const FlashcardScreen = () => {
  const flashcards = [
    { word: "Hello", translation: "Hola" },
    { word: "Thank You", translation: "Gracias" },
    { word: "Good Morning", translation: "Buenos días" },
    { word: "Good Night", translation: "Buenas noches" },
    { word: "Please", translation: "Por favor" },
    { word: "Sorry", translation: "Lo siento" },
    { word: "Yes", translation: "Sí" },
    { word: "No", translation: "No" },
    { word: "Goodbye", translation: "Adiós" },
    { word: "Excuse me", translation: "Disculpe" },
    { word: "How are you?", translation: "¿Cómo estás?" },
    { word: "I'm fine", translation: "Estoy bien" },
    { word: "What is your name?", translation: "¿Cómo te llamas?" },
    { word: "My name is...", translation: "Me llamo..." },
    { word: "Where is the bathroom?", translation: "¿Dónde está el baño?" },
    { word: "I need help", translation: "Necesito ayuda" },
    { word: "How much does it cost?", translation: "¿Cuánto cuesta?" },
    { word: "I love you", translation: "Te quiero" },
  ];

  const [currentCard, setCurrentCard] = useState(0);
  const [score, setScore] = useState(0);

  const handleFlip = () => {
    setScore(score + 1); // Increment score on each flip
    setCurrentCard((prev) => (prev + 1) % flashcards.length);
  };

  return (
    <View style={styles.container}>
      <ProgressBar progress={(currentCard / flashcards.length) * 100} />
      <Flashcard
        word={flashcards[currentCard].word}
        translation={flashcards[currentCard].translation}
        onFlip={handleFlip}
      />
      <GameScore score={score} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF8E1", // Light pastel yellow background
  },
});

export default FlashcardScreen;

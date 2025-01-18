import Voice from "react-native-voice";

const startSpeechRecognition = (onResult, onError) => {
  Voice.onSpeechResults = onResult;
  Voice.onSpeechError = onError;
  Voice.start("en-US");
};

const stopSpeechRecognition = () => {
  Voice.stop();
};

export { startSpeechRecognition, stopSpeechRecognition };

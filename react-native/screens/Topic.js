import React, { useState } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function TopicScreen() {
  const introText = "Does this prompt get the creative juices flowing?";
  const [topic, setTopic] = useState([]);

  function nextRandom() {
    fetch('https://localhost:44363/WeddingWishesWS.asmx/GetRandomTopic', {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((json) => setTopic(json.d.Text))
      .catch((error) => console.error(error))
  }

  useFocusEffect(
    React.useCallback(() => { nextRandom() }, [])
  );

  return (
    <View style={styles.container}>
      <Text>{introText}</Text>
      <Text style={styles.textBox}>{topic}</Text>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? 'white'
              : '#F2E5FB'
          },
          styles.buttonStandard
        ]
        }
        onPress={nextRandom}
      >
        <Text style={styles.buttonStdText}>Try Another</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: '3%',
  },
  textBox: {
    width: '80%',
    textAlign: 'center',
    color: '#707070',
    fontWeight: 'bold',
    fontStyle: 'italic',
    margin: 12,
    padding: 10,
    borderWidth: 0,
    backgroundColor: 'white',
  },
  buttonStandard: {
    height: 40,
    width: '50%',
    maxWidth: 400,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 12,
    borderWidth: 1,
    borderColor: '#8349A7',
    padding: 10,
    borderRadius: 4,
  },
  buttonStdText: {
    color: '#6800A8',
    fontWeight: 'bold',
  },
});
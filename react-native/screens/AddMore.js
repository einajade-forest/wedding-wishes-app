import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Picker } from "@react-native-picker/picker";


function addTopicToApi(text) {
  return fetch('https://localhost:44363/WeddingWishesWS.asmx/AddTopic', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      text: text
    })
  })
}

function addQuoteToApi(text, source) {
  return fetch('https://localhost:44363/WeddingWishesWS.asmx/AddQuote', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      text: text,
      source: source
    })
  })
}

function addWineDescriptionToApi(text, source) {
  return fetch('https://localhost:44363/WeddingWishesWS.asmx/AddWineDescription', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      text: text,
      source: source
    })
  })
}


export default function AddScreen() {
  const [selectedCategory, setSelectedCategory] = useState('topic');
  const [textGeneral, setGeneral] = useState('');
  const [textSource, setSource] = useState('');
  const [isTopic, setVisibility] = useState(true);

  useEffect(() => {
    if (selectedCategory == 'topic') {
      setVisibility(true);
    } else {
      setVisibility(false);
    }
  });


  function onPressAddButton() {
    if (textGeneral !== '') {
      if (selectedCategory == 'topic') {
        addTopicToApi(textGeneral)
          .then((response) => alert("Success!\nNew topic added to database"))
          .then((response) => setGeneral(''))
          .catch((error) => {
            console.error(error);
          });
      }
      if (selectedCategory == 'quote') {
        if (textSource !== '') {
          addQuoteToApi(textGeneral, textSource)
            .then((response) => alert("Success!\nNew quote added to database"))
            .then((response) => setGeneral(''))
            .then((response) => setSource(''))
            .catch((error) => {
              console.error(error);
            });
        } else {
          alert("Source cannot be empty. If unknown, enter 'unknown' or 'anon'.")
        }

      }
      if (selectedCategory == 'wine') {
        if (textSource !== '') {
          addWineDescriptionToApi(textGeneral, textSource)
            .then((response) => alert("Success!\nNew wine description added to database"))
            .then((response) => setGeneral(''))
            .catch((error) => {
              console.error(error);
            });
        } else {
          alert("Source cannot be empty. If unknown, enter 'unknown' or 'anon'.")
        }
      }
    } else {
      alert("Inspiration cannot be saved - no text entered")
    }

  }

  return (
    <View style={styles.container}>
      <Text>
        For when inspiration strikes ahead of time...
      </Text>
      <Picker
        style={styles.pickerBox}
        selectedValue={selectedCategory}
        onValueChange={(itemValue) => {
          setSelectedCategory(itemValue);
        }}>
        <Picker.Item label="Topic" value="topic" />
        <Picker.Item label="Quote" value="quote" />
        <Picker.Item label="Wine Description" value="wine" />
      </Picker>

      <TextInput
        style={styles.inputGeneral}
        multiline
        onChangeText={setGeneral}
        value={textGeneral}
        placeholder="Body of text"
      />
      {
        isTopic ?
          null :
          <TextInput
            style={styles.inputSource}
            onChangeText={setSource}
            value={textSource}
            placeholder="Source of text"
          />
      }

      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? '#6800A8'
              : '#0F0F0F'
          },
          styles.buttonAdd
        ]
        }
        onPress={onPressAddButton}
      >
        <Text style={styles.buttonAddText}>Add</Text>
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
  pickerBox: {
    height: 40,
    width: '80%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  inputGeneral: {
    height: 100,
    width: '80%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  inputSource: {
    height: 40,
    width: '80%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  buttonAdd: {
    height: 40,
    width: '50%',
    maxWidth: 400,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
  },
  buttonAddText: {
    color: '#F2E5FB',
    fontWeight: 'bold',
  },
});
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.homeText}>
        A little help can go a long way when trying to think of something to pen in a wedding guestbook.
        {"\n"}
        {"\n"}
        Click the desired type of inspiration from the tab navigation bar below to begin.
        {"\n"}
        {"\n"}
        Add to the collections whenever you have something you want file away for next time!
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '3%',
  },
  homeText: {
    fontSize: 16,
    fontWeight: 'bold',
  }
});
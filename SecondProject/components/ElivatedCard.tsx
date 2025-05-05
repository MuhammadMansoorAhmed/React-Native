import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElivatedCard() {
  return (
    <View>
      <Text style={styles.HeadingText}>Elivated Card</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElivated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElivated]}>
          <Text>Me</Text>
        </View>
        <View style={[styles.card, styles.cardElivated]}>
          <Text>To</Text>
        </View>
        <View style={[styles.card, styles.cardElivated]}>
          <Text>Scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElivated]}>
          <Text>More</Text>
        </View>
        <View style={[styles.card, styles.cardElivated]}>
          <Text>😊</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  HeadingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    padding: 8,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    width: 100,
    height: 100,
    borderRadius: 4,
  },
  cardElivated: {
    backgroundColor: '#487EB0',
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
  },
});

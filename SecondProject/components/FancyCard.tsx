import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.HeadingText}>FancyCard</Text>
      <View style={[styles.card, styles.cardElivated]}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1494253109108-2e30c049369b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Blue Orange Agency</Text>
          <Text style={styles.cardLabel}>Creative Branding & Design</Text>
          <Text style={styles.cardDescription}>
            Blue Orange is a full-service branding agency specializing in modern
            design, marketing strategy, and user experience. Trusted by startups
            and global brands.
          </Text>
          <Text style={styles.carFooter}>
            Serving clients worldwide since 2015
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  HeadingText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  card: {
    width: '100%',
    height: 350,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  cardElivated: {
    backgroundColor: '#388888',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {},
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  cardLabel: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 6,
  },
  cardDescription: {
    color: '#ddeeff',
    fontSize: 12,
    flexShrink: 1,
    marginBottom: 12,
  },
  carFooter: {
    color: '#FFFFFF',
    fontSize: 12,
    marginBottom: 6,
  },
});

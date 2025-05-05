import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.HeadingText}>Blog Card</Text>
      <View style={[styles.card, styles.ElivatedCard]}>
        <View style={styles.HeadingContainer}>
          <Text style={styles.HeaderText}>
            What's New in Javascript 21 - ES12
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1667372393086-9d4001d51cf1?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text style={styles.bodyText} numberOfLines={3}>
            ES12 introduces several new features to JavaScript, including
            logical assignment operators, numeric separators, and Promise.any().
            These enhancements make your code cleaner, more readable, and more
            powerful.
          </Text>
          <Text style={styles.bodyText} numberOfLines={2}>
            Stay ahead of the curve and explore all the features ES12 has to
            offer in your next project.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://javascripttoday.com/blog/unveiling-the-collatz-conjecture-in-javascript/',
              )
            }>
            <Text style={styles.linkBtn}> Read More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 8,
  },
  HeadingText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  card: {
    width: 340,
    height: 450,
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
  },
  ElivatedCard: {
    backgroundColor: '#F5BCBA',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#38888833',
    shadowOpacity: 0.4,
  },
  HeadingContainer: {
    height: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  HeaderText: {
    fontSize: 16,
    fontWeight: '600',
  },
  cardImage: {
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    height: 250,
  },
  bodyContainer: {},
  bodyText: {
    marginBottom: 8,
  },
  footerContainer: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  linkBtn: {
    color: '#388888',
  },
});

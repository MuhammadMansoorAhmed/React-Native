import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contactList = [
    {
      uid: 1,
      name: 'Mansoor',
      phoneNumber: '+92 3111111111',
      imgUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      uid: 2,
      name: 'Ayesha',
      phoneNumber: '+92 3111111111',
      imgUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      uid: 3,
      name: 'Hamza',
      phoneNumber: '+92 3111111111',
      imgUrl: 'https://randomuser.me/api/portraits/men/85.jpg',
    },
    {
      uid: 4,
      name: 'Iqra',
      phoneNumber: '+92 3111111111',
      imgUrl: 'https://randomuser.me/api/portraits/women/65.jpg',
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.HeadingText}>Contact List</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contactList.map(({uid, name, phoneNumber, imgUrl}) => (
          <View key={uid} style={styles.userCard}>
            <Image source={{uri: imgUrl}} style={styles.userImage} />
            <View style={styles.userBody}>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userNumber}>{phoneNumber}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
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
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    backgroundColor: '#6A89CC',
    padding: 6,
    borderRadius: 8,
  },
  userImage: {
    height: 80,
    width: 80,
    borderRadius: 80 / 2,
    marginRight: 12,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
  },
  userNumber: {
    fontSize: 12,
  },
  userBody: {},
});

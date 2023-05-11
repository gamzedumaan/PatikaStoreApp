import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TextInput, Image } from 'react-native';

import Products from './components/Products';
import newsData from './data/news_data.json';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.text_Header_Container}>
        <Text style={styles.text_Header}>PATİKA STORE</Text>
      </View>
      <View style={styles.Input_Container}>
        <View style={styles.text_Input}>
          <TextInput style={styles.Input} placeholder="Ara .." placeholderTextColor="grey" />
        </View>
      </View>
      <View style={{ marginTop: 20 }}>
        <FlatList
          data={newsData}
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Products products={item} />}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text_Header_Container: {
    marginHorizontal: 20,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  text_Header: {
    fontSize: 25,
    fontWeight: '800',
    color: 'purple',
  },
  Input_Container: {
    marginHorizontal: 20,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  Input: {
    fontSize: 20,
    margin: 3,
    padding: 5,
  },
  text_Input: {
    height: 45,
    width: '90%',
    backgroundColor: '#D8D8D8',
    borderRadius: 10,
  },
});

import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

export default function Products({ products }) {

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: products.imgURL }} />
      <Text style={styles.title}>{products.title}</Text>
      <Text style={styles.price}>{products.price}</Text>
      {products.inStock === false && <Text style={styles.instock}>Stokta Yok</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    margin: 5,
    padding: 10,
    borderRadius: 10,
  },
  image: {
    borderRadius: 10,
    height: Dimensions.get('window').height / 4,
    margin: 5,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 17,
    color: 'black',
    marginTop: 20,
    fontWeight: '800',
    marginLeft: 7,
  },
  price: {
    margin: 10,
    fontWeight: 'bold',
    fontSize: 15,
  },
  instock: {
    color: 'red',
    fontSize: 18,
    margin: 5,
    fontWeight: 'bold',
  },
});

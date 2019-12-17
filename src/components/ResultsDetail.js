import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
        marginLeft: 15,
      marginBottom: 10
  },
  image: {
    width: 250,
    height: 150,
    borderRadius: 4
  },
  name: {
    fontWeight: 'bold'
  }
});

export default ResultsDetail;

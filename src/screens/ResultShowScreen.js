import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';
const ResultShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id');

  console.log(result);
  const getResult = async id => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }
  return (
    <View style={styles.viewBody}>
      <Text style={styles.header}>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
    margin: 10
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20,
    margin: 10
  },
  viewBody: {
    flex: 1
  }
});

export default ResultShowScreen;

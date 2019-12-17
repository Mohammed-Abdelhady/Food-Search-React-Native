import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';
const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, error] = useResults();

  const filterResultsByPrice = price => {
    // price === '$' || price === '$$' || price === '$$$'
    return results.filter(result => {
      return result.price === price;
    });
  };
  return (
    <View style={styles.scrollView}>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      <ScrollView>
        {/* <Text>We have found {results.length}</Text> */}
        <ResultList
          results={filterResultsByPrice('$')}
          title='Cost Effective'
        />
        <ResultList results={filterResultsByPrice('$$')} title='Bit Pricier' />
        <ResultList results={filterResultsByPrice('$$$')} title='Big Spender' />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1
  }
});

export default SearchScreen;

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from 'react-native';
import {withNavigation} from 'react-navigation'
import ResultsDetail from './ResultsDetail';

const ResultList = ({ title, results, navigation }) => {
  if (!results.length) {
    return null;
  }
  return (
    <View>
      <Text style={styles.headerStyle}>{title}</Text>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => { navigation.navigate('resultShow',{id: item.id}) }}>
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15
  }
});

export default withNavigation(ResultList);

// Imports
import React from 'react';
import { View, StyleSheet } from 'react-native';

// Screen Imports
import Lookup from '../../components/Lookup';

// Search component
const Search = ({ route }: any) => {
  return (
    <View style={styles.container}>
      <Lookup route={route} />
    </View>
  );
};

export default Search;

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

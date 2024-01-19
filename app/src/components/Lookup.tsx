import React, {useState} from 'react';
import {View, TextInput, Text, StyleSheet, Button} from 'react-native';

const Lookup = ({route}: any) => {
  // State for input value and search result
  const [username, setUsername] = useState('');
  const [searchResult, setSearchResult] = useState('');

  // Extracting screen from route params
  const screen = route.params.screen;

  // Function to handle search
  const handleSearch = () => {
    setSearchResult(`Search result for: ${username}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{screen} Lookup</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter username"
          onChangeText={setUsername}
        />
        <Button title="Search" onPress={handleSearch} />
      </View>
      {searchResult && <Text style={styles.result}>{searchResult}</Text>}
    </View>
  );
};

export default Lookup;

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  label: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    width: '80%',
    marginVertical: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333',
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    color: 'green',
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

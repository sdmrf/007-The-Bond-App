// Imports
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

// Component Imports
import Lookup from '../../components/Lookup';

// Features Import
import IpAddress from '../../utils/apiFeatures/IpAddress';
import PlatformsSearch from '../../utils/apiFeatures/PlatformsSearch';

// Search component
const Search = ({route}: any) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // Search
  const setSearch = async (search: string) => {
    const screen = route.params.screen;
    setLoading(true);

    try {
      if (screen === 'IPAddress') {
        const ipData = await IpAddress(search);
        setData([ipData]);
      } else if (screen === 'Platforms') {
        const platformData = await PlatformsSearch({username: search});
        setData(platformData);
      }
    } catch (error: any) {
      console.error('Error in setSearch:', error.message);
    } finally {
      setLoading(false);
    }
  };


  return (
    <View style={styles.container}>
      <Lookup route={route} setSearch={setSearch} />
      <View style={styles.resultContainer}>
        {loading ? (
          <ActivityIndicator size="large" color="green" />
        ) : (
          <ScrollView>
            {data.map((item: any, index: number) => (
              <View key={index} style={styles.result}>
                {Object.keys(item).map(key => (
                  <Text key={key} style={styles.info}>
                    {key}: {item[key]}
                  </Text>
                ))}
              </View>
            ))}
          </ScrollView>
        )}
      </View>
    </View>
  );
};

export default Search;

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  resultContainer: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 50,
  },
  result: {
    marginBottom: 50,
  },
  info: {
    fontSize: 18,
    color: 'green',
  },
});

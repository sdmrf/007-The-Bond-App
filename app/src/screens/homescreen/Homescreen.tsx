// Imports
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

// Constants
import { colors, icons } from '../../constants';

const Homescreen = () => {
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text  style={styles.title}>007 - The Bond</Text>
        <Image source={icons.menu} style={styles.menu} />
      </View>
      <Container />
      <Wrapper />
    </View>
  );
};

const Container = () => {
  return (
    <View style={styles.container}>
      <Text>Container</Text>
    </View>
  );
};

const Wrapper = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.circle} />
      <Text>Wrapper</Text>
    </View>
  );
};

// Dimensions
const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: colors.primary,
    height,
    width,
  },
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.secondary,
    height: height * 0.7,
    width,
    elevation: 50,
  },
  header: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    height,
    width,
  },
  circle: {
    width: width * (2 / 3),
    height: width * (2 / 3),
    borderRadius: width * (1 / 3),
    backgroundColor: colors.primary,
    position: 'absolute',
    top: -width * (1 / 3),
    
  },
  menu: {
    width: 30,
    height: 30,
    tintColor: colors.white,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
  },
});

export default Homescreen;

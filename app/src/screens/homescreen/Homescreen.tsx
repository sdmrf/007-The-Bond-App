// Imports
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

// Constants
import { colors } from '../../constants';

const Homescreen = () => {
  return (
    <View style={styles.main}>
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
  },
  circle: {
    width: width * (2 / 3),
    height: width * (2 / 3),
    borderRadius: width * (1 / 3),
    backgroundColor: colors.primary,
    position: 'absolute',
    top: -width * (1 / 3),
  },
});

export default Homescreen;

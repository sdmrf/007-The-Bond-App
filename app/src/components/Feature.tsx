// Imports
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

// Constants
import { colors, icons } from '../constants';

// Dimensions
const { width, height } = Dimensions.get('screen');

const Feature = ({ icon, label, onPress }: any) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.content}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.label}>{label}</Text>
      </View>
      <View style={styles.end}>
        <Image source={icons.rightArrow} style={styles.rightArrow} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.primary,
    height: height * 0.075,
    width: width * 0.8,
    borderRadius: 15,
    margin: 10,
    padding: 10,
    elevation: 50,
    gap: 10,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  icon: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
  },
  end: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    borderRadius: 25,
    borderColor: colors.secondary,
    padding: 5,
    gap: 10,
  },
  rightArrow: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
});

export default Feature;

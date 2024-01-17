// Imports
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

// Constants
import {colors} from '../../constants/'

const GetStarted = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>GetStarted</Text>
    </View>
  )
}

export default GetStarted

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  text : {
    color: colors.white,
    fontSize: 16,
  }
});
// Imports
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';


// Constants
import { colors, images } from '../../constants/';


// Dimensions
const { width, height } = Dimensions.get('screen');


const GetStarted = ({navigation} : any) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image source={images.mainImg} style={styles.image} />
        <Text style={styles.text}>Welcome to the 007-the-bond!</Text>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity onPress={() => navigation.navigate('TermsAndConditions')} style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    height,
    width,
  },
  top: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    height: height / 2,
    width,
  },
  bottom: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: height / 2,
    width,
  },
  text: {
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    width: 300,
    textShadowColor: colors.black,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    
  },
  image: {
    width: 225,
    height: 225,
  },
  button: {
    width: 200,
    height: 50,
    backgroundColor: colors.white,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

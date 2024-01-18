// Imports
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

// Components
import Feature from '../../components/Feature';

// Constants
import { colors, icons, images } from '../../constants';

const Homescreen = () => {
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.title}>007 - The Bond</Text>
        <Image source={icons.menu} style={styles.menu} />
      </View>
      <View style={styles.container} />
      <Wrapper />
    </View>
  );
};


const Wrapper = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.featurestxt}>Features</Text>
      <View style={styles.circle}>
        <Image source={images.mainImg} style={styles.mainImg} />
      </View>
      <View style={styles.featurescontainer}>
        <Feature icon={icons.instagram} label="Instagram Search" />
        {/* <Feature icon={icons.bike} label="Fitness" />
        <Feature icon={icons.dumbbell} label="Gym" />
        <Feature icon={icons.food} label="Food" />
        <Feature icon={icons.heart} label="Health" />
        <Feature icon={icons.bike} label="Fitness" />
        <Feature icon={icons.dumbbell} label="Gym" />
        <Feature icon={icons.food} label="Food" /> */}
      </View>
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
    alignItems: 'center',
    justifyContent: 'center',
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
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.white,
    zIndex: 1,
  },
  mainImg: {
    width: width * (1 / 2),
    height: width * (1 / 2),
    borderRadius: width * (1 / 4),
    backgroundColor: colors.secondary,
    borderWidth: 5,
    borderColor: colors.white,
  },
  featurestxt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.whiteSmoke,
    position: 'absolute',
    top: width * (1 / 3) - 10,
    left: 20,
    zIndex: 1,
  },
  featurescontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.whiteSmoke,
    height: height * 0.5,
    width: width * 0.9,
    borderRadius: 30,
    elevation: 50,
    marginTop: width * (1 / 2) - 50,
    padding: 10,
  },
});

export default Homescreen;

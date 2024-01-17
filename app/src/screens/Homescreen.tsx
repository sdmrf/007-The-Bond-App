// Imports
import { View, Text, Image } from 'react-native'
import React from 'react'

// File Imports
import { icons } from '../constants'


const Homescreen = () => {
  return (
    <View>
      <Image source={icons.instagram} />
    </View>
  )
}

export default Homescreen
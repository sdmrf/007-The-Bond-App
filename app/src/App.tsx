// Author: Sdmrf
import { Text, View } from 'react-native'
import React, { Component } from 'react'

// Screen Imports
import Homescreen from './screens/Homescreen'

export class App extends Component {
  render() {
    return (
      <View>
        <Text>App</Text>
        <Homescreen />
      </View>
    )
  }
}

export default App
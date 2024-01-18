// Imports
import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

// React Navigation Stack
const Stack = createNativeStackNavigator();

// Screen Imports
import HomeScreen from '../screens/homescreen/Homescreen';
import GetStarted from '../screens/getStarted/GetStarted';
import TermsAndConditions from '../screens/termsAndConditions/TermsAndConditions';

const StackArea = () => {
  const [accepted, setAccepted] = useState<boolean | null>(null);

  useEffect(() => {
    const checkTermsAccepted = async () => {
      try {
        const termsAccepted = await AsyncStorage.getItem('termsAccepted');
        setAccepted(termsAccepted === 'true');
      } catch (error) {
        console.error('Error retrieving data from AsyncStorage:', error);
        setAccepted(false);
      }
    };

    checkTermsAccepted();
  }, []);

  if (accepted === null) {
    return null;
  }

  return (
    <Stack.Navigator initialRouteName={accepted ? 'Home' : 'GetStarted'}>
      {!accepted && (
        <Stack.Screen
          name="TermsAndConditions"
          component={TermsAndConditions}
          options={{
            headerShown: false,
          }}
        />
      )}
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackArea;

// Imports
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// React Navigation Stack
const Stack = createNativeStackNavigator();

// Screen Imports
import HomeScreen from '../screens/homescreen/Homescreen';
import GetStarted from '../screens/getStarted/GetStarted';
import TermsAndConditions from '../screens/termsAndConditions/TermsAndConditions';

const StackArea = () => {
  return (
    <Stack.Navigator initialRouteName="TermsAndConditions">
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
      <Stack.Screen
        name="TermsAndConditions"
        component={TermsAndConditions}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackArea;

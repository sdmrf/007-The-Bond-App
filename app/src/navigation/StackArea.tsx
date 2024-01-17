// Imports
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// React Navigation Stack
const Stack = createNativeStackNavigator();

// Screen Imports
import HomeScreen from '../screens/homescreen/Homescreen';


const StackArea = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default StackArea;

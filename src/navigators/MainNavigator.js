import {DetailScreen} from '../screens/DetailScreen';
import {HomeScreen} from '../screens/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          headerShown: false,
          title: 'Home',
        }}
      />
      <Stack.Screen
        name="detail"
        component={DetailScreen}
        options={{
          title: 'Detail',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

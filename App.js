import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 
import LoginScreen from "./src/screens/LoginScreen";
import HomeScreen from "./src/screens/HomeScreen";
import CategoryScreen from './src/screens/CategoryScreen';
import ResoScreen from './src/screens/ResoScreen';
import ConfermaResoScreen from './src/screens/ConfermaResoScreen';
import CameraScreen from './src/screens/CameraScreen';
import MapScreen from './src/screens/MapScreen';
import LocationScreen from './src/screens/LocationScreen';
import { CartProvider } from './src/services/Carrello';
import CartScreen from './src/screens/CartScreen';

const RootStack = createStackNavigator();
 
const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
          <RootStack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
          <RootStack.Screen name="Category" component={CategoryScreen} options={{headerShown: false}} />
          <RootStack.Screen name="Reso" component={ResoScreen} options={{headerShown: false}} />
          <RootStack.Screen name="ConfermaReso" component={ConfermaResoScreen} options={{headerShown: false}} />
          <RootStack.Screen name="Camera" component={CameraScreen} options={{headerShown: false}} />
          <RootStack.Screen name="Map" component={MapScreen} options={{headerShown: false}} />
          <RootStack.Screen name="Location" component={LocationScreen} options={{headerShown: false}} />
          <RootStack.Screen name="Cart" component={CartScreen} options={{headerShown: false}} />
        </RootStack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};

export default App;
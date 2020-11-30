import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 
import LoginScreen from "./src/screens/LoginScreen";
import HomeScreen from "./src/screens/HomeScreen";
import SignUpScreen from './src/screens/SignUpScreen';
import ConfirmSignUpScreen from './src/screens/ConfirmSignUpScreen';
import RetrivePassw from './src/screens/RetrivePassw';
import ChangePassw from './src/screens/ChangePassw';
import MyProfile from './src/screens/MyProfileScreen';
import TermAndCondition from './src/screens/TermEConditionScreen';
const RootStack = createStackNavigator();
 
const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="SignUp" component={SignUpScreen} options={{headerShown: false}}/>
        <RootStack.Screen name="ConfirmSignUp" component={ConfirmSignUpScreen} options={{headerShown: false}}/>
        <RootStack.Screen name="RetrivePassw" component={RetrivePassw} options={{headerShown: false}}/>
        <RootStack.Screen name="ChangePassw" component={ChangePassw} options={{headerShown: false}}/>
        <RootStack.Screen name="MyProfile" component={MyProfile} options={{headerShown: false}}/>
        <RootStack.Screen name="TermAndCondition" component={TermAndCondition} options={{headerShown: false}}/>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
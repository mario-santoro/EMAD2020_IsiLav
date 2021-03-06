import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 
import LoginScreen from "./src/cliente/screens/LoginScreen";
import HomeScreen from "./src/cliente/screens/HomeScreen";
import SignUpScreen from './src/cliente/screens/SignUpScreen';
import ConfirmSignUpScreen from './src/cliente/screens/ConfirmSignUpScreen';
import RetrivePassw from './src/cliente/screens/RetrivePassw';
import ChangePassw from './src/cliente/screens/PasswordDimenticata';
import MyProfile from './src/cliente/screens/MyProfileScreen';
import TermAndCondition from './src/cliente/screens/TermEConditionScreen';
import ListaOrdini from './src/cliente/screens/ListaOrdiniScreen';
import ChangePassword2 from './src/cliente/screens/ChangePassword2';
import SuccessScreen from './src/cliente/screens/SuccessScreen';
import ChangeAnagrafica from './src/cliente/screens/ChangeAnagrafica';
import DettaglioProdotto from './src/cliente/screens/DettaglioProdotto';
import CategoryScreen from './src/cliente/screens/CategoryScreen';
import Giacenza from './src/cliente/screens/Giacenza';
import ChangePayMethod from './src/cliente/screens/ChangePayMethod';
import CartScreen from './src/cliente/screens/Cart';
import QrCode from './src/cliente/screens/QrCodeScreen';
import DettaglioOrdine from './src/cliente/screens/DettaglioOrdine';
import FAQ from './src/cliente/screens/FAQ';
import Reso from './src/cliente/screens/ResoScreen';
import ConfermaReso from './src/cliente/screens/ConfermaResoScreen';
import EffettuaOrdine from './src/cliente/screens/EffettuaOrdine';
import ModificaOrdine from './src/cliente/screens/ModificaOrdine';
import HomeCorriere from './src/corriere/screens/HomeCorriere';
import FAQCorriere from './src/corriere/screens/FAQCorriere';
import MyProfileCorriere from './src/corriere/screens/MyProfileCorriere';
import ChangeAnagraficaCorriere from './src/corriere/screens/ChangeAnagraficaCorriere';
import DettaglioPercorso from './src/corriere/screens/DettaglioPercorso';
import DettaglioFermata from './src/corriere/screens/DettaglioFermata';
import DettaglioCliente from './src/corriere/screens/DettaglioCliente';
import SuccessScreenCorriere from './src/corriere/screens/SuccessScreenCorriere';
import ChangePasswCorriere from './src/corriere/screens/ChangePasswCorriere';
import ScannerQR from './src/corriere/screens/ScannerQR';
import LocationScreen from './src/corriere/screens/LocationScreen';
import Map from './src/cliente/screens/MapScreen';
import SelectMap from './src/cliente/screens/SelectMap';
import PayOrdine from './src/cliente/screens/PayOrdine';
import { CartProvider } from './src/cliente/services/Carrello';
import { UserProvider } from './src/cliente/services/Utente';
import SearchScreen from './src/cliente/screens/SearchScreen';
const RootStack = createStackNavigator();
 
const App = () => {
  return (
    <UserProvider>
      <CartProvider>
        <NavigationContainer>
          <RootStack.Navigator>
            <RootStack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
            <RootStack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
            <RootStack.Screen name="SignUp" component={SignUpScreen} options={{headerShown: false}}/>
            <RootStack.Screen name="ConfirmSignUp" component={ConfirmSignUpScreen} options={{headerShown: false}}/>
            <RootStack.Screen name="RetrivePassw" component={RetrivePassw} options={{headerShown: false}}/>
            <RootStack.Screen name="ChangePassw" component={ChangePassw} options={{headerShown: false}}/>
            <RootStack.Screen name="MyProfile" component={MyProfile} options={{headerShown: false}}/>
            <RootStack.Screen name="TermAndCondition" component={TermAndCondition} options={{headerShown: false}}/>
            <RootStack.Screen name="ListaOrdini" component={ListaOrdini} options={{headerShown: false}}/>
            <RootStack.Screen name="ChangePassword2" component={ChangePassword2} options={{headerShown: false}}/>
            <RootStack.Screen name="SuccessScreen" component={SuccessScreen} options={{headerShown: false}}/>
            <RootStack.Screen name="ChangeAnagrafica" component={ChangeAnagrafica} options={{headerShown: false}}/>
            <RootStack.Screen name="DettaglioProdotto" component={DettaglioProdotto} options={{headerShown: false}}/>
            <RootStack.Screen name="Category" component={CategoryScreen} options={{headerShown: false}}/>
            <RootStack.Screen name="Giacenza" component={Giacenza} options={{headerShown: false}}/>
            <RootStack.Screen name="ChangePayMethod" component={ChangePayMethod} options={{headerShown: false}}/>
            <RootStack.Screen name="Cart" component={CartScreen} options={{headerShown: false}}/>
            <RootStack.Screen name="QrCode" component={QrCode} options={{headerShown: false}}/>
            <RootStack.Screen name="DettaglioOrdine" component={DettaglioOrdine} options={{headerShown: false}}/>
            <RootStack.Screen name="FAQ" component={FAQ} options={{headerShown: false}}/>
            <RootStack.Screen name="HomeCorriere" component={HomeCorriere} options={{headerShown: false}}/>
            <RootStack.Screen name="FAQCorriere" component={FAQCorriere} options={{headerShown: false}}/>
            <RootStack.Screen name="MyProfileCorriere" component={MyProfileCorriere} options={{headerShown: false}}/>
            <RootStack.Screen name="ChangeAnagraficaCorriere" component={ChangeAnagraficaCorriere} options={{headerShown: false}}/>
            <RootStack.Screen name="DettaglioPercorso" component={DettaglioPercorso} options={{headerShown: false}}/>
            <RootStack.Screen name="DettaglioFermata" component={DettaglioFermata} options={{headerShown: false}}/>
            <RootStack.Screen name="DettaglioCliente" component={DettaglioCliente} options={{headerShown: false}}/>
            <RootStack.Screen name="SuccessScreenCorriere" component={SuccessScreenCorriere} options={{headerShown: false}}/>
            <RootStack.Screen name="ChangePasswCorriere" component={ChangePasswCorriere} options={{headerShown: false}}/>
            <RootStack.Screen name="Reso" component={Reso} options={{headerShown: false}}/>
            <RootStack.Screen name="EffettuaOrdine" component={EffettuaOrdine} options={{headerShown: false}}/>
            <RootStack.Screen name="ConfermaReso" component={ConfermaReso} options={{headerShown: false}}/>
            <RootStack.Screen name="ModificaOrdine" component={ModificaOrdine} options={{headerShown: false}}/>
            <RootStack.Screen name="ScannerQR" component={ScannerQR} options={{headerShown: false}}/>
            <RootStack.Screen name="Map" component={Map} options={{headerShown: false}}/>      
            <RootStack.Screen name="SelectMap" component={SelectMap} options={{headerShown: false}}/>
            <RootStack.Screen name="PayOrdine" component={PayOrdine} options={{headerShown: false}}/>
            <RootStack.Screen name="Location" component={LocationScreen} options={{headerShown: false}}/>
            <RootStack.Screen name="Search" component={SearchScreen} options={{headerShown: false}}/>
          </RootStack.Navigator>
        </NavigationContainer>
      </CartProvider>
    </UserProvider>
  );
};

export default App;
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';

import store from './src/redux';
import Routes from './src/routes';

export default function App() {

  let [fontsLoaded] = useFonts({
    BebasNeue_400Regular,
  });


  if(!fontsLoaded) {
    return (
      <AppLoading/>
    )
  } else {
    return (
      <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Routes />
          <StatusBar
          backgroundColor={'#00000000'}
          style={'dark'}>
          </StatusBar>
        </SafeAreaProvider>
        </NavigationContainer>
      </Provider>
      );
  }

  
}

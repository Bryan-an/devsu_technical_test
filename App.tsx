/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {HomeStackNavigator} from '@/navigation/index';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <HomeStackNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;

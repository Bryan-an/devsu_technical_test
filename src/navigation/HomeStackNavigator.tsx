import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, DetailsScreen, FormScreen} from '@/screens/index';
import {HeaderComponent} from '@/components/index';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export type HomeStackParamList = {
  Home: undefined;
  Details: {id: string};
  Form?: {id: string};
};

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

export const HomeStackNavigator = () => {
  const insets = useSafeAreaInsets();

  return (
    <HomeStack.Navigator
      screenOptions={{
        header: ({back, navigation}) => (
          <HeaderComponent back={back} navigation={navigation} />
        ),
        contentStyle: {
          paddingLeft: insets.left,
          paddingRight: insets.right,
          paddingBottom: insets.bottom,
          backgroundColor: 'white',
        },
      }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
      <HomeStack.Screen name="Form" component={FormScreen} />
    </HomeStack.Navigator>
  );
};

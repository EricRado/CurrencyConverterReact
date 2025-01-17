/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './Features/CurrencyConverter/CurrencyConverterScreen';
import ProfileScreen from './Features/ExchangeRate/ExchangeRateScreen';
import SettingsScreen from './Features/Favorites/FavoritesScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions= {({ route }) => ({
          tabBarIcon: ({ focused, color, size}) => {
            let iconName: string;

            if (route.name === 'Currency') {
              iconName = focused ? 'cash' : 'cash-outline';
            } else if (route.name === 'Exchange Rate') {
              iconName = focused ? 'stats-chart' : 'stats-chart-outline';
            } else {
              iconName = focused ? 'bookmark' : 'bookmark-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen 
          name="Currency Converter" 
          component={HomeScreen}
          options={{
            tabBarLabel: 'Currency',
          }}
        />
        <Tab.Screen
          name="Exchange Rate"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Exchange Rate',
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Favorites',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
    
  );
};

export default App;
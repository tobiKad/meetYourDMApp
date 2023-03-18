import React, { useState } from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import UserScreen from './screens/UserScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import ScheduleScreen from './screens/ScheduleScreen';
import AuthContext from './AuthContext';
import MainScreen from './screens/MainScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  const storeUserData = (data) => {
    setIsLoggedIn(true);
    setUserData(data);
  };

  const clearUserData = () => {
    setIsLoggedIn(false);
    setUserData(null);
  };

  const LogoutButton = () => (
    <TouchableOpacity onPress={clearUserData}>
      <Text style={{ color: '#333', marginRight: 10 }}>Logout</Text>
    </TouchableOpacity>
  );

  const UserHeader = () => (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text style={{ color: '#333', marginRight: 10 }}>{userData?.name}</Text>
      <LogoutButton />
    </View>
  );

  return (
    <AuthContext.Provider value={{ isLoggedIn, userData, storeUserData, clearUserData }}>
      <NavigationContainer>
        {isLoggedIn ? (
          <Tab.Navigator>
            <Tab.Screen 
              name="Home" 
              component={HomeScreen}
              options={{
                tabBarIcon: ({ focused, color, size }) => (
                  <Ionicons
                    name={focused ? 'home-sharp' : 'home-outline'}
                    size={size}
                    color={color}
                  />
                )
              }}
            />
            <Tab.Screen 
              name="Schedule" 
              component={ScheduleScreen}
              options={{
                tabBarIcon: ({ focused, color, size }) => (
                  <Ionicons
                    name={focused ? 'calendar-sharp' : 'calendar-outline'}
                    size={size}
                    color={color}
                  />
                )
              }}
            />
            <Tab.Screen 
              name="Logout" 
              component={LoginScreen}
              listeners={({ navigation }) => ({
                tabPress: (e) => {
                  // Prevent default action of navigating to tab
                  e.preventDefault();
                  clearUserData();
                  navigation.navigate('Login');
                },
              })}
              options={{
                tabBarIcon: ({ focused, color, size }) => (
                  <Ionicons
                    name={focused ? 'log-out-sharp' : 'log-out-outline'}
                    size={size}
                    color={color}
                  />
                )
              }}
            />
          </Tab.Navigator>
        ) : (
          <Stack.Navigator
            screenOptions={{
              headerTintColor: '#fff',
              headerStyle: {
                backgroundColor: '#333',
              },
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          >
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;

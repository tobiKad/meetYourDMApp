import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import ScheduleScreen from './ScheduleScreen';
import UserScreen from './UserScreen';

const Tab = createBottomTabNavigator();

const MainScreen = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? 'ios-home' : 'ios-home-outline'}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Schedule"
          component={ScheduleScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? 'ios-calendar' : 'ios-calendar-outline'}
                size={size}
                color={color}
              />
            ),
          }}
        />
        {isLoggedIn ? (
          <Tab.Screen
            name="User"
            component={UserScreen}
            listeners={{
              tabPress: (e) => {
                // Prevent default action of navigating to tab
                e.preventDefault();
              },
            }}
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <Ionicons
                  name={focused ? 'ios-person' : 'ios-person-outline'}
                  size={size}
                  color={color}
                />
              ),
            }}
          />
        ) : (
          <Tab.Screen
            name="Login"
            component={LoginScreen}
            listeners={{
              tabPress: (e) => {
                // Prevent default action of navigating to tab
                e.preventDefault();
              },
            }}
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <Ionicons
                  name={focused ? 'ios-log-in' : 'ios-log-in-outline'}
                  size={size}
                  color={color}
                />
              ),
            }}
          />
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainScreen;

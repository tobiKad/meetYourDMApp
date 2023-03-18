import React, { useState } from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './screens/HomeScreen';
import UserScreen from './screens/UserScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import ScheduleScreen from './screens/ScheduleScreen';
import AuthContext from './AuthContext';

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

  const logout = () => {
    clearUserData();
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userData, storeUserData, clearUserData, logout }}>
      <NavigationContainer>
      <Tab.Navigator
  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconPath;

      if (route.name === 'SignUp') {
        iconPath = focused
          ? require('./assets/login.png')
          : require('./assets/login.png');
      }else if (route.name === 'Home') {
        iconPath = focused
          ? require('./assets/tavern.png')
          : require('./assets/tavern2.png');
      } else if (route.name === 'User') {
        iconPath = focused
          ? require('./assets/user.png')
          : require('./assets/user.png');
      } else if (route.name === 'Login') {
        iconPath = focused
          ? require('./assets/login.png')
          : require('./assets/login.png');
      } else if (route.name === 'Schedule') {
        iconPath = focused
          ? require('./assets/schedule.png')
          : require('./assets/schedule.png');
      }
      return <Image source={iconPath} style={{ width: size, height: size }} />;
    },
  })}
  tabBarOptions={{
    activeTintColor: '#000',
    inactiveTintColor: '#ccc',
    style: {
      backgroundColor: '#fff',
    },
  }}
>
  <Tab.Screen name="Home" component={HomeScreen} />
  <Tab.Screen name="User" component={UserScreen} />
  {!isLoggedIn && <Tab.Screen name="Login" component={LoginScreen} />}
  {!isLoggedIn && <Tab.Screen name="SignUp" component={SignUpScreen} />}
  {isLoggedIn && (
  <Tab.Screen
    name="Logout"
    component={LoginScreen}
    listeners={({ navigation }) => ({
      tabPress: (e) => {
        e.preventDefault();
        logout();
        navigation.navigate('Login');
      },
    })}
  />
)}

  <Tab.Screen name="Schedule" component={ScheduleScreen} />
</Tab.Navigator>

    </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;

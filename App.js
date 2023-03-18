import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Node } from 'react-native-node';

import HomeScreen from './screens/HomeScreen';
import UserScreen from './screens/UserScreen';
import LoginScreen from './screens/LoginScreen';
import ScheduleScreen from './screens/ScheduleScreen';

const Tab = createBottomTabNavigator();
const fetchFonts = async () => {
  await Font.loadAsync({
    'RPGFont': require('./assets/fonts/RPGfont.otf'),
  });
};
// Create a new Node instance
// const node = new Node();

// Start the server
// node.start('server.js');
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconPath;

            if (route.name === 'Home') {
              iconPath = focused
                ? require('./assets/tavern.png')
                : require('./assets/tavern2.png');
            } else if (route.name === 'User') {
              iconPath = focused
                ? require('./assets/user.png')
                : require('./assets/user.png');
            } else if (route.name === 'Login'){
              iconPath = focused
              ? require('./assets/login.png')
              : require('./assets/login.png')
            }else if (route.name === 'Schedule'){
              iconPath = focused
              ? require('./assets/schedule.png')
              : require('./assets/schedule.png')
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
        <Tab.Screen name="Login" component={LoginScreen} />
        <Tab.Screen name="Schedule" component={ScheduleScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
  
};

export default App;

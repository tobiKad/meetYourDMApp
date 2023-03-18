import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to FindMyDM App</Text>
      <Image source={require('../assets/dice.png')} style={styles.image} />
      <Text style={styles.subtitle}>Find you dream RPG group here</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    fontFamily: 'RPGFont',
  },
  subtitle: {
    fontSize: 16,
    fontStyle: 'italic',
    fontFamily: 'RPGFont',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});
export default HomeScreen;

import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

const UserScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Login</Text>
      {/* Add login form here */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    
  },
});

export default UserScreen;

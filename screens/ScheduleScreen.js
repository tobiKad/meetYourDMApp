import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

const ScheduleScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to FindMyDM App</Text>
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
});
export default ScheduleScreen;
import React from 'react';
import { View, StyleSheet } from 'react-native';

const ColorScreen = ({ color }) => {
  return <View style={[styles.container, { backgroundColor: color }]} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ColorScreen;

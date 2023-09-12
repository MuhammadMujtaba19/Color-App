import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SmallContainerRow = ({ colors }) => {
  const navigation = useNavigation();

  const handleContainerPress = (color) => {
    // Navigate to the new screen and pass the selected color as a parameter
    navigation.navigate('ColorScreen', { color });
  };

  return (
    <View style={styles.container}>
      {colors.map((color, index) => (
        <TouchableOpacity key={index} onPress={() => handleContainerPress(color)}>
          <View style={[styles.smallContainer, { backgroundColor: color }]} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    paddingVertical: 60,
  },
  smallContainer: {
    width: 400,
    height: 80,
    marginVertical: 0.5,
  },
});

export default SmallContainerRow;

import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
//import SmallContainersComponent from './HorizontalBox';
import ColorScreen from './ColorScreen';
const SmallContainersComponent = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleContainerPress = (color) => {
    setSelectedColor(color);
  };

  return (
    <View style={styles.container}>
      {colors.map((color, index) => (
        <TouchableOpacity key={index} onPress={() => handleContainerPress(color)}>
          <View style={[styles.smallContainer, { backgroundColor: color }]} />
        </TouchableOpacity>
      ))}

      {/* Conditional rendering based on selectedColor */}
      {selectedColor && <ColorScreen color={selectedColor} />}
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

export default SmallContainersComponent;
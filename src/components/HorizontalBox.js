import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SmallContainersComponent = () => {
  return (
    <View >
      <TouchableOpacity style={styles.buttonStyle}>

      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop:100,
  }
});

export default SmallContainersComponent;
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Coloredscreens  =() =>
 {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>RED</Text>
      </View>
    );
  }
  export default Coloredscreens;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textStyle: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 30,
      textAlign: 'center'
    }
  });

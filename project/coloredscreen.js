import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function colorscreen() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>RED</Text>
      </View>
    );
  }
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
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
//import Coloredscreens from './project/Coloredscreens';
//import Finally from './src/components/Finally';
import SmallContainerRow from './src/components/SmallContainerRow';

//import SmallContainersComponent from './src/components/SmallContainersComponent';
const App= ()=> {
  const colors = ['red', 'blue', 'green', 'yellow','orange','pink','purple','brown'];
  return (
   <SafeAreaView>
      <View >
       <SmallContainersRow colors={colors} />

      </View>
    </SafeAreaView> 
   // <Text>this is ok</Text>
    
  );
};
export default App;
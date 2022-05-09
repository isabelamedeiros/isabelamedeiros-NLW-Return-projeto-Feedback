index.tsx:

import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

export function Widget(){
  return (
    <View style={styles.container}>
      
    </View>
  );
}


styles.ts:

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {}
})

expo install expo-font @expo-google-fonts/inter
expo install expo-app-loading
npm install --save phosphor-react-native
expo install react-native-svg
npm install react-native-iphone-x-helper
expo add @gorhom/bottom-sheet@^4
expo install react-native-reanimated 
expo install react-native-gesture-handler

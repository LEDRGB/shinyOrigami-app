import React from 'react';
import { StyleSheet, View } from 'react-native';
import WorkSpace from './components/WorkSpace'

export default function App() {
  return (
    <View style={styles.container}>
      <WorkSpace/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

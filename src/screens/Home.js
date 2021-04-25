import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Trang Chủ</Text>
      <Button title="PUSH" onPress={() => navigation.navigate('Budget')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

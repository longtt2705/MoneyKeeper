import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default function Budget({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Tài khoản</Text>
      <Button title="BACK" onPress={() => navigation.goBack()} />
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

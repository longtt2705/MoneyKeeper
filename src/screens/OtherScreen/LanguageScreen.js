import React from "react";
import { Button, StyleSheet, Text,View,TouchableHighlight, ScrollView, Image } from "react-native";
import { useSelector} from 'react-redux';


function LanguageScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
export default LanguageScreen;
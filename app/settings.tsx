import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Settings = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Settings Page</Text>
    </View>
  )
};

export default Settings;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txt:{
        fontSize: 20,
        fontWeight: 'bold'
    }
});
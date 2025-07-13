import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Home Page</Text>
    </View>
  )
};

export default Index;

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
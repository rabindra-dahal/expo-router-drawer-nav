import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Dashboard Page</Text>
    </View>
  )
};

export default Dashboard;

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
import {View, StyleSheet} from 'react-native';
import React from 'react';

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}></View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    width: '90%',
    alignSelf: 'center',
  },
});

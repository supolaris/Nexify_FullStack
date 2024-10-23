import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <ImageBackground
      style={styles.container}
      resizeMode="stretch"
      source={require('../assets/images/bg3.png')}>
      <View style={styles.innerContainer}>
        <Text>Greetings, Suleman</Text>
      </View>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    width: '90%',
    alignSelf: 'center',
  },
});

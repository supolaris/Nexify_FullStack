import {StyleSheet, ImageBackground, Image} from 'react-native';
import React from 'react';

const Splash = () => {
  return (
    <ImageBackground
      style={styles.containaer}
      source={require('../assets/images/bg1.png')}>
      <Image
        resizeMode="contain"
        style={styles.logo}
        source={require('../assets/images/logo.png')}
      />
    </ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
  containaer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 300,
    width: 300,
  },
});

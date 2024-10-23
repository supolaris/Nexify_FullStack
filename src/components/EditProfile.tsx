import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const EditProfile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}></View>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    width: '90%',
    alignSelf: 'center',
  },
});

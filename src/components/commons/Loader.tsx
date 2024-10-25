import {ActivityIndicator, Modal, View, StyleSheet} from 'react-native';
import React from 'react';
import {AppColors} from '../../constants/AppColors';

interface ILoaderProps {
  isLoaderVisible: boolean;
}

const Loader = (props: ILoaderProps) => {
  return (
    <Modal visible={props.isLoaderVisible}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color={AppColors.black} />
      </View>
    </Modal>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

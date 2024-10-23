import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {AppColors} from '../../../constants/AppColors';

interface IRoundButtonProps {
  onPress: () => void;
  children: any;
}

const RoundButton: React.FC<IRoundButtonProps> = ({onPress, children}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {children}
    </TouchableOpacity>
  );
};

export default RoundButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.background,
    height: 45,
    width: 45,
    borderRadius: 45,
    borderWidth: 0.5,
    borderColor: AppColors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

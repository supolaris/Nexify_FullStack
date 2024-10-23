import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {AppColors} from '../../../constants/AppColors';

interface IRoundButtonProps {
  height: number;
  width: number;
  borderRadius: number;
  backgroundColor: string;
  children: any;
  onPress: () => void;
}

const RoundButton: React.FC<IRoundButtonProps> = ({
  borderRadius,
  width,
  height,
  backgroundColor,
  children,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.container,
        height: height,
        width: width,
        borderRadius: borderRadius,
        backgroundColor: backgroundColor,
      }}>
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

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {AppColors} from '../../../constants/AppColors';
import {ActiveOpacity} from '../../../utils/CommonFunctions';

interface IPrimaryButton {
  text: string;
  backgroundColor: string;
  textColor: string;
  onPress: () => void;
}

const PrimaryButton = (props: IPrimaryButton) => {
  return (
    <TouchableOpacity
      style={{...styles.container, backgroundColor: props.backgroundColor}}
      activeOpacity={ActiveOpacity}
      onPress={props.onPress}>
      <Text style={{...styles.text, color: props.textColor}}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.background,
    borderWidth: 0.5,
    borderColor: AppColors.black,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
  },
  text: {
    fontSize: 15,
    color: AppColors.black,
  },
});

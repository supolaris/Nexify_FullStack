import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {AppColors} from '../../../constants/AppColors';
import {ActiveOpacity} from '../../../utils/CommonFunctions';
import FontFamily from '../../../constants/FontFamily';

interface IPrimaryButton {
  text: string;
  backgroundColor: string;
  textColor: string;
  onPress: () => void;
}

const PrimaryBlackButton = (props: IPrimaryButton) => {
  return (
    <TouchableOpacity
      style={{...styles.container, backgroundColor: props.backgroundColor}}
      activeOpacity={ActiveOpacity}
      onPress={props.onPress}>
      <Text style={{...styles.text, color: props.textColor}}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryBlackButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.background,
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 20,
  },
  text: {
    fontFamily: FontFamily.medium,
    fontSize: 15,
    color: AppColors.black,
  },
});

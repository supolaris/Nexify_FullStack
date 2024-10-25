import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {AppColors} from '../../../constants/AppColors';

interface IPrimaryTextinputProps {
  inputValue: string;
  maxLength: number;
  placeholder: string;
  multiline: boolean;
  height: number;
  handleInputChange: (val: string) => void;
}

const PrimaryTextinput = (props: IPrimaryTextinputProps) => {
  return (
    <TextInput
      maxLength={props.maxLength}
      multiline={props.multiline}
      style={{...style.input, height: props.height}}
      placeholder={props.placeholder}
      placeholderTextColor={AppColors.inactiveGray}
      value={props.inputValue}
      onChangeText={(val: string) => props.handleInputChange(val)}
    />
  );
};

export default PrimaryTextinput;

const style = StyleSheet.create({
  input: {
    color: AppColors.black,
    fontSize: 15,
    borderWidth: 0.5,
    borderColor: AppColors.black,
    borderRadius: 20,
    paddingHorizontal: 15,
  },
});

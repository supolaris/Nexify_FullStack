import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {AppColors} from '../../../constants/AppColors';

interface IPrimaryTextinputProps {
  inputValue: string;
  maxLength: number;
  placeholder: string;
  handleInputChange: (val: string) => void;
}

const PrimaryTextinput = (props: IPrimaryTextinputProps) => {
  return (
    <TextInput
      maxLength={props.maxLength}
      style={style.input}
      placeholder={props.placeholder}
      placeholderTextColor={AppColors.black}
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

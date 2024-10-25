import {Text, StyleSheet} from 'react-native';
import React from 'react';
import {AppColors} from '../../../constants/AppColors';
import FontFamily from '../../../constants/FontFamily';

interface ITitleTextProps {
  text: string;
}

const TitleText = (props: ITitleTextProps) => {
  return <Text style={styles.text}>{props.text}</Text>;
};

export default TitleText;

const styles = StyleSheet.create({
  text: {
    fontFamily: FontFamily.bold,
    fontSize: 50,
    color: AppColors.black,
  },
});

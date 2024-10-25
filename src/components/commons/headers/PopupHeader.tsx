import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import {AppColors} from '../../../constants/AppColors';
import FontFamily from '../../../constants/FontFamily';

interface IPopupHeaderProps {
  text: string;
  onPopupHeaderCross: () => void;
}

const PopupHeader = (props: IPopupHeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.titleText}>{props.text}</Text>
      </View>
      <TouchableOpacity
        onPress={props.onPopupHeaderCross}
        style={styles.iconTouchable}>
        <Octicons name="x" size={25} color={AppColors.black} />
      </TouchableOpacity>
    </View>
  );
};

export default PopupHeader;

const styles = StyleSheet.create({
  container: {
    height: 60,
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: AppColors.activeGray,
  },
  innerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontFamily: FontFamily.semiBold,
    fontSize: 18,
    color: AppColors.black,
  },
  iconTouchable: {
    position: 'absolute',
    left: 35,
  },
});

import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {AppColors} from '../../../constants/AppColors';
import RoundButton from '../buttons/RoundButton';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';

interface IPrimaryHeader {
  isOptionButtonVisible: boolean;
  onHeaderCrossPressed: () => void;
  onOptionPressed: () => void;
}

const PrimaryHeader = (props: IPrimaryHeader) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <RoundButton
          onPress={props.onHeaderCrossPressed}
          height={45}
          width={45}
          borderRadius={45}
          backgroundColor={AppColors.background}>
          <Octicons name="x" size={18} color={AppColors.black} />
        </RoundButton>
        {props.isOptionButtonVisible && (
          <RoundButton
            onPress={props.onOptionPressed}
            height={45}
            width={45}
            borderRadius={45}
            backgroundColor={AppColors.background}>
            <Feather name="more-horizontal" size={18} color={AppColors.black} />
          </RoundButton>
        )}
      </View>
    </View>
  );
};

export default PrimaryHeader;

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    height: 70,
    justifyContent: 'center',
  },
  innerContainer: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

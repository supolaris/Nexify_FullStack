import {View, Text, StyleSheet, Modal, Pressable} from 'react-native';
import React from 'react';
import {AppColors} from '../../../constants/AppColors';
import PopupHeader from '../headers/PopupHeader';
import PrimaryTextinput from '../textInputs/PrimaryTextinput';
import PrimaryBlackButton from '../buttons/PrimaryBlackButton';
import FontFamily from '../../../constants/FontFamily';

interface IAddProjectPopup {
  isAddProjectPopupVisible: boolean;
  projectInputVal: string;
  onProjectCreatePressed: () => void;
  handleProjectInputVal: (val: string) => void;
  onAddProjectPopupClose: () => void;
}

const AddProjectPopup = (props: IAddProjectPopup) => {
  return (
    <Modal
      transparent={true}
      visible={props.isAddProjectPopupVisible}
      onRequestClose={props.onAddProjectPopupClose}>
      <Pressable onPress={props.onAddProjectPopupClose} style={{flex: 1}}>
        <View style={styles.container}>
          <Pressable>
            <View style={styles.innerContainer}>
              <PopupHeader
                text="Add new project"
                onPopupHeaderCross={props.onAddProjectPopupClose}
              />
              <View style={styles.contentView}>
                <View style={styles.titleInputsView}>
                  <Text style={styles.projectsTitleText}>Title</Text>
                  <View style={styles.inputsView}>
                    <PrimaryTextinput
                      inputValue={props.projectInputVal}
                      maxLength={20}
                      multiline={true}
                      height={60}
                      placeholder=""
                      handleInputChange={val =>
                        props.handleProjectInputVal(val)
                      }
                    />
                  </View>
                </View>

                <PrimaryBlackButton
                  text="Create"
                  backgroundColor={AppColors.black}
                  textColor={AppColors.white}
                  onPress={props.onProjectCreatePressed}
                />
              </View>
            </View>
          </Pressable>
        </View>
      </Pressable>
    </Modal>
  );
};

export default AddProjectPopup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.transparent,
    justifyContent: 'flex-end',
  },
  innerContainer: {
    backgroundColor: AppColors.background,
    height: 400,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  contentView: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-around',
  },
  titleInputsView: {},
  projectsTitleText: {
    fontFamily: FontFamily.semiBold,
    fontSize: 18,
    color: AppColors.black,
  },
  inputsView: {
    marginTop: 10,
  },
});

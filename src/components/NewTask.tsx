import {View, Text, StyleSheet, ImageBackground, FlatList} from 'react-native';
import React from 'react';
import {AppColors} from '../constants/AppColors';
import PrimaryHeader from './commons/headers/PrimaryHeader';
import TitleText from './commons/texts/TitleText';
import PrimaryButton from './commons/buttons/PrimaryButton';
import RoundButton from './commons/buttons/RoundButton';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PrimaryTextinput from './commons/textInputs/PrimaryTextinput';
import PrimaryBlackButton from './commons/buttons/PrimaryBlackButton';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {IprojectsData} from '../@types/CommonTypes';
import AddProjectPopup from './commons/popups/AddProjectPopup';
import FontFamily from '../constants/FontFamily';

interface INewTaskProps {
  projectsData: IprojectsData[];
  inputVals: {
    titleVal: string;
    descriptionVal: string;
  };
  selectedProject: string;
  isAddProjectPopupVisible: boolean;
  projectInputVal: string;
  handleProjectInputVal: (val: string) => void;
  onAddProjectPopupClose: () => void;
  handleInputChange: (field: string, val: string) => void;
  onTaskCreatePressed: () => void;
  onHeaderCrossPressed: () => void;
  onProjectAddPressed: () => void;
  onProjectSelectPressed: (item: IprojectsData) => void;
  onProjectCreatePressed: () => void;
}

const NewTask = (props: INewTaskProps) => {
  const renderprojects = ({item}: {item: IprojectsData}) => {
    return (
      <View style={styles.renderContainer}>
        <PrimaryButton
          text={item.title}
          textColor={
            props.selectedProject === item.title
              ? AppColors.white
              : AppColors.black
          }
          backgroundColor={
            props.selectedProject === item.title
              ? AppColors.black
              : 'transparent'
          }
          onPress={() => props.onProjectSelectPressed(item)}
        />
      </View>
    );
  };

  return (
    <ImageBackground
      style={styles.container}
      resizeMode="stretch"
      source={require('../assets/images/bg3.png')}>
      <PrimaryHeader
        isOptionButtonVisible={false}
        onHeaderCrossPressed={props.onHeaderCrossPressed}
        onOptionPressed={() => {}}
      />
      <AddProjectPopup
        isAddProjectPopupVisible={props.isAddProjectPopupVisible}
        projectInputVal={props.projectInputVal}
        handleProjectInputVal={props.handleProjectInputVal}
        onAddProjectPopupClose={props.onAddProjectPopupClose}
        onProjectCreatePressed={props.onProjectCreatePressed}
      />
      <View style={styles.innerContainer}>
        <View style={styles.detailsView}>
          <View style={{marginBottom: 10}}>
            <TitleText text="New Task" />
          </View>

          <View style={styles.buttonsView}>
            <PrimaryButton
              text="Today"
              backgroundColor=""
              textColor=""
              onPress={() => {}}
            />
            <View style={styles.secondButtonView}>
              <PrimaryButton
                text="Tomorrow"
                backgroundColor=""
                textColor=""
                onPress={() => {}}
              />
            </View>
          </View>

          <View style={styles.buttonsView}>
            <RoundButton
              onPress={() => {}}
              height={45}
              width={45}
              borderRadius={45}
              backgroundColor={AppColors.background}>
              <MaterialCommunityIcons
                name="clock-plus-outline"
                size={18}
                color={AppColors.black}
              />
            </RoundButton>
            <View style={styles.secondButtonView}>
              <RoundButton
                onPress={() => {}}
                height={45}
                width={45}
                borderRadius={45}
                backgroundColor={AppColors.background}>
                <MaterialCommunityIcons
                  name="bell-plus-outline"
                  size={18}
                  color={AppColors.black}
                />
              </RoundButton>
            </View>
          </View>

          <View style={styles.titleProjectsView}>
            <Text style={styles.projectsTitleText}>Projects</Text>

            <View style={styles.projectsView}>
              <RoundButton
                onPress={props.onProjectAddPressed}
                height={45}
                width={45}
                borderRadius={45}
                backgroundColor={AppColors.background}>
                <AntDesign name="plus" size={18} color={AppColors.black} />
              </RoundButton>

              <View style={styles.projectButtonsView}>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  data={props.projectsData}
                  renderItem={renderprojects}
                  keyExtractor={item => item.id.toString()}
                  ListFooterComponent={() => {
                    return <View style={{marginLeft: 40}}></View>;
                  }}
                />
              </View>
            </View>
          </View>

          <View style={styles.titleInputsView}>
            <Text style={styles.projectsTitleText}>Title</Text>

            <View style={styles.inputsView}>
              <PrimaryTextinput
                inputValue={props.inputVals?.titleVal}
                maxLength={20}
                multiline={true}
                height={60}
                placeholder=""
                handleInputChange={val =>
                  props.handleInputChange('titleVal', val)
                }
              />
              <View
                style={{
                  marginTop: 10,
                }}>
                <PrimaryTextinput
                  inputValue={props.inputVals?.descriptionVal}
                  multiline={true}
                  height={170}
                  maxLength={20}
                  placeholder="Description (optional)"
                  handleInputChange={val =>
                    props.handleInputChange('descriptionVal', val)
                  }
                />
              </View>
            </View>
          </View>
        </View>

        <PrimaryBlackButton
          text="Create"
          backgroundColor={AppColors.black}
          textColor={AppColors.white}
          onPress={props.onTaskCreatePressed}
        />
      </View>
    </ImageBackground>
  );
};

export default NewTask;

const styles = StyleSheet.create({
  renderContainer: {
    marginRight: 15,
  },
  //
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  detailsView: {
    flex: 1,
  },
  buttonsView: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  secondButtonView: {
    marginLeft: 15,
  },
  titleProjectsView: {
    marginTop: 30,
  },
  projectsTitleText: {
    fontFamily: FontFamily.semiBold,
    fontSize: 18,
    color: AppColors.black,
  },
  projectsView: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  projectButtonsView: {
    marginLeft: 15,
  },
  titleInputsView: {
    marginTop: 30,
  },
  inputsView: {
    marginTop: 10,
  },
});

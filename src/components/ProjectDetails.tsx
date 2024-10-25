import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import RoundButton from './commons/buttons/RoundButton';
import TitleText from './commons/texts/TitleText';
import {AppColors} from '../constants/AppColors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {IprojectTasksData} from '../@types/CommonTypes';
import {ActiveOpacity} from '../utils/CommonFunctions';

interface IProjectDetails {
  isCompletedTaskOpen: boolean;
  projectCompletedTasksData: IprojectTasksData[];
  projectIncompleteTasksData: IprojectTasksData[];
  item: IprojectTasksData;
  onCompletedOpenPressed: () => void;
  onBackArrowPressed: () => void;
  onTaskAddPressed: (id: number) => void;
}

const ProjectDetails = (props: IProjectDetails) => {
  const renderTasks = ({item}: {item: IprojectTasksData}) => {
    return (
      <View style={styles.renderContainer}>
        <TouchableOpacity
          activeOpacity={ActiveOpacity}
          style={styles.renderTaskTouchable}
          disabled={item.isCompleted}>
          {item.isCompleted ? (
            <View style={styles.renderIconView}>
              <Feather
                name="check-circle"
                size={25}
                color={AppColors.inactiveGray}
              />
            </View>
          ) : (
            <View style={styles.renderIconView}>
              <Feather name="circle" size={25} color={AppColors.black} />
            </View>
          )}
          <View style={styles.renderTextView}>
            <Text
              style={{
                ...styles.renderTitleText,
                color: item.isCompleted
                  ? AppColors.inactiveGray
                  : AppColors.inactiveGray,
              }}>
              {item.title}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        style={styles.container}
        resizeMode="stretch"
        source={require('../assets/images/bg3.png')}>
        <View style={styles.innerContainer}>
          <ImageBackground
            style={styles.pbgImage}
            resizeMode="stretch"
            source={require('../assets/images/cardBg2.png')}>
            <View style={styles.buttonsView}>
              <RoundButton
                onPress={props.onBackArrowPressed}
                height={70}
                width={70}
                borderRadius={70}
                backgroundColor={AppColors.background}>
                <MaterialIcons
                  name="arrow-back-ios-new"
                  size={18}
                  color={AppColors.black}
                />
              </RoundButton>
              <RoundButton
                onPress={() => {}}
                height={70}
                width={70}
                borderRadius={70}
                backgroundColor={AppColors.background}>
                <Feather
                  name="more-horizontal"
                  size={18}
                  color={AppColors.black}
                />
              </RoundButton>
            </View>
            <TitleText text="Hello world" />
            <View style={styles.taskCountView}>
              <Text
                style={
                  styles.taskCountText
                }>{`${props.projectCompletedTasksData?.length}/${props.projectIncompleteTasksData?.length}`}</Text>
              <Text style={styles.taskCountText}>Tasks</Text>
            </View>
          </ImageBackground>
          <View style={styles.plusView}>
            <RoundButton
              onPress={() => props.onTaskAddPressed(props.item?.id)}
              height={90}
              width={90}
              borderRadius={90}
              backgroundColor={AppColors.background}>
              <AntDesign name="plus" size={18} color={AppColors.black} />
            </RoundButton>
          </View>
        </View>

        <ScrollView style={{flex: 1, marginTop: 20}}>
          <View style={styles.taskFlastlistView}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={props.projectIncompleteTasksData}
              renderItem={renderTasks}
              keyExtractor={item => item.id.toString()}
            />
          </View>

          <View style={styles.taskFlastlistView}>
            <View
              style={{
                ...styles.titleIconView,
                marginBottom: props.isCompletedTaskOpen ? 10 : 40,
              }}>
              <Text style={styles.completedText}>
                Completed {`(${props.projectIncompleteTasksData?.length})`}
              </Text>
              <TouchableOpacity onPress={props.onCompletedOpenPressed}>
                <MaterialIcons
                  name={
                    props.isCompletedTaskOpen
                      ? 'keyboard-arrow-up'
                      : 'keyboard-arrow-down'
                  }
                  size={25}
                  color={AppColors.black}
                />
              </TouchableOpacity>
            </View>
            {props.isCompletedTaskOpen && (
              <FlatList
                showsVerticalScrollIndicator={false}
                data={props.projectCompletedTasksData}
                renderItem={renderTasks}
                keyExtractor={item => item.id.toString()}
                ListFooterComponent={() => {
                  return <View style={{height: 30}}></View>;
                }}
              />
            )}
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default ProjectDetails;

const styles = StyleSheet.create({
  renderContainer: {
    borderBottomWidth: 0.5,
    borderBottomColor: AppColors.inactiveGray,
  },
  renderTaskTouchable: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
  },
  renderIconView: {
    width: '5%',

    marginRight: 10,
  },
  renderTextView: {
    width: '92%',
  },
  renderTitleText: {
    width: '98%',
    fontSize: 16,
    color: AppColors.black,
  },
  //
  container: {
    flex: 1,
  },
  innerContainer: {
    marginTop: 60,
    width: '90%',
    alignSelf: 'center',
  },
  pbgImage: {
    height: 450,
    overflow: 'hidden',
    borderRadius: 20,
    justifyContent: 'space-between',
    padding: 20,
  },
  taskCountView: {},
  taskCountText: {
    fontSize: 18,
    color: AppColors.white,
  },
  buttonsView: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  taskFlastlistView: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
  },
  plusView: {
    position: 'absolute',
    bottom: -30,
    left: 220,
    zIndex: 1,
  },
  titleIconView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 40,
    marginBottom: 10,
  },
  completedText: {
    fontSize: 18,
    color: AppColors.black,
  },
});

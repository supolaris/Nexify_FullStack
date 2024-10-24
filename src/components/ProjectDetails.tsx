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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {IprojectTasksData} from '../@types/CommonTypes';

interface IProjectDetails {
  projectTasksData: IprojectTasksData[];
}

const ProjectDetails = (props: IProjectDetails) => {
  const renderTasks = ({item}: {item: IprojectTasksData}) => {
    return (
      <View style={styles.renderContainer}>
        <TouchableOpacity
          style={styles.renderTaskTouchable}
          disabled={item.isCompleted}>
          {item.isCompleted ? (
            <View style={styles.renderIconView}>
              <Feather name="check-circle" size={25} color={AppColors.black} />
            </View>
          ) : (
            <View style={styles.renderIconView}>
              <Feather name="circle" size={25} color={AppColors.black} />
            </View>
          )}
          <View style={styles.renderTextView}>
            <Text style={styles.renderTitleText}>{item.title}</Text>
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
            source={require('../assets/images/pbg.jpg')}>
            <View style={styles.buttonsView}>
              <RoundButton
                onPress={() => {}}
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
              <Text style={styles.taskCountText}>8/10</Text>
              <Text style={styles.taskCountText}>Tasks</Text>
            </View>
          </ImageBackground>
          <View
            style={{
              position: 'absolute',
              bottom: -30,
              left: 220,
            }}>
            <RoundButton
              onPress={() => {}}
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
              data={props.projectTasksData}
              renderItem={renderTasks}
              keyExtractor={item => item.id.toString()}
            />
          </View>

          <View style={styles.taskFlastlistView}>
            <Text>Completed{'(2)'}</Text>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={props.projectTasksData}
              renderItem={renderTasks}
              keyExtractor={item => item.id.toString()}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default ProjectDetails;

const styles = StyleSheet.create({
  renderContainer: {
    // width: '90%',
    // alignSelf: 'center',
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: AppColors.black,
  },
  renderTaskTouchable: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  renderIconView: {},
  renderTextView: {},
  renderTitleText: {
    fontSize: 15,
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
    height: 400,
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
  // pendingView: {},
  // completedView: {},

  taskFlastlistView: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
  },
});

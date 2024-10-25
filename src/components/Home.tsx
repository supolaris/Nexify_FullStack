import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import TitleText from './commons/texts/TitleText';
import {AppColors} from '../constants/AppColors';
import RoundButton from './commons/buttons/RoundButton';
import {IprojectsData} from '../@types/CommonTypes';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {ActiveOpacity} from '../utils/CommonFunctions';

interface IHomeProps {
  projectsData: IprojectsData[];
  onProjectPresssed: (item: IprojectsData) => void;
  onTaskAddPressed: (id: number) => void;
}

const Home = (props: IHomeProps) => {
  const renderProjects = ({item}: {item: IprojectsData}) => {
    return (
      <TouchableOpacity
        style={styles.projectsView}
        onPress={() => props.onProjectPresssed(item)}
        activeOpacity={ActiveOpacity}>
        <ImageBackground
          style={styles.pbgImage}
          resizeMode="stretch"
          source={require('../assets/images/cardBg.jpg')}>
          <TitleText text={item.title} />
          <View style={styles.taskCountView}>
            <Text style={styles.taskCountText}>8/10</Text>
            <Text style={styles.taskCountText}>Tasks</Text>
          </View>

          <View style={styles.buttonsView}>
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
            <RoundButton
              onPress={() => props.onTaskAddPressed(item.id)}
              height={70}
              width={70}
              borderRadius={70}
              backgroundColor={AppColors.background}>
              <AntDesign name="plus" size={18} color={AppColors.black} />
            </RoundButton>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <ImageBackground
      style={styles.container}
      resizeMode="stretch"
      source={require('../assets/images/bg3.png')}>
      <View style={styles.innerContainer}>
        <View style={{}}>
          <Text style={styles.greetingText}>Greetings, Suleman</Text>
          <View style={styles.tiltesImageview}>
            <View style={styles.titlesView}>
              <TitleText text="Your" />
              <View style={styles.secondTitleView}>
                <TitleText text="Projects" />
                <View style={{marginLeft: 10}}>
                  {props.projectsData?.length > 0 && (
                    <TitleText text={`(${props.projectsData?.length})`} />
                  )}
                </View>
              </View>
            </View>
            <View style={styles.imageView}>
              <Image
                style={styles.image}
                resizeMode="contain"
                source={require('../assets/images/logo.png')}
              />
            </View>
          </View>
        </View>

        <View style={{height: '100%'}}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={props.projectsData}
            renderItem={renderProjects}
            keyExtractor={item => item.id.toString()}
            ListFooterComponent={() => {
              return <View style={{height: 220}}></View>;
            }}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    marginTop: 60,
    width: '90%',
    alignSelf: 'center',
  },
  greetingText: {
    fontSize: 18,
    color: AppColors.black,
  },
  tiltesImageview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titlesView: {
    width: '60%',
  },
  secondTitleView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageView: {
    width: '40%',
    alignItems: 'flex-end',
  },
  image: {
    width: 150,
    height: 150,
  },
  projectsView: {
    marginTop: 20,
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
});

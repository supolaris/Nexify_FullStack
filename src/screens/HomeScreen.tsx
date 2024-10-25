import React from 'react';
import Home from '../components/Home';
import {projectsData} from '../constants/StaticData';
import {useAppNavigation} from '../@types/AppNavigation';
import {IprojectsData} from '../@types/CommonTypes';

const HomeScreen = () => {
  const navigation = useAppNavigation();

  const onProjectPresssed = (item: IprojectsData) => {
    navigation.navigate('ProjectDetailsScreen', item);
  };

  const onTaskAddPressed = (id: number) => {
    navigation.navigate('NewTaskScreen', {id});
  };
  return (
    <Home
      projectsData={projectsData}
      onProjectPresssed={onProjectPresssed}
      onTaskAddPressed={onTaskAddPressed}
    />
  );
};

export default HomeScreen;

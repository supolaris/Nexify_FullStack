import React from 'react';
import Home from '../components/Home';
import {projectsData} from '../constants/StaticData';
import {useAppNavigation} from '../@types/AppNavigation';

const HomeScreen = () => {
  const navigation = useAppNavigation();

  const onProjectPresssed = () => {
    navigation.navigate('ProjectDetailsScreen');
  };

  return (
    <Home projectsData={projectsData} onProjectPresssed={onProjectPresssed} />
  );
};

export default HomeScreen;

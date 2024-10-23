import React from 'react';
import Home from '../components/Home';
import {projectsData} from '../constants/StaticData';

const HomeScreen = () => {
  return <Home projectsData={projectsData} />;
};

export default HomeScreen;

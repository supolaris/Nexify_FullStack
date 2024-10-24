import React from 'react';
import NewTask from '../components/NewTask';
import {projectsData} from '../constants/StaticData';

import {useAppNavigation} from '../@types/AppNavigation';

const NewTaskScreen = () => {
  const navigation = useAppNavigation();

  const onTaskCreatePressed = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <NewTask
      projectsData={projectsData}
      onTaskCreatePressed={onTaskCreatePressed}
    />
  );
};

export default NewTaskScreen;

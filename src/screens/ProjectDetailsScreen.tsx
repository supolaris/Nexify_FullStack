import React, {useState} from 'react';
import ProjectDetails from '../components/ProjectDetails';
import {
  projectCompletedTasksData,
  projectIncompleteTasksData,
} from '../constants/StaticData';
import {useAppNavigation} from '../@types/AppNavigation';

const ProjectDetailsScreen = () => {
  const navigation = useAppNavigation();
  const [isCompletedTaskOpen, setIsCompleteOpen] = useState<boolean>(false);

  const onCompletedOpenPressed = () => {
    setIsCompleteOpen(!isCompletedTaskOpen);
  };

  const onBackArrowPressed = () => {
    navigation.goBack();
  };

  return (
    <ProjectDetails
      projectIncompleteTasksData={projectIncompleteTasksData}
      projectCompletedTasksData={projectCompletedTasksData}
      isCompletedTaskOpen={isCompletedTaskOpen}
      onBackArrowPressed={onBackArrowPressed}
      onCompletedOpenPressed={onCompletedOpenPressed}
    />
  );
};

export default ProjectDetailsScreen;

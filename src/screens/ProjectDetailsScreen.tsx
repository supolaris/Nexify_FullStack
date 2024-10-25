import React, {useState} from 'react';
import ProjectDetails from '../components/ProjectDetails';
import {
  projectCompletedTasksData,
  projectIncompleteTasksData,
} from '../constants/StaticData';
import {useAppNavigation} from '../@types/AppNavigation';

const ProjectDetailsScreen = ({route}: {route: any}) => {
  const {item} = route.params;
  const navigation = useAppNavigation();
  const [isCompletedTaskOpen, setIsCompleteOpen] = useState<boolean>(false);

  const onCompletedOpenPressed = () => {
    setIsCompleteOpen(!isCompletedTaskOpen);
  };

  const onBackArrowPressed = () => {
    navigation.goBack();
  };

  const onTaskAddPressed = (id: number) => {
    navigation.navigate('NewTaskScreen', {id});
  };

  return (
    <ProjectDetails
      item={item}
      projectIncompleteTasksData={projectIncompleteTasksData}
      projectCompletedTasksData={projectCompletedTasksData}
      isCompletedTaskOpen={isCompletedTaskOpen}
      onBackArrowPressed={onBackArrowPressed}
      onCompletedOpenPressed={onCompletedOpenPressed}
      onTaskAddPressed={onTaskAddPressed}
    />
  );
};

export default ProjectDetailsScreen;

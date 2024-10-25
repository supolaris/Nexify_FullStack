import React, {useState} from 'react';
import NewTask from '../components/NewTask';
import {projectsData} from '../constants/StaticData';

import {useAppNavigation} from '../@types/AppNavigation';

const NewTaskScreen = ({route}: {route: any}) => {
  const id = route.params;
  const navigation = useAppNavigation();

  const [inputVals, setInputVals] = useState<{
    titleVal: string;
    descriptionVal: string;
  }>({
    titleVal: '',
    descriptionVal: '',
  });

  const onTaskCreatePressed = () => {
    navigation.navigate('HomeScreen');
  };

  const onHeaderCrossPressed = () => {
    navigation.goBack();
  };

  const handleInputChange = (field: string, val: string) => {
    setInputVals(preVal => ({
      ...preVal,
      [field]: val,
    }));
  };

  const onProjectAddPressed = () => {};

  return (
    <NewTask
      projectsData={projectsData}
      inputVals={inputVals}
      onTaskCreatePressed={onTaskCreatePressed}
      onHeaderCrossPressed={onHeaderCrossPressed}
      handleInputChange={handleInputChange}
      onProjectAddPressed={onProjectAddPressed}
    />
  );
};

export default NewTaskScreen;

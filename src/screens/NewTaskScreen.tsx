import React, {useState} from 'react';
import NewTask from '../components/NewTask';
import {projectsData} from '../constants/StaticData';

import {useAppNavigation} from '../@types/AppNavigation';
import {IprojectsData} from '../@types/CommonTypes';

const NewTaskScreen = ({route}: {route: any}) => {
  const id = route.params;
  const navigation = useAppNavigation();

  const [selectedProject, setSelectedProject] = useState<string>('');
  const [projectInputVal, setProjectInputVal] = useState<string>('');
  const [isAddProjectPopupVisible, setIsAddProjectPopupVisible] =
    useState<boolean>(false);
  const [inputVals, setInputVals] = useState<{
    titleVal: string;
    descriptionVal: string;
  }>({
    titleVal: '',
    descriptionVal: '',
  });

  const onTaskCreatePressed = () => {
    setInputVals({
      titleVal: '',
      descriptionVal: '',
    });
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

  const onProjectAddPressed = () => {
    setIsAddProjectPopupVisible(true);
  };

  const onProjectSelectPressed = (item: IprojectsData) => {
    setSelectedProject(item.title);
  };

  const onAddProjectPopupClose = () => {
    setIsAddProjectPopupVisible(false);
  };

  const handleProjectInputVal = (val: string) => {
    setProjectInputVal(val);
  };

  const onProjectCreatePressed = () => {
    setProjectInputVal('');
  };

  return (
    <NewTask
      projectsData={projectsData}
      inputVals={inputVals}
      selectedProject={selectedProject}
      isAddProjectPopupVisible={isAddProjectPopupVisible}
      projectInputVal={projectInputVal}
      handleProjectInputVal={handleProjectInputVal}
      onTaskCreatePressed={onTaskCreatePressed}
      onHeaderCrossPressed={onHeaderCrossPressed}
      handleInputChange={handleInputChange}
      onProjectAddPressed={onProjectAddPressed}
      onProjectSelectPressed={onProjectSelectPressed}
      onAddProjectPopupClose={onAddProjectPopupClose}
      onProjectCreatePressed={onProjectCreatePressed}
    />
  );
};

export default NewTaskScreen;

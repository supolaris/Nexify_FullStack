import React from 'react';
import ProjectDetails from '../components/ProjectDetails';
import {projectTasksData} from '../constants/StaticData';

const ProjectDetailsScreen = () => {
  return <ProjectDetails projectTasksData={projectTasksData} />;
};

export default ProjectDetailsScreen;

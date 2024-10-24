import React, {useEffect} from 'react';
import Splash from '../components/Splash';
import {useAppNavigation} from '../@types/AppNavigation';
import {MainStackScreenProps} from '../@types/NavigationTypes';

const SplashScreen = ({navigation}: MainStackScreenProps<'SplashScreen'>) => {
  // const navigation = useAppNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('NewTaskScreen');
    }, 1000);
  }, []);

  return <Splash />;
};

export default SplashScreen;

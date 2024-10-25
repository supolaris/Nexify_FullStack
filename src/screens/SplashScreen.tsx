import React, {useEffect} from 'react';
import Splash from '../components/Splash';
import {MainStackScreenProps} from '../@types/NavigationTypes';

const SplashScreen = ({navigation}: MainStackScreenProps<'SplashScreen'>) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('WalkthroughScreen');
    }, 1000);
  }, []);

  return <Splash />;
};

export default SplashScreen;

import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {addEventListener} from '@react-native-community/netinfo';
import {useAppContext} from '../context/AppContext';
import Loader from '../components/commons/Loader';
import {useAppNavigation} from '../@types/AppNavigation';

const WalkthroughScreen = () => {
  const navigation = useAppNavigation();
  const {setIsInternetConnected} = useAppContext();
  const [isLoaderVisible, setIsLoaderVisible] = useState(true);

  useEffect(() => {
    addEventListener(state => {
      setIsInternetConnected(state.isConnected);
    });
    setIsLoaderVisible(false);
    navigation.navigate('HomeScreen');
  }, []);

  return (
    <View style={{flex: 1}}>
      <Loader isLoaderVisible={isLoaderVisible} />
    </View>
  );
};

export default WalkthroughScreen;

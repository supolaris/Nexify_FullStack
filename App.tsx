import {StatusBar} from 'react-native';
import React from 'react';
import {AppColors} from './src/constants/AppColors';
import {NavigationContainer} from '@react-navigation/native';
import {Routes} from './src/navigations/Routes';
import {UserProvider} from './src/context/AppContext';

const App = () => {
  return (
    <>
      <StatusBar
        translucent={true}
        barStyle="dark-content"
        backgroundColor="transparent"
      />
      <NavigationContainer>
        <UserProvider>
          <Routes />
        </UserProvider>
      </NavigationContainer>
    </>
  );
};

export default App;

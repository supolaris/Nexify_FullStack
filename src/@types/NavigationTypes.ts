import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {IprojectsData} from './CommonTypes';

export type MainStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type RootStackParamList = {
  WalkthroughScreen: undefined;
  SplashScreen: undefined;
  LoginScreen: undefined;
  NewTaskScreen: {
    id: number;
  };
  HomeScreen: undefined;
  ProjectDetailsScreen: IprojectsData;
  ProfileScreen: undefined;
};

import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type MainStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type RootStackParamList = {
  WalkthroughScreen: undefined;
  SplashScreen: undefined;
  LoginScreen: undefined;
  NewTaskScreen: undefined;
  HomeScreen: undefined;
  ProfileScreen: undefined;
};

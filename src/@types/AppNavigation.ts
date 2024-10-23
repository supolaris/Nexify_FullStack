import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from './NavigationTypes';

export const useAppNaviation = () => {
  return useNavigation<NavigationProp<RootStackParamList>>();
};

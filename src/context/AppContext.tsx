import {
  ReactNode,
  createContext,
  useState,
  useContext,
  SetStateAction,
  FC,
} from 'react';

interface ContextType {
  authToken: string;
  isInternetConnected: boolean | null;
  setAuthToken: React.Dispatch<SetStateAction<ContextType['authToken']>>;
  setIsInternetConnected: React.Dispatch<
    React.SetStateAction<ContextType['isInternetConnected']>
  >;
}
const initialContextValue: ContextType = {
  authToken: '',
  isInternetConnected: true,
  setIsInternetConnected: () => {},
  setAuthToken: () => {},
};

const appContext = createContext<ContextType>(initialContextValue);
export const UserProvider: FC<{children: ReactNode}> = ({children}) => {
  const [authToken, setAuthToken] = useState<ContextType['authToken']>(
    initialContextValue['authToken'],
  );
  const [isInternetConnected, setIsInternetConnected] =
    useState<ContextType['isInternetConnected']>(true);

  return (
    <appContext.Provider
      value={{
        authToken,
        isInternetConnected,
        setIsInternetConnected,
        setAuthToken,
      }}>
      {children}
    </appContext.Provider>
  );
};
export const useAppContext = () => {
  const context = useContext(appContext);
  return context;
};

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './Utils/Navigation/Routes';


const App = () => {

  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default App;

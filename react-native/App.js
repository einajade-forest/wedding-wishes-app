import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNav from './navigation/TabNav';

const App = () => {
  return (
    <NavigationContainer>
      <TabNav />
    </NavigationContainer>
  );
};

export default App;
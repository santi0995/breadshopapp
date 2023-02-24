import AuthNavigator from './auth';
import { NavigationContainer } from '@react-navigation/native';
import TabsNavigator from './tabs';
import { useState } from 'react';

const AppNavigator = () => {
  const [userId, setUserId] = useState(null);
  return (
    <NavigationContainer>{userId ? <TabsNavigator /> : <AuthNavigator />}</NavigationContainer>
  );
};

export default AppNavigator;
